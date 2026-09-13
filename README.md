# Personal website — Nafiz Imtiaz Rafin

A static academic site. No build step, no dependencies: plain HTML, CSS, and a small
JavaScript file. It works on GitHub Pages as-is.

## Files

```
index.html                     the whole page
assets/css/style.css           styles
assets/js/main.js              publication filter + footer year
assets/Nafiz_Imtiaz_Rafin_CV.pdf   linked from the hero and contact section
.nojekyll                      tells GitHub Pages to serve files as they are
```

## Put it online

1. On GitHub, create a new **public** repository named `yourusername.github.io`
   (replace `yourusername` with your GitHub username). Leave it empty — no README.
2. Upload every file in this folder to the repository root. Easiest way:
   open the repository, click **Add file → Upload files**, drag the contents in,
   and commit. Keep the `assets` folder structure intact.
3. Go to **Settings → Pages**. Under *Build and deployment*, set
   Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait about a minute. The site is live at `https://yourusername.github.io`.

If you prefer the command line:

```bash
git init
git add .
git commit -m "Personal website"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

If you name the repository something else (for example `website`), the site will be at
`https://yourusername.github.io/website/` instead. Everything still works, because all
links in the page are relative.

## Things to edit before you publish

In `index.html`, search for these and replace them with your real URLs:

- `https://scholar.google.com/` → your Google Scholar profile
- `https://github.com/` → your GitHub profile
- `https://linkedin.com/` → your LinkedIn profile

To add or update a publication, copy one `<li class="entry">` block in the
publications section and change the text. The `data-type` attribute controls which
filter it appears under: `journal`, `conference`, or `submission`. The code in
`<span class="entry__code">` is the label shown on the left.

To replace the CV, overwrite `assets/Nafiz_Imtiaz_Rafin_CV.pdf` with a file of the
same name.

## Custom domain (optional)

Buy a domain, then create a file named `CNAME` in the repository root containing only
your domain, for example:

```
nafizrafin.com
```

Then add these DNS records at your domain registrar:

- Four `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- One `CNAME` record for `www` pointing to `yourusername.github.io`

Back in **Settings → Pages**, enter the domain and tick **Enforce HTTPS** once the
certificate is ready.
