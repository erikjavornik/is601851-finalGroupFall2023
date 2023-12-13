import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const menuDirectory = path.join(process.cwd(), 'Markdown posts');

export function getMenuFiles() {
    const fileNames = fs.readdirSync(menuDirectory);
    const menu = fileNames.map((fileName) => {
        const fullPath = path.join(menuDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        
        const matterResults = matter(fileContent).data;

        return {
        fileName,
        matterResults,
        };
    });

    return menu;
}