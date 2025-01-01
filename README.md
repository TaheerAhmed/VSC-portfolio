# 🌟 Vite + React Portfolio Template

Welcome to the **VS Code Portfolio**! This is a sleek and modern portfolio template built with [Vite](https://vitejs.dev/), [React](https://reactjs.org/), and [Tailwind CSS](https://tailwindcss.com/). It's designed to help you showcase your projects and skills in style. 🎨🚀

## ✨ Features

- **⚡️ Fast and Lightweight**: Built with Vite for rapid development and optimized performance.
- **🎨 Stylish Design**: Utilizes Tailwind CSS for a modern and responsive layout.
- **📈 GitHub Contributions Graph**: Show off your GitHub activity directly on your portfolio.

## 🚀 Getting Started

Follow these steps to set up and customize your portfolio:

### 1. Clone the Repository

```bash
git clone https://github.com/TaheerAhmed/VSC-portfolio.git
cd VSC-portfolio
```
2. Install Dependencies

Ensure you have Node.js installed, then run:

```npm install```

3. Run the Development Server

Start the development server with:

```npm run dev```

Open your browser and navigate to http://localhost:5173/ to see your portfolio in action. 🎉

🎨 Customization

Update GitHub Contributions

To display your GitHub contributions, edit the Github Graph component located at src/components/sections/About.tsx. Replace the username prop in the GithubGraph component with your GitHub username:
```
<GithubGraph
  username="your-github-username"\\change this line 
  blockMargin={2}
  colorPalette={["#ebedf0", "#a3e2a1", "#72d780", "#47b55d", "#2f8a3e"]}
/>
```

This will fetch and display your GitHub activity. ￼

Customize Content

Modify the content in the src directory to reflect your personal information, projects, and skills. Feel free to add or remove sections as needed to tailor the portfolio to your preferences.

🛠️ Building for Production

When you’re ready to deploy your portfolio, build the optimized production files with:

```npm run build```

The output will be in the dist directory, ready to be deployed to your hosting platform of choice.

🌐 Deployment

You can deploy your portfolio using platforms like Vercel, Netlify, or any static site hosting service. Simply upload the contents of the dist directory to your chosen platform.

🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

📄 License

Crafted with ❤️ using Vite, React, and Tailwind CSS.

Feel free to replace placeholder text like `your-username`, `your-repo-name`, and `your-github-username` with your actual information. This README provides a comprehensive guide to setting up, customizing, and deploying your portfolio template. 
