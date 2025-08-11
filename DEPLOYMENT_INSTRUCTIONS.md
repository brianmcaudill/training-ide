# Deployment Instructions for Training IDE

## 🚀 Quick Deploy to GitHub Pages

Since GitHub CLI authentication needs to be set up, please follow these manual steps to deploy your Training IDE:

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository settings:
   - **Repository name**: `training-ide`
   - **Description**: "A modern training IDE with dockable panels, similar to Skillable"
   - **Public** repository (required for GitHub Pages)
   - **DO NOT** initialize with README (we already have one)
5. Click **Create repository**

### Step 2: Push to GitHub

Run these commands in your terminal:

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/training-ide.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions**
5. The workflow will automatically run when you push

### Step 4: Deploy the Site

The GitHub Actions workflow will automatically deploy your site when you push to the main branch.

You can also manually deploy using:

```bash
npm run deploy
```

### Step 5: Access Your Site

Your Training IDE will be available at:

**https://YOUR_USERNAME.github.io/training-ide**

(Replace YOUR_USERNAME with your GitHub username)

## 📁 What's Been Set Up

✅ **Git Repository** - Initialized with all project files
✅ **Deployment Configuration** - Vite configured for GitHub Pages
✅ **GitHub Actions Workflow** - Automatic deployment on push
✅ **Package Scripts** - `npm run deploy` for manual deployment
✅ **Documentation** - Comprehensive README with features and usage

## 🔄 Making Updates

To update your deployed site:

1. Make your changes locally
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Your update message"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```
4. GitHub Actions will automatically redeploy

## 🎯 Local Development

To run locally:
```bash
npm run dev
```

To build locally:
```bash
npm run build
```

To preview the build:
```bash
npm run preview
```

## 📋 Repository Structure

```
training-ide/
├── .github/workflows/deploy.yml  # Automatic deployment
├── src/                          # Source code
├── public/panel-config.json      # Panel configuration
├── package.json                  # Dependencies & scripts
├── README.md                     # Documentation
└── dist/                         # Built files (after build)
```

## 🆘 Troubleshooting

If the GitHub Actions deployment fails:
1. Check the Actions tab in your repository for error logs
2. Ensure Pages is enabled in Settings
3. Try manual deployment with `npm run deploy`

## 📝 Notes

- The site uses the `/training-ide-skillable` base path
- All assets are configured to work with this path
- The development server runs on http://localhost:5173

---

Your Training IDE is ready to show to customers! 🎉