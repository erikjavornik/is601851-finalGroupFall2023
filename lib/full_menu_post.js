import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const full_menuDirectory = path.join(process.cwd(), 'menu');

export function getFullMenuContent() {
    const fullPath = path.join(full_menuDirectory, 'full_menu.md');
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    
    const { content } = matter(fileContent); // Extract content from Markdown file

    return { content }; // Return the content
}



