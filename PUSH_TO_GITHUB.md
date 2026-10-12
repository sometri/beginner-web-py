# Push to GitHub Guide (Beginner Friendly)

Follow these commands step by step to push this project to GitHub. Do them one by one in your terminal.

Repository: https://github.com/YOUR_GITHUB_USERNAME/beginner-web-py

## What you need first

1. Create a GitHub account: https://github.com/signup
2. Install Git: https://git-scm.com/downloads (if not installed)
3. Create the empty repository on GitHub named `beginner-web-py` at https://github.com/new (if you haven't already)

## 1. Check if Git is installed

Open your terminal (Command Prompt, PowerShell, or Terminal) and run:

```bash
git --version
```

If you see something like `git version 2.xx.x`, you're good to go.

## 2. Go to your project folder

In your terminal, change directory to the project:

```bash
cd D:\py\beginner-web-py
```

## 3. Configure Git (set your identity)

Use YOUR actual GitHub username and email. For example:

```bash
git config user.name "your_github_username"
git config user.email "your_github_email@gmail.com"
```

Change `your_github_username` to your GitHub username (e.g., `sometri`) and `your_github_email@gmail.com` to the email you used for GitHub.

You only need to do this once per computer.

## 4. Initialize Git (only if this is the first time)

If you see `.git` folder already exists (which it does now), skip this step.

```bash
git init
```

## 5. Link your GitHub repo (only if not linked)

Check if remote is already added:

```bash
git remote -v
```

If you don't see `origin`, add it. Replace the URL with your own repository URL.

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git
```

For example: `https://github.com/sometri/beginner-web-py.git`

## 6. See what changed

```bash
git status
```

This shows files ready to be saved.

## 7. Add all files

```bash
git add .
```

This tells Git "I want to save all these files".

## 8. Save your changes (commit)

```bash
git commit -m "Add Python Flask web app"
```

The message can be anything - it describes what you changed.

## 9. Push to GitHub

Send your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

The first time you push, use `-u`. Next time, just `git push` is enough.

## Troubleshooting & Tips

- **Authentication error**: GitHub now asks for a Personal Access Token (PAT) instead of password. Generate one at https://github.com/settings/tokens and use it as password when prompted.
- **Check current branch**: `git branch`
- **Check what will be committed**: `git diff --cached`
- **Push again later**: After making changes, just run `git add .`, `git commit -m "your message"`, `git push`
- **Run locally**: See README.md for how to run the Flask app
- **SSH instead of HTTPS**: If you prefer SSH, replace the URL with `git@github.com:sometri/beginner-web-py.git`
