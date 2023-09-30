# Eleventy Glossary Project

This repository contains an Eleventy project that showcases a glossary of terms using Tailwind CSS for styling.

## Features

- Glossary page displaying terms and definitions.
- Stylish design using Tailwind CSS.
- Mobile-responsive layout.

## Running the Project Locally

Ensure you have [Node.js](https://nodejs.org/) installed, and then follow the steps below to run the project locally:

1. **Install Dependencies:**
    ```bash
    npm install
    ```

2. **Build Tailwind CSS:**
    ```bash
    npx tailwindcss build src/styles.css -o src/output.css
    ```

3. **Run Eleventy:**
    ```bash
    npx @11ty/eleventy --serve
    ```

After running the above commands, your site will be accessible at:

http://localhost:8080/glossary/


## Built With

- [Eleventy](https://www.11ty.dev/) - A simpler static site generator.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.

## License

This project is open-source. Feel free to use, modify, and distribute as you see fit.
