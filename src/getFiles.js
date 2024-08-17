const path = require('path');
const fs = require('fs');

const getFiles = (initialDirectoryPath) => {
   return new Promise((resolve, reject) => {

    fs.readdir(initialDirectoryPath, async (err, directories) => {
        if (err) {
            reject (new Error("Unable to access commands folder."));
        }
        const promiseArray = [];
        directories.forEach(directory => {
            promiseArray.push(
                new Promise((resolve, reject) => {
                    let subDirectoryPath = path.join(initialDirectoryPath, directory);
                    fs.readdir(subDirectoryPath, (err, files) => {
                        if(err){
                            reject(err)
                        }
                        resolve({
                            directory: directory,
                            files: files
                        });
                    })
                })
            );
        });
        let results = await Promise.all(promiseArray);
        resolve(results);
    });
   })
}

module.exports = getFiles;