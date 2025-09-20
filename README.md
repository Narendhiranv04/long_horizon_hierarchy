# Long Horizon Hierarchy Project Page

This repository hosts the source code for the Hierarchical VLM-RL Long Horizon Manipulation project website. The refreshed
layout is inspired by the [Skild AI homepage](https://www.skild.ai/) with layered hero windows, glassmorphism panels, and
ambient gradients that make it easy to showcase long-horizon manipulation work.

## Getting Started

The site is served from the [`docs/`](docs/) folder so it can be published easily using GitHub Pages. To preview the page
locally, open `docs/index.html` in your browser, or serve the folder with a simple HTTP server:

```bash
cd docs
python -m http.server 8000
```

Then navigate to <http://localhost:8000>.

## Customizing the Page

Update `docs/index.html` to insert your own title, abstract, author list, teaser video, and links. The template now features
an animated hero with switchable “windows,” updated highlight cards, gradient abstract and architecture panels, results
bento cards, a long-horizon gallery, resources, and a BibTeX block—each filled with placeholder copy so you can quickly
swap in project-specific content. Styling lives in `docs/assets/style.css`, and the responsive navigation, hero window
rotation, and theme toggle behavior are defined in `docs/assets/script.js`.

Replace the placeholder architecture illustration stored at `docs/assets/architecture-placeholder.svg` with your own
system diagram when you are ready.

## Deploying on GitHub Pages

1. Commit your changes to the `main` branch.
2. In your repository settings, enable GitHub Pages and select the `main` branch with the `/docs` folder as the source.
3. The site will be available at `https://<username>.github.io/<repository>/` after the deployment completes.

Feel free to adapt the sections, add new hero windows, or adjust the gradients and motion to match your brand.
