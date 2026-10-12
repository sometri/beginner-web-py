# Guide: Push This Project to GitHub

This guide works for **any GitHub account** (`YOUR_GITHUB_USERNAME`), **any project name**
(`beginner-web-py`), and **any repository** — whether it is **public** or **private**.

Replace the placeholders as you go:

- `YOUR_GITHUB_USERNAME` — your GitHub username, e.g. `sometri`
- `beginner-web-py` — the repo name (you can change if you want)
- `your_email@gmail.com` — the email tied to your GitHub account

Run all commands from the project folder (e.g. `D:\py\beginner-web-py`).

---

## Step 1 — Check if Git is installed

```bash
git --version
```

If not installed, get it from https://git-scm.com/downloads.

## Step 2 — Go to your project folder

```bash
cd path/to/your/beginner-web-py
```

## Step 3 — Set your identity (only needed once per machine)

```bash
git config --global user.name "YOUR_GITHUB_USERNAME"
git config --global user.email "your_email@gmail.com"
```

> If you want it only for this project (not global), remove `--global`.

## Step 4 — Initialize git (if not already)

```bash
git init
```

## Step 5 — Stage the files you want to publish

```bash
git add .
```

> `.gitignore` can be added if you want to exclude files (like `.venv`, `__pycache__`, etc.)

## Step 6 — Create the first commit

```bash
git commit -m "Initial commit"
```

## Step 7 — Rename the branch to `main`

```bash
git branch -M main
```

## Step 8 — Create the repository on GitHub

### Option A — Public repository
Good for sharing with others.

**On the website:** GitHub → **New repository** → name it `beginner-web-py` →
visibility **Public** → **Create repository** (do *not* add a README).

**Or with GitHub CLI:**
```bash
gh repo create beginner-web-py --public --source=. --push
```

### Option B — Private repository
Only you and invited people can see it.

**On the website:** GitHub → **New repository** → name it `beginner-web-py` →
visibility **Private** → **Create repository** (do *not* add a README).

**Or with GitHub CLI:**
```bash
gh repo create beginner-web-py --private --source=. --push
```

## Step 9 — Connect your local repo to GitHub

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/beginner-web-py.git
```

If the repo already has commits on GitHub (e.g. a README created on the website), pull first:

```bash
git pull origin main --allow-unrelated-histories
```

## Step 10 — Push

```bash
git push -u origin main
```

Next time you make changes, just run:

```bash
git add .
git commit -m "your message"
git push
```

---

## Changing visibility later

GitHub → your repo → **Settings** → **General** → scroll to **Danger Zone** →
**Change repository visibility** → choose **Public** or **Private**.

> Note: changing a *private* repo to *public* exposes its entire commit history.

---

## Authentication

When git asks for a username/password, use:

- **Username:** your GitHub username (`YOUR_GITHUB_USERNAME`)
- **Password:** a **Personal Access Token** (NOT your account password)
  - Create one at: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Give it the `repo` scope (covers both public and private repositories).
