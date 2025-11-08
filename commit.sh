#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting sequential git commits...${NC}\n"

# 1. Navbar Component
if [ -f "components/navbar.tsx" ]; then
  echo -e "${YELLOW}Committing: Navbar Component${NC}"
  git add components/navbar.tsx
  git commit -m "feat: add floating navbar with responsive mobile menu

- Implement fixed navbar with backdrop blur effect
- Add responsive navigation links (Home, About, Projects, Contact)
- Integrate mobile menu using shadcn Sheet component
- Add smooth animations with Framer Motion
- Support for mobile and desktop layouts"
  echo -e "${GREEN}✓ Navbar committed${NC}\n"
fi

# 2. Theme Button Component
if [ -f "components/theme-button.tsx" ]; then
  echo -e "${YELLOW}Committing: Theme Button Component${NC}"
  git add components/theme-button.tsx
  git commit -m "feat: add animated theme switcher with light/dark/system modes

- Create ModeToggle component with dropdown menu
- Implement icon transitions using Framer Motion
- Add active state indicator with animated dot
- Support three theme modes: light, dark, and system
- Integrate next-themes for persistent theme management"
  echo -e "${GREEN}✓ Theme Button committed${NC}\n"
fi

# 3. Theme Provider Component
if [ -f "components/theme-provider.tsx" ]; then
  echo -e "${YELLOW}Committing: Theme Provider Component${NC}"
  git add components/theme-provider.tsx
  git commit -m "feat: add theme provider wrapper

- Create ThemeProvider component using next-themes
- Enable system theme detection
- Configure class-based theme switching"
  echo -e "${GREEN}✓ Theme Provider committed${NC}\n"
fi

# 4. Hero Section Component
if [ -f "components/hero-section.tsx" ]; then
  echo -e "${YELLOW}Committing: Hero Section Component${NC}"
  git add components/hero-section.tsx
  git commit -m "feat: add hero section with GitHub API integration

- Create hero banner with responsive heights
- Integrate GitHub API for real-time stats (repos, followers, join year)
- Add profile avatar and bio section
- Implement staggered animations for content reveal
- Add responsive layout for mobile and desktop views"
  echo -e "${GREEN}✓ Hero Section committed${NC}\n"
fi

# 5. About Section Component
if [ -f "components/about-section.tsx" ]; then
  echo -e "${YELLOW}Committing: About Section Component${NC}"
  git add components/about-section.tsx
  git commit -m "feat: add comprehensive about section

- Add detailed professional bio with work experience
- Create highlights grid with 4 professional cards
- Add comprehensive tech stack showcase (25+ technologies)
- Implement animated skill badges with hover effects
- Include Linux enthusiast section (Arch Linux, i3wm, Neovim, tmux)
- Add desktop setup showcase with hover animations
- Add CTA section with email and GitHub links
- Use whileInView animations for scroll-triggered effects"
  echo -e "${GREEN}✓ About Section committed${NC}\n"
fi

# 6. Layout Updates
if [ -f "app/layout.tsx" ]; then
  echo -e "${YELLOW}Committing: Layout Updates${NC}"
  git add app/layout.tsx
  git commit -m "fix: add suppressHydrationWarning for theme integration

- Fix hydration error with next-themes
- Add ThemeProvider wrapper to root layout
- Configure Inter font as default"
  echo -e "${GREEN}✓ Layout committed${NC}\n"
fi

# 7. Global CSS Updates
if [ -f "app/globals.css" ]; then
  echo -e "${YELLOW}Committing: Global CSS Updates${NC}"
  git add app/globals.css
  git commit -m "style: update fonts and theme variables

- Import Inter and JetBrains Mono fonts
- Set Inter as default sans font
- Configure theme color variables"
  echo -e "${GREEN}✓ Global CSS committed${NC}\n"
fi

# 8. shadcn UI Components
if [ -d "components/ui" ]; then
  echo -e "${YELLOW}Committing: shadcn UI Components${NC}"
  git add components/ui/
  git commit -m "feat: add shadcn ui components

- Add Button component
- Add Sheet component for mobile menu
- Add Dropdown Menu component for theme switcher"
  echo -e "${GREEN}✓ UI Components committed${NC}\n"
fi

# 9. Config and Package files
echo -e "${YELLOW}Committing: Configuration files${NC}"
git add package.json package-lock.json components.json 2>/dev/null
git commit -m "chore: update dependencies and shadcn config

- Add Framer Motion for animations
- Add next-themes for theme management
- Add lucide-react for icons
- Configure shadcn ui components" 2>/dev/null
echo -e "${GREEN}✓ Config files committed${NC}\n"

# 10. Commit any remaining changes
if [ -n "$(git status --porcelain)" ]; then
  echo -e "${YELLOW}Committing: Remaining changes${NC}"
  git add .
  git commit -m "chore: update remaining files and assets"
  echo -e "${GREEN}✓ Remaining files committed${NC}\n"
fi

echo -e "\n${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ All commits completed successfully!${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}\n"
echo -e "${BLUE}Run 'git push' to push all commits to remote repository${NC}"
