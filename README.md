# Training IDE - Skillable-like Learning Environment

A modern, flexible training IDE with dockable panels, similar to Skillable, built with React and TypeScript. Perfect for creating interactive learning environments, coding tutorials, and hands-on training sessions.

![Training IDE](https://img.shields.io/badge/Training-IDE-blue)
![React](https://img.shields.io/badge/React-18.2-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6)
![Vite](https://img.shields.io/badge/Vite-5.0-646cff)

## 🚀 Live Demo

[View Live Demo →](https://yourusername.github.io/LOD4-1754869169057)

## ✨ Features

### Core Functionality
- **🎯 Dockable Panels** - Drag and drop panels to reorganize your workspace
- **📏 Resizable Panels** - Click and drag borders to resize panels
- **📋 JSON Configuration** - Easy configuration through `panel-config.json`
- **🎨 Multiple Layouts** - 5 pre-configured layouts to choose from
- **🔄 Reset Functionality** - Quickly restore to original layout

### Widget Types
- **📝 Instructions Panel** - Markdown-based instructions viewer
- **🧪 Labs Panel** - Interactive lab exercises with status tracking
- **💻 Code Editor** - Syntax-highlighted code editor with run button
- **🖥️ Terminal** - Terminal emulator interface
- **📊 Presentation** - Slide presentation viewer with navigation

### Pre-configured Layouts
1. **Default** - Balanced layout with all panels
2. **Side by Side** - 50/50 split for instructions and editor
3. **Focus Mode** - Full-screen editor
4. **Quadrant** - 4 equal panels in a grid
5. **Left Panel** - Narrow sidebar with main work area

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.2
- **Language**: TypeScript 5.3
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **UI Components**: Radix UI
- **Docking Library**: react-mosaic-component
- **Markdown**: react-markdown

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/LOD4-1754869169057.git
cd LOD4-1754869169057
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🔧 Configuration

The application layout and content are configured via `/public/panel-config.json`. This file controls:

- Initial panel layout structure
- Panel content and settings
- Widget configurations

### Example Configuration Structure:

```json
{
  "layout": {
    "direction": "row",
    "first": "instructions",
    "second": "editor",
    "splitPercentage": 30
  },
  "panels": {
    "instructions": {
      "id": "instructions",
      "type": "markdown",
      "title": "Instructions",
      "content": "# Welcome to Training IDE..."
    },
    "editor": {
      "id": "editor",
      "type": "editor",
      "title": "Code Editor",
      "defaultContent": "// Start coding here"
    }
  }
}
```

## 📝 Usage

### Changing Layouts
1. Click the **Layout** button in the header
2. Select from 5 pre-configured layouts
3. Panels will instantly rearrange

### Customizing Panels
- **Drag** panel headers to move panels
- **Drag** borders between panels to resize
- **Double-click** borders to reset to default size

### Resetting Layout
- Click the **Reset** button to restore the current layout theme
- This is useful after manual adjustments

## 🏗️ Project Structure

```
LOD4-1754869169057/
├── public/
│   └── panel-config.json      # Panel configuration
├── src/
│   ├── components/
│   │   └── ui/                # Reusable UI components
│   ├── pages/
│   │   └── index.tsx          # Main application page
│   ├── styles/
│   │   └── globals.css        # Global styles
│   ├── App.tsx                # App component
│   └── main.tsx               # Entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Building for Production

1. Build the application:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

3. Deploy the `dist` folder to your hosting service

## 🌐 Deployment

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/LOD4-1754869169057",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎯 Use Cases

- **Technical Training** - Create interactive coding tutorials
- **Documentation** - Build interactive documentation sites
- **Workshops** - Design hands-on workshop environments
- **Education** - Develop educational coding platforms
- **Onboarding** - Create employee technical onboarding

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with Ultimate Scaffold
- Inspired by Skillable's training environment
- Powered by React and TypeScript

---

**Made with ❤️ for interactive learning**