# Long Horizon Hierarchy Project Page

This repository hosts the source code for the Long Horizon Hierarchy project website. The layout is inspired by the
[ManipGen project page](https://mihdalal.github.io/manipgen/) and provides ready-made sections for showcasing a paper,
code, videos, architecture diagrams, and results.

## Getting Started

The site is served from the [`docs/`](docs/) folder so it can be published easily using GitHub Pages. To preview the page
locally, open `docs/index.html` in your browser, or serve the folder with a simple HTTP server:

```bash
cd docs
python -m http.server 8000
```

Then navigate to <http://localhost:8000>.

## Customizing the Page

Update `docs/index.html` to insert your own title, abstract, author list, teaser video, and links. The key sections are
annotated with placeholder text so you can quickly swap in real content. Styling lives in `docs/assets/style.css`, and a
small script for the responsive navigation bar is defined in `docs/assets/script.js`.

Replace the placeholder architecture illustration stored at `docs/assets/architecture-placeholder.svg` with your own
system diagram when you are ready.

## Deploying on GitHub Pages

1. Commit your changes to the `main` branch.
2. In your repository settings, enable GitHub Pages and select the `main` branch with the `/docs` folder as the source.
3. The site will be available at `https://<username>.github.io/<repository>/` after the deployment completes.

Feel free to modify the sections or add new ones to match your project narrative.
