# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## React Dictionary Frontend Mentor Challenge

# The Goal
- Fetch data from the Free Dictionary API and copy the design from the Figma file. 


# Tools
- React
- TailwindCSS 
- Axios 
- Vite
- VS Code

# Project Summary
- The user will not have a word displayed at first until they type it in. 
- Response from the API will provide Definitions, Part of Speech, Synonyms, and more. 


# Build Process
- I start with creating the Vite setup with a React template
- My next thought is styling and I wonder how I can build a mobile first design without having to write so much code, I decided TailwindCSS is a good choice. 

## Jan 5, 2025 10 pm

- Got stuck with the toggle knob, I'll need to research more about sr-only and how I can make this work. 
- I will check Tailwind docs on this and look for other ways to solve this. 
- When using sr-only the input element is hidden but is still visible to screen readers just that my toggle know is blocking the checkbox. 
- The checkbox will toggle to dark theme (pretty cool)