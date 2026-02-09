# Create new repo so site works at https://sahad2701.github.io

Your GitHub username is **sahad2701**. For the short URL to work, the repo must be named **sahad2701.github.io**.

---

## Step 1: Create new repo on GitHub

1. Go to **https://github.com/new**
2. **Repository name:** type exactly **`sahad2701.github.io`**
3. Set Public. Do **not** add README, .gitignore, or license (you already have them).
4. Click **Create repository**.

---

## Step 2: Push this project to the new repo

In your project folder (in terminal):

```bash
# Add the new repo as remote (use your new repo URL)
git remote add origin https://github.com/sahad2701/sahad2701.github.io.git

# If you already have an origin (old sahad2710 repo), replace it instead:
# git remote remove origin
# git remote add origin https://github.com/sahad2701/sahad2701.github.io.git

# Push everything to the new repo
git push -u origin main
```

If your branch is **master** instead of **main**, use:

```bash
git push -u origin master
```

---

## Step 3: Turn on GitHub Pages

1. On GitHub, open the repo **sahad2701.github.io**
2. **Settings** → **Pages**
3. Under **Build and deployment** → **Source:** choose **GitHub Actions**
4. Save

---

## Step 4: Wait for deploy

1. Go to the **Actions** tab
2. Wait for **Deploy to GitHub Pages** to finish (green check)
3. Open **https://sahad2701.github.io** (1–2 minutes later)

Done. Your portfolio will be live at that URL.
