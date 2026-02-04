# Copilot Agent Instructions for Portfolio Website

## Project Overview

This is a personal portfolio website built with **Docusaurus** for Shanthalingaiah SM, a Senior Information Developer with 7+ years of experience in technical writing across fintech, healthcare, and automotive industries.

## Tech Stack

- **Framework**: Docusaurus 3.x (React-based static site generator)
- **Language**: TypeScript, JavaScript
- **Styling**: CSS Modules, custom CSS
- **Content**: Markdown, MDX
- **Package Manager**: npm
- **Version Control**: Git

## Project Structure

```
portfolio-master/
├── blog/                    # Blog posts in Markdown
│   └── authors.yml          # Blog author definitions
├── docs/                    # Documentation pages
├── src/
│   ├── components/          # React components (Experience, Education, Project, etc.)
│   ├── css/                 # Custom stylesheets
│   ├── pages/               # Main pages (index.js)
│   ├── types/               # TypeScript type definitions
│   └── utils/
│       └── data.ts          # Main data file for projects, experience, education
├── static/
│   └── img/                 # Static images and logos
├── docusaurus.config.js     # Main Docusaurus configuration
├── sidebars.js              # Sidebar configuration
└── package.json             # Dependencies and scripts
```

## Key Files

### `src/utils/data.ts`
Contains all portfolio data:
- `projects`: Array of project objects (img, title, description, codeLink, liveLink, techstack)
- `experience`: Array of work experience objects (img, jobTitle, company, date, workLength, location, tasks, techstack)
- `education`: Array of education objects (img, school, study, date)

### `docusaurus.config.js`
Main configuration including:
- Site metadata (title, tagline, URL)
- Navbar configuration (logo, menu items)
- Footer configuration
- Theme settings (colorMode, prism)
- Plugin configurations (PWA, Algolia search)

### `blog/authors.yml`
Blog author definitions with:
- `name`, `title`, `url`, `image_url`

## Coding Standards

### TypeScript/JavaScript
- Use TypeScript for type safety
- Follow existing naming conventions in the codebase
- Keep data structures consistent with existing patterns

### Styling
- Use CSS Modules for component-specific styles
- Follow existing color scheme and design patterns
- Ensure dark mode compatibility

### Content
- Use Markdown for blog posts
- Follow Microsoft Manual of Style (MSTP) for technical writing
- Keep descriptions concise but informative

## Common Tasks

### Adding a New Project
Edit `src/utils/data.ts` and add to the `projects` array:
```typescript
{
  img: 'img/project-image.png',
  title: 'Project Title',
  description: 'Brief description of the project.',
  codeLink: 'https://github.com/...',
  liveLink: 'https://live-url.com',
  techstack: ['Tech1', 'Tech2', 'Tech3'],
}
```

### Adding a New Experience
Edit `src/utils/data.ts` and add to the `experience` array:
```typescript
{
  img: 'img/company-logo.png',
  jobTitle: 'Job Title',
  company: 'Company Name',
  date: 'Start Date - End Date',
  workLength: 'X years Y months',
  location: 'City, State, Country',
  tasks: ['Key responsibility or achievement'],
  techstack: ['Skill1', 'Skill2'],
}
```

### Adding a New Blog Post
Create a new file in `blog/` with format: `YYYY-MM-DD-post-slug.md`
```markdown
---
slug: post-slug
title: Post Title
authors: [shanthsm]
tags:
  - tag1
  - tag2
date: YYYY-MM-DD
---

Blog content here...

<!-- truncate -->

More content...
```

### Adding Images
1. Save images to `static/img/`
2. Reference in code as `img/filename.png` (without leading slash for data.ts)
3. Supported formats: PNG, JPG, SVG

## Development Commands

```bash
npm install          # Install dependencies
npm start            # Start dev server (http://localhost:3000/portfolio-master/)
npm run build        # Build for production
npm run clear        # Clear cache
npm run serve        # Serve production build locally
```

## Git Configuration

This repository uses:
- **Remote**: `git@github.com-personal:shanthsm/portfolio-master.git`
- **SSH Key**: `~/.ssh/id_ed25519_personal` (Personal GitHub - shanthsm)
- **Local Git User**: Shanthalingaiah SM (shanth.hr18@gmail.com)

## Important Notes

1. **Image Paths**: Use `img/filename.png` without leading slash in `data.ts`
2. **Blog Authors**: Use `shanthsm` as author key (defined in `authors.yml`)
3. **Dark Mode**: Site defaults to dark mode (configured in `docusaurus.config.js`)
4. **Base URL**: Site is served at `/portfolio-master/` path
5. **PWA**: Progressive Web App is enabled with custom manifest

## Owner Information

- **Name**: Shanthalingaiah SM
- **Role**: Senior Information Developer
- **GitHub**: https://github.com/shanthsm
- **LinkedIn**: https://www.linkedin.com/in/shanth-sm
- **Email**: shanth.hr18@gmail.com
