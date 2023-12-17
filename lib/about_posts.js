import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const aboutDirectory = path.join(process.cwd(), 'about_items');

export function getAboutFiles() {
    const fileNames = fs.readdirSync(aboutDirectory);
    const about = fileNames.map((fileName) => {
        const fullPath = path.join(aboutDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        
        const {data, content} = matter(fileContent);

        const imagePath = data.image;

        return {content, imagePath, fileName};
    });

    return about;
}