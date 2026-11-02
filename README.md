# Michael John J. Felices — Portfolio

Personal portfolio of a Bachelor of Science in Computer Science student. Built with plain HTML, CSS and JavaScript. No frameworks or build tools.

**Live site:** https://common-user1.github.io/Portfolio/

## Features
- Responsive, minimalist layout with subtle scroll animations (respects reduced motion)
- Dark mode toggle that remembers the visitor's choice
- Project case study page (Grade Checker)
- Education and skills section
- Achievements section (layout ready for future certificates)
- Printable resume page and downloadable CV (PDF)
- Contact form powered by Formspree, plus a copy-email button
- Availability badge
- SEO basics: sitemap, robots.txt, canonical URL and link-preview tags
- Skip link for keyboard users
- Custom 404 page and favicon

## Structure
```
index.html          home page
grade-checker.html  case study
resume.html         printable resume
404.html            not-found page
assets/             CV (PDF)
css/style.css       all styles (colors and fonts are variables at the top)
js/main.js          dark mode, animations, copy email, contact form, print
sitemap.xml         pages for search engines
robots.txt          crawler rules
```

## Run locally
Open `index.html` in a browser, or use the Live Server extension in VS Code. No setup needed.

## Customize
- Change colors and fonts in `css/style.css`, section 1.
- Add a new project by copying a `<li class="work-item reveal">` row in `index.html`.
- Add a certificate by following the comment inside the `#achievements` section.

## Deploy with GitHub Pages
1. Push this repository to GitHub.
2. Open the repository, then go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. The site appears at `https://common-user1.github.io/Portfolio/` after a minute.

## Roadmap
- **Phase 1 — Professional portfolio:** personal info, projects, skills, resume, contact (current)
- **Phase 2 — Portfolio management system:** admin dashboard, authentication, project management, analytics
- **Phase 3 — Advanced platform:** blog, case studies, visitor analytics, testimonials

## Commit style
Changes use short prefixes: `feat:` for features, `fix:` for bug fixes, `docs:` for documentation, `chore:` for housekeeping.