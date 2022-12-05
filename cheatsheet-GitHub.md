# GitHub Cheatsheet

## General Steps

1. Create repo on GitHub
2. Clone down to local machine
  a. In terminal: git clone `<http url>`
3. Write / edit stuff in VS Code
4. Commit code (ACP)
  a. Add:     `git status` to see what's changed
              `git add filename` or `git add .` to prep files for committing
  b. Commit:  `git commit -m "commit notes"` commits to local machine
  c. Push:    `git push origin branchName` pushes from local machine to remote branch

Do EVERYTHING in VS Code, not in GitHub

## Create Branches

1. `git checkout-b nameOfBranch`
  a. Do this in terminal to create a new branch on your computer
  b. checkout moves to branch
  c. -b creates the branch
  d. -d deletes a branch
2. Make changes in nameOfBranch
3. ACP to sync, with one change
  a. `git add filename`
  b. `git commit -m "commit notes"`
  c. `git push origin nameOfBranch`
  d. This creates a new branch in GitHub
4. GitHub -> Open Pull Request -> merge it in
  a. This merges branch into main
5. In terminal `git checkout main`
  a. moves back to main
6. `git pull origin main`
  a. syncs back to main

## Resources
