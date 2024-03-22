import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const characterDirectory = path.join(process.cwd(), 'characters');

export function getSortedCharactersData() {
    const fileNames = fs.readdirSync(characterDirectory);
    const allCharacterData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(characterDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data,
        };
    });

    return allCharacterData.sort((a,b) => {
        if(a.id < b.id) {
            return 1;
        } else {
            return -1;
        }
    });
}