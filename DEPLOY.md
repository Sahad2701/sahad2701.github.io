# Make your site live (GitHub Pages)

Your site is already set up to deploy to **https://sahad2701.github.io**.

## 1. Deploy from your computer

In the project folder, run:

```bash
npm run deploy
```

This builds the app and pushes the `build` folder to the `gh-pages` branch on GitHub.

## 2. Turn on GitHub Pages

1. Open your repo: **https://github.com/sahad2701/sahad2701.github.io**
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**.

## 3. Wait and open

After 1–2 minutes, your site will be live at:

**https://sahad2701.github.io**

---

**Later:** After any change, run `npm run deploy` again and the live site will update.
