const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return acc + file;
        }, '');
        console.log(filesToString);
    });
};

module.exports.touch = (fName, content) => {
    fs.writeFile(fName, content, 'utf8', (err) => {
        if(err || !fName || !content ){console.error(err);}
        console.log("File '" + fName + "' with contents of '" + content + "' was successfully created.");
    });
};

module.exports.mkdir = (path) => {
    fs.mkdir(('./' + path), (err) => {
        if (err) { return console.error(err); }
        console.log("Folder '" + path + "' was successfuly created.")
    });
};

/*
Questions
How do you import a module?
You can import a module by using `require();`

What JavaScript statement do you use to export a module?
`module.exports`

Online Research Questions
Are there other ways to export a module?
Yes, like the way we used in the react checkpoints and modules, you could use `export as` an ES6 feature.

What are ES6 modules and how do they differ from the module we created in this checkpoint?

There are a number of reasons the two are different. ES6 modules, aside from the syntax, are better suited for frontend coding. Where as CommonJS is more commonly used in server side code.


 */