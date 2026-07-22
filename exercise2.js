const path = require("path");
const fs = require("fs");

// Folder to organize
const path_dir = path.join(__dirname, "Exercise");

console.log(path_dir);

fs.readdir(path_dir, (err, files) => {

    if (err) {
        console.log("Error reading directory:", err);
        return;
    }

    console.log("Directory content:", files);

    for (const item of files) {

        // Get file extension (jpg, pdf, zip, etc.)
        const ext = path.extname(item).slice(1);

        // Skip files that don't have an extension
        if (ext === "") {
            continue;
        }

        // Don't move project files
        if (ext === "js" || ext === "json") {
            continue;
        }

        // Folder path (Exercise/jpg)
        const folderPath = path.join(path_dir, ext);

        // Create folder if it doesn't exist
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }

        // Current file path
        const oldPath = path.join(path_dir, item);

        // New file path
        const newPath = path.join(folderPath, item);

        // Move file
        fs.renameSync(oldPath, newPath);

        console.log(`${item} moved to ${ext} folder`);
    }
});