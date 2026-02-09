# Make your site live (GitHub Pages)

Your site deploys to **https://sahad2701.github.io**.

---

## Option A: Deploy automatically when you push (recommended)

A GitHub Action builds and deploys your site whenever you push to `main`.

### 1. Use GitHub Actions as the Pages source

1. Open your repo: **https://github.com/sahad2701/sahad2701.github.io**
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: choose **GitHub Actions** (not “Deploy from a branch”).
4. Click **Save** (no branch or folder to pick).

### 2. Push to trigger the Action

```bash
git add .
git commit -m "Deploy via Actions"
git push origin main
```

4. Go to the **Actions** tab. You should see the “Deploy to GitHub Pages” workflow run. When it finishes (green ✓), the site is live.

**If the Action fails:** open the failed run, click the failed job, and read the error log. Common fixes:
- **Pages source:** It must be **GitHub Actions**. If it’s “Deploy from a branch”, the deploy step can fail.
- **Secrets:** Only needed if you use live GitHub/Medium data (see Optional below).

---

## Option B: Deploy from your computer

In the project folder run:

```bash
npm run deploy
```

Then in **Settings** → **Pages** set **Source** to “Deploy from a branch”, **Branch** to `gh-pages`, **Folder** to `/ (root)`.

---

## Optional: Live GitHub / Medium data in the Action

The Action runs the build with `USE_GITHUB_DATA=false` unless you set secrets, so the site still builds without them.

To fetch profile/repos from GitHub and blogs from Medium in CI:

1. **Settings** → **Secrets and variables** → **Actions** → **New repository secret**
2. Add:
   - `GITHUB_USERNAME` – your GitHub username  
   - `REACT_APP_GITHUB_TOKEN` – a [GitHub token](https://github.com/settings/tokens) with `read:user`  
   - `USE_GITHUB_DATA` – set value to `true`  
   - `MEDIUM_USERNAME` – (optional) your Medium username for blog feed  

After saving, the next push will use these in the build.

---

**Live URL:** https://sahad2701.github.io
