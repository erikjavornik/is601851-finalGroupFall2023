// Importing necessary modules from Node.js and third-party libraries
import fs from 'fs'; // File system module
import path from 'path'; // Path module
import matter from 'gray-matter'; // Library for parsing frontmatter

// Defining the directory path where the about items are stored
const aboutDirectory = path.join(process.cwd(), 'about_items');

// Function to retrieve information about about items
export function getAboutFiles() {
    // Reading the file names from the about directory synchronously
    const fileNames = fs.readdirSync(aboutDirectory);
    
    // Mapping over each file name to extract information
    const about = fileNames.map((fileName) => {
        // Creating the full path of the file
        const fullPath = path.join(aboutDirectory, fileName);
        // Reading the content of the file
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        
        // Parsing frontmatter from the file content
        const {data, content} = matter(fileContent);

        // Extracting the image path from the frontmatter
        const imagePath = data.image;

        // Returning an object containing the content, image path, and file name
        return {content, imagePath, fileName};
    });

    // Returning the array of about items
    return about;
}
