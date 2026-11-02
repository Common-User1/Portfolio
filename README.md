# Michael John J. Felices — Portfolio

Personal portfolio of a Bachelor of Science in Computer Science student. Built with plain HTML, CSS and JavaScript. No frameworks or build tools.

## Features
- Responsive, minimalist layout with subtle scroll animations (respects reduced motion)
- Dark mode toggle that remembers the visitor's choice
- Project case study page (Grade Checker)
- Education and skills section
- Printable resume page that saves cleanly as a PDF
- Availability badge and copy-email button
- Custom 404 page, favicon and link-preview tags

## Structure
```
index.html          home page
grade-checker.html  case study
resume.html         printable resume
404.html            not-found page
css/style.css       all styles (colors and fonts are variables at the top)
js/main.js          dark mode, animations, copy email, print
```

## Run locally
Open `index.html` in a browser. No setup needed.

## Customize
Search the HTML files for `[` and replace each bracket with real details. Change colors and fonts in `css/style.css`, section 1.

## Deploy with GitHub Pages
1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site appears at `https://<your-username>.github.io/<repository-name>/` after a minute.

## Commit style
Changes use short prefixes: `feat:` for features, `fix:` for bug fixes, `docs:` for documentation, `chore:` for housekeeping.
