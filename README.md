# Long Horizon Hierarchy Project Page

This repository hosts the source code for the **Hierarchical VLM-RL Long-Horizon Manipulation** project website.  
The refreshed layout draws inspiration from both the [Skild AI homepage](https://www.skild.ai/) (layered hero windows, glassmorphism panels, ambient gradients) and the [ManipGen project page](https://mihdalal.github.io/manipgen/) (clean research-project sections for paper, code, videos, and results).

## Getting Started

The site is served from the [`docs/`](docs/) folder so it can be published easily using GitHub Pages. To preview the page locally, open `docs/index.html` in your browser, or serve the folder with a simple HTTP server:

```bash
cd docs
python -m http.server 8000
```

Then navigate to <http://localhost:8000>.

## Customizing the Page

Update `docs/index.html` to insert your own title, abstract, author list, teaser video, and links.

The template provides:
- An animated hero with switchable “windows”
- Teaser embed and highlight cards
- Gradient abstract and architecture panels
- Results bento cards and long-horizon galleries
- Resources and a BibTeX block
- Responsive navigation and a theme toggle

Each block contains placeholder copy so you can quickly replace it with project-specific content. Styling lives in `docs/assets/style.css`, and the responsive navigation, hero window rotation, and theme toggle behavior are defined in `docs/assets/script.js`.

Replace the placeholder architecture illustration at `docs/assets/architecture-placeholder.svg` with your own system diagram when you’re ready.

## Deploying on GitHub Pages

1. Commit your changes to the `main` branch.
2. In your repository **Settings → Pages**, set the source to `Deploy from a branch`, choose `main`, and select `/docs` as the folder.
3. Your site will be available at `https://<username>.github.io/<repository>/` after deployment completes.

Feel free to adapt sections, add new hero windows, or adjust gradients and motion to match your brand and narrative.