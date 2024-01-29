// Importing necessary modules from Node.js and third-party libraries
import fs from 'fs'; // File system module
import path from 'path'; // Path module
import matter from 'gray-matter'; // Library for parsing frontmatter

// Defining the directory path where the full menu file is located
const full_menuDirectory = path.join(process.cwd(), 'menu');

// Function to retrieve content from the full menu file
export function getFullMenuContent() {
    // Creating the full path of the full menu file
    const fullPath = path.join(full_menuDirectory, 'full_menu.md');
    // Reading the content of the full menu file
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    
    // Parsing frontmatter from the file content to extract the main content
    const { content } = matter(fileContent);

    // Returning an object containing the content of the full menu
    return { content };
}