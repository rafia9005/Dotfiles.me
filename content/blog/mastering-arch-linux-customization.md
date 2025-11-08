---
title: "Mastering Arch Linux Customization"
date: "2025-01-05"
excerpt: "Deep dive into customizing Arch Linux with BSPWM, creating a beautiful and efficient workflow that suits your needs."
thumbnail: "/desktop.png"
tags: ["Linux", "Arch", "BSPWM"]
author: "Ahmad Rafi'i"
---

# Mastering Arch Linux Customization

Arch Linux is known for its flexibility and customization potential. In this guide, we'll explore how to create a beautiful and efficient development environment with BSPWM window manager.

## Why Arch Linux?

- **Rolling release**: Always up-to-date packages
- **Full control**: Build your system from ground up
- **AUR**: Access to thousands of packages
- **Lightweight**: Minimal base installation
- **Great documentation**: The Arch Wiki is legendary

## Installing BSPWM

BSPWM is a tiling window manager that represents windows as leaves of a binary tree.

```bash
sudo pacman -S bspwm sxhkd
```

## Configuration Structure

```
~/.config/
├── bspwm/
│   └── bspwmrc
├── sxhkd/
│   └── sxhkdrc
├── alacritty/
│   └── alacritty.yml
└── polybar/
    └── config.ini
```

## BSPWM Configuration

Edit `~/.config/bspwm/bspwmrc`:

```bash
#!/bin/sh

# Monitors and Desktops
bspc monitor -d I II III IV V

# Window rules
bspc config border_width         2
bspc config window_gap          12
bspc config split_ratio          0.52
bspc config borderless_monocle   true
bspc config gapless_monocle      true

# Colors
bspc config focused_border_color  "#6c71c4"
bspc config normal_border_color   "#1e2127"
```

## Keyboard Shortcuts

Edit `~/.config/sxhkd/sxhkdrc`:

```bash
# Terminal
super + Return
    alacritty

# Program launcher
super + d
    rofi -show drun

# Close window
super + shift + q
    bspc node -c

# Reload config
super + Escape
    pkill -USR1 -x sxhkd
```

## Essential Tools

Install these for a complete setup:

```bash
sudo pacman -S \
    alacritty \
    rofi \
    polybar \
    picom \
    nitrogen \
    dunst \
    neovim \
    tmux
```

## Dotfiles Management

Use Git to manage your dotfiles:

```bash
# Create bare repository
git init --bare $HOME/.dotfiles

# Create alias
alias config='/usr/bin/git --git-dir=$HOME/.dotfiles/ --work-tree=$HOME'

# Hide untracked files
config config --local status.showUntrackedFiles no

# Add files
config add .config/bspwm/bspwmrc
config commit -m "Add bspwm config"
config push
```

## Theming

### GTK Theme

```bash
sudo pacman -S lxappearance
```

### Color Scheme

I use a custom color scheme based on Gruvbox:

```
Background: #1e2127
Foreground: #abb2bf
Accent:     #6c71c4
```

## Performance Tips

1. **Disable unused services**
2. **Use lightweight alternatives**
3. **Optimize boot time with systemd-analyze**
4. **Use preload for frequently used apps**

## My Setup

- **WM**: BSPWM
- **Terminal**: Alacritty
- **Editor**: Neovim
- **Shell**: Zsh with Oh My Zsh
- **Font**: JetBrains Mono

## Conclusion

Customizing Arch Linux with BSPWM gives you a fast, beautiful, and efficient development environment. The learning curve is steep, but the rewards are worth it.

Check out my [dotfiles repo](https://github.com/rafia9005/config) for my complete configuration!

Happy ricing! 🎨
