// Importing necessary modules from Node.js and third-party libraries
import fs from 'fs'; // File system module
import path from 'path'; // Path module
import matter from 'gray-matter'; // Library for parsing frontmatter

// Defining the directory path where the menu items are stored
const menuDirectory = path.join(process.cwd(), 'menu items');

// Function to retrieve information about menu items
export function getMenuFiles() {
    // Reading the file names from the menu directory synchronously
    const fileNames = fs.readdirSync(menuDirectory);
    
    // Mapping over each file name to extract information
    const menu = fileNames.map((fileName) => {
        // Creating the full path of the file
        const fullPath = path.join(menuDirectory, fileName);
        // Reading the content of the file
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        
        // Parsing frontmatter from the file content
        const {data, content} = matter(fileContent);

        // Extracting the image path from the frontmatter
        const imagePath = data.image;

        // Returning an object containing the content, image path, and file name
        return {content, imagePath, fileName};
    });

    // Returning the array of menu items
    return menu;
}
