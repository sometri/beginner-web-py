# Push to GitHub Guide

Follow these commands step by step to push this project to GitHub.

Repository: https://github.com/sometri/beginner-web-py

## 1. Initialize Git (if not already initialized)

```bash
git init
```

## 2. Configure Git (set your identity)

```bash
git config user.name "Sometri OENG"
git config user.email "sometri1122@gmail.com"
```

## 3. Add remote repository

```bash
git remote add origin https://github.com/sometri/beginner-web-py.git
```

## 4. Add all files

```bash
git add .
```

## 5. Commit changes

```bash
git commit -m "Initial commit: add simple HTML/CSS/JS project"
```

## 6. Push to GitHub

If it's your first push on main branch:
```bash
git branch -M main
git push -u origin main
```

If main already exists:
```bash
git push origin main
```

Or if you're on master branch:
```bash
git push -u origin master
```

## Notes

- If GitHub requires authentication, use a Personal Access Token (PAT) or SSH key.
- If the repository doesn't exist yet, create it on GitHub first at https://github.com/sometri/beginner-web-py
- To check current branch: `git branch`
- To check status: `git status`
