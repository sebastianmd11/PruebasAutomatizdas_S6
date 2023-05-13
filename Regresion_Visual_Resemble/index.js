
const fs = require('fs');
const path = require('path');
const compareImages = require('resemblejs/compareImages');
const tests = ['Pages_DeletePage', 'Pages_NewPage','MemberDelete', 'PostCreate','Post_FilterPublished'];

let folder1;
let folder2;
let options = {};
let files1;
let files2;

async function executeTest(){

    for(let i = 0; i < tests.length; i++){

        const test = tests[i];
        folder1 = `../Capturas_Ghost_V4.44/${test}_4.44`;
        folder2 = `../Capturas_Ghost_V5.40.2/Cypress/${test}`;
        
        files1 = fs.readdirSync(folder1);
        files2 = fs.readdirSync(folder2);

        let resultsFolder = `results`;
        if (!fs.existsSync(resultsFolder)){
            fs.mkdirSync(resultsFolder);
        }

        resultsFolder = `results/${test}`;
        if (!fs.existsSync(resultsFolder)){
            fs.mkdirSync(resultsFolder);
        }

        for (const file1 of files1) {
            const file2 = files2.find((f) => f === file1);
            if (file2) {
                const data = await compareImages(
                    fs.readFileSync(path.join(folder1, file1)),
                    fs.readFileSync(path.join(folder2, file2)),
                    options
                );
                fs.writeFileSync(`results/${test}/${file1}_compare.png`, data.getBuffer());
            }
        }
    }

    return 'completado'
}

(async () => console.log(await executeTest()))();
