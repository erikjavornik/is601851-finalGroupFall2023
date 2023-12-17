import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const testimonyDirectory = path.join(process.cwd(), 'testimonies');

export function getTestimonyFiles() {
    const fileNames = fs.readdirSync(testimonyDirectory);
    const testimony = fileNames.map((fileName) => {
        const fullPath = path.join(testimonyDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        
        const {data, content} = matter(fileContent);

        const imagePath = data.image;

        return {content, imagePath, fileName};
    });

    return testimony;
}