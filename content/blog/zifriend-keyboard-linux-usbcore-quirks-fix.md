---
title: "Fix Zifriend Keyboard Not Working on Linux (ZA63, ZA68, and Others)"
date: "2025-01-06"
excerpt: "Having issues with your Zifriend keyboard not working on Linux? Learn how to fix wired mode detection problems using usbcore.quirks on Arch Linux and other distros."
thumbnail: "/images/zifriend-keyboard-linux-usbcore-quirks-fix.png"
tags: ["Linux", "Arch", "Keyboard", "Fix", "Hardware"]
author: "Ahmad Rafi'i"
---

## 🔌 The Problem

If you have a Zifriend keyboard (ZA63, ZA68, or Pro variants), you may have experienced this issue: the keyboard is not detected in Linux when using wired mode, even though it works fine on Windows, macOS, and even BIOS or GRUB.

When you check the kernel log with:

```bash
dmesg
```

You will find errors like:

```
[  341.170852] usb 1-4: new full-speed USB device number 12 using xhci_hcd
[  346.541131] usb 1-4: unable to read config index 0 descriptor/start: -71
[  346.541138] usb 1-4: can't read configurations, error -71
```

The keyboard also does not appear in the output of:

```bash
lsusb
libinput list-devices
```

However, wireless mode (2.4GHz/Bluetooth) still works. This means it is not a hardware failure, but a USB initialization issue in the Linux kernel.

---

## 🧠 Why This Happens

Zifriend keyboards (also sold under brands like SAMA, Cyberlinx, Gamestop) don't officially support Linux. Their USB descriptors are non-standard, causing the Linux kernel to fail during device initialization.

Windows drivers handle this gracefully with custom quirks, but Linux needs manual configuration. The solution is to tell the kernel to skip certain USB checks using the usbcore.quirks parameter.

---

## 💡 What is usbcore.quirks?

The usbcore.quirks kernel parameter allows you to define custom USB device handling rules based on:

- **Vendor ID (VID)** - Manufacturer identifier
- **Product ID (PID)** - Device identifier  
- **Quirk flags** - Special handling instructions

**Syntax:**
```
usbcore.quirks=VID:PID:flags
```

For Zifriend keyboards, the gki flag works best:

- **g** - No device descriptor getter
- **k** - Skip interface check
- **i** - Ignore device quirks

---

## 🛠️ Step-by-Step Fix

### 1️⃣ Find Your Keyboard's USB IDs

Since the keyboard doesn't appear in Linux with lsusb, you need to check it on Windows.

#### Method A: Device Manager (Recommended)

1. Boot into Windows
2. Open Device Manager (Win + X → Device Manager)
3. Expand Keyboards or Human Interface Devices
4. Right-click your Zifriend keyboard → Properties
5. Go to Details tab → Select Hardware IDs
6. You'll see something like:
   ```
   USB\VID_5566&PID_0008
   ```
   - Vendor ID (VID): 5566
   - Product ID (PID): 0008

#### Method B: PowerShell (Advanced)

If Device Manager shows it as generic "HID Device":

```powershell
Get-PnpDevice -PresentOnly | Where-Object { $_.InstanceId -match '^USB' }
```

> 💡 For most Zifriend keyboards, the usual values are: VID 5566 and PID 0008

### 2️⃣ Add Kernel Parameter to GRUB

Now apply the fix by editing your bootloader configuration.

**Step 1:** Open GRUB config
```bash
sudo nano /etc/default/grub
```

**Step 2:** Find this line:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
```

**Step 3:** Add the quirk parameter:
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash usbcore.quirks=5566:0008:gki"
```

**Step 4:** Save the file with Ctrl+O → Enter → Ctrl+X, then regenerate GRUB:
```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

**Step 5:** Reboot
```bash
sudo reboot
```

### 3️⃣ Verify the Fix

After reboot, plug in your keyboard and verify:

```bash
lsusb
```

You should see:
```
Bus 001 Device 012: ID 5566:0008 Zifriend Keyboard
```

✅ **Success!** Your keyboard now works in wired mode.

Test functionality:
```bash
# Check if the keyboard is detected
libinput list-devices

# Monitor keyboard events
sudo evtest
```

---

## 🎯 Troubleshooting

### Keyboard Still Not Working?

Try alternative quirk flags:

```bash
# Option 1: Only gk flag
usbcore.quirks=5566:0008:gk

# Option 2: Only i flag  
usbcore.quirks=5566:0008:i

# Option 3: All flags
usbcore.quirks=5566:0008:gki
```

### For Other Bootloaders

**systemd-boot** (/boot/loader/entries/*.conf):
```
options root=UUID=xxx rw usbcore.quirks=5566:0008:gki
```

**rEFInd** (refind_linux.conf):
```
"Boot with quirks" "root=UUID=xxx rw usbcore.quirks=5566:0008:gki"
```

---

## 📚 Understanding Quirk Flags

| Flag | Description |
|------|-------------|
| **g** | Skip GET_DEVICE_DESCRIPTOR request |
| **k** | Skip interface/configuration checks |
| **i** | Ignore device-specific quirks |
| **m** | Disable autosuspend |
| **n** | Reset device on resume |

Learn more:
- [Kernel usbcore.quirks documentation](https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html)
- [USB quirks source code](https://github.com/torvalds/linux/blob/master/drivers/usb/core/quirks.c)

---

## 🌍 Distro Compatibility

This fix works on:
- ✅ Arch Linux / Manjaro / EndeavourOS
- ✅ Ubuntu / Debian / Linux Mint
- ✅ Fedora / RHEL / CentOS
- ✅ openSUSE / SLES
- ✅ Any distro using GRUB2 or systemd-boot

---

## 💬 Final Thoughts

Zifriend keyboards offer excellent value, but their lack of official Linux support can be frustrating. With this simple kernel parameter tweak, you can unlock full wired functionality without needing proprietary drivers.

**Remember:** Sometimes fixing hardware on Linux just takes a bit of kernel magic 🧙‍♂️

If this guide helped you, share it with others facing similar issues!

---

## 🔗 Related Issues

- [GitHub: Zifriend ZA68 not detected on Linux](https://github.com/ken-kuro/Zifriend-Keyboard-Linux)
- [ArchWiki: Keyboard input](https://wiki.archlinux.org/title/Keyboard_input)
- [Linux USB quirks documentation](https://www.kernel.org/doc/html/latest/usb/quirks.html)

---

## Additional Notes

- The same method should work on most Linux distros (Arch, Fedora, Ubuntu, Debian, etc.)
- Some users reported success using gk or i instead of gki — if one flag doesn't work, experiment a bit
- You can learn more about these flags by reading:
  - [Linux kernel documentation on usbcore.quirks](https://www.kernel.org/doc/html/v5.0/admin-guide/kernel-parameters.html)
  - [The quirks.c source file](https://github.com/torvalds/linux/blob/master/drivers/usb/core/quirks.c)

---

## Conclusion

Zifriend keyboards deliver great features for their price, but their lack of Linux support can be frustrating. Thankfully, with a simple kernel tweak using usbcore.quirks, you can make them fully functional — even in wired mode.

If this guide helped you, consider sharing it with others struggling with similar issues. And remember: sometimes, fixing hardware on Linux just takes a bit of kernel magic 🧙‍♂️.

---