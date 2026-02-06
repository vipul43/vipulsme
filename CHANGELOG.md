# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Next.js 16.1.6 with App Router and Turbopack
- React 19.2.3
- TypeScript 5.7.3
- Tailwind CSS 4.1.3
- ESLint 9.18.0 and Prettier 3.8.1
- Locked versions in package.json (Node 24.13.0, npm 11.6.2)
- Makefile with setup, dev, build, lint, format, clean commands
- Page structure: Home, Education, Experience, Projects, Resume, Contact
- Home page with hero section and navigation
- Fixed navigation bar with active state highlighting
- Hero section with social links (GitHub, LinkedIn, Email)
- Resume page with PDF viewer and download functionality
- Contact page with LinkedIn, GitHub, and Email links
- Experience page with complete work history (6 positions: Dognosis, SubCom, Kwanzoo, UST Global)
- Professional experience summary card showing years of experience (auto-calculated from Aug 2022)
- Education page with academic background (IIT Palakkad, Narayana Junior College)
- Projects page with 5 projects (Kiwis.club, Blood Donation System, Face Mask Detector, Hospital Management, Image Description)
- Current projects highlighted with white border and "Current Project" badge
- Education page with coursework details (58 courses, 160 credits with CS courses highlighted, GitHub/Notion links for assignments and notes)
- Fixed navigation bar on all pages for seamless navigation between sections
- Profile image on home page hero section
- Fully responsive mobile design with optimized layouts for all screen sizes
- lucide-react 0.469.0 for icons
- Black theme across entire website (Next.js style)
- Client and Server Components architecture
- Metadata API for SEO
- Smooth animations and transitions

### Changed

- Global theme to pure black background with white text
- Resume page displays PDF inline with download option

### Fixed

- Resume page loading issue with iframe timeout
- ESLint configuration for ESLint 9 compatibility
