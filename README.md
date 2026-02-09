# vipulsme

Personal website at [vipuls.me](https://vipuls.me)

## Tech Stack

- **Node.js**: 24.13.0
- **npm**: 11.6.2
- **Next.js**: 16.1.6 (App Router + Turbopack)
- **React**: 19.2.3
- **TypeScript**: 5.7.3
- **Tailwind CSS**: 4.1.3
- **ESLint**: 9.18.0
- **Prettier**: 3.8.1

All versions are locked in `package.json`.

## Setup

```bash
# Requires Node.js 24.13.0 and npm 11.6.2
make setup
```

## Commands

```bash
make dev        # Start dev server
make build      # Build for production
make lint       # Run linter
make format     # Format code
make clean      # Clean build artifacts
```

## Pages

- Home (landing with hero and navigation)
- Education (IIT Palakkad, Narayana Junior College, Professional Certifications)
- Experience (Dognosis, SubCom, Kwanzoo, UST Global)
- Projects (Kiwis.club, Blood Donation System, Face Mask Detector, Hospital Management, Image Description)
- Resume (with PDF viewer and download)
- Contact (LinkedIn, GitHub, Email, Google Calendar scheduling, Coding Profiles)

## Features

- Fixed navigation bar with active state highlighting on all pages
- Hero section with profile image and social links
- Professional experience summary showing total years (auto-calculated)
- Current projects highlighted with special styling
- Expandable coursework section (58 courses, 160 credits) with CS courses highlighted
- Professional certifications section with Deep Learning Specialization (5 courses)
- Collapsible certification courses with instructor details and completion dates
- Direct links to course assignments, projects, and notes (GitHub/Notion)
- Google Calendar integration for easy meeting scheduling
- Coding profiles section (LeetCode, GeeksforGeeks, CodeChef, Codeforces)
- Fully responsive mobile-first design
- Smooth animations and transitions
- Optimized for all screen sizes (mobile, tablet, desktop)
