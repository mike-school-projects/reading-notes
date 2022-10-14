# Lecture notes

git

- version control system
- not the same as GitHub.  GitHub is online code storage that uses git
- Use comments when committing changes

Repository

- Collection of files that git monitors
- If folder is monitored by git, it will show in terminal
- one project = one repository
- Repositories can live on GitHub and/or on your computer

GitHub terminal commands

- `git clone [website of git repository]`
- `git status`
- `git remote -v`

Once cloned, can make changes is VS Code

ACP process

**Add** all files so git tracks it.

- Add files that are in red
- `git add .`
- `git add [filename 1] [filename 2]

**Committ** files

- `git commit -m "commit message"`

**Push** changes to GitHub

- `git push origin main`

[Link to home](https://mikeshen7.github.io/reading-notes)

GitHub conflicts (gituation)

- Must only push or pull.
- Best practice: make all changes is VS Code, and push down to github

1. Pull from GitHub to computer
`git config pull.rebase false`
2. If get MERGE_MSG, just add any message at the bottom, save, then close the file
3. Push from computer back to GitHub
`git push origin main`
