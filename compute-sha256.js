const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Function to compute SHA-256 hash
function computeSHA256(file) {
    const fileBuffer = fs.readFileSync(file);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);

    return hashSum.digest('base64');
}

// Function to add integrity attribute
function addIntegrityToFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const regex = /<script\s+src="(.*?)"[^>]*><\/script>/g;
    const newFileContent = fileContent.replace(regex, (match, p1) => {
        const filePath = path.join(__dirname, 'wwwroot', p1);
        const integrityHash = computeSHA256(filePath);
        return match.replace('<script', `<script integrity="sha256-${integrityHash}" crossorigin="anonymous"`);
    });

    fs.writeFileSync(filePath, newFileContent, 'utf8');
}

// Path to your index.html
const indexPath = path.join(__dirname, 'wwwroot', 'index.html');

// Add integrity attribute
addIntegrityToFile(indexPath);

console.log('SHA-256 integrity hashes added to index.html');
