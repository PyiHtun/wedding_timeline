# Wedding Timeline

A simple interactive one-page wedding timeline built with Vite.

## Run locally

```bash
npm install
npm run dev
```

## Add your photos

Put your images in:

```text
public/images/
```

Suggested filenames:

- `the-curve.jpg`
- `photos.jpg`
- `crown-inn.jpg`

If an image is missing, the site automatically shows a placeholder instead.

## Crown Inn map

Open `src/main.js` and find the `Wedding Reception & Welcome` event.

Add the exact Google Maps search URL to the `map` field once the exact Crown Inn is confirmed.

## Deploy to GitHub Pages

1. Push the project to your GitHub repository.
2. Open the repo on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Push to the `main` branch.
6. The included workflow will build and publish the site automatically.
