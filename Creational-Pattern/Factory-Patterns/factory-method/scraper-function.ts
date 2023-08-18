import fs from 'fs';

interface IFileReader {
    isFileJSON(file_path:string):boolean;
    readJsonFile(file_path:string):unknown;
    readTextFile(file_path:string): string;
}


const scraperFunction = (reader:IFileReader)=>{
    return (dir_path:string)=>{
    fs.readdirSync(dir_path,{encoding:'utf8'}
    ).reduce((acc:any,fileName:string)=>{
        if(reader.isFileJSON(fileName)){
            // acc.fileName =reader.readJsonFile(`${dir_path}/${fileName}`);
            acc[fileName] =reader.readJsonFile(`${dir_path}/${fileName}`);
        }
        else{
            acc[fileName] = reader.readTextFile(`${dir_path}/${fileName}`);
        }
        return acc;
    },{})
}
};


const FileReader = scraperFunction({
    isFileJSON(file_path:string){
        if(file_path.endsWith('.json')){
            return true;
        }
        else{
            return false;
        }
    },
    readJsonFile(file_path:string){
        return JSON.parse(fs.readFileSync(file_path,{encoding:'utf8'}).toString());
    },
    readTextFile(file_path:string){
        return fs.readFileSync(file_path,{encoding:'utf8'}).toString();
    }
})


let scraper_fn = FileReader('./data');
// console.log(scraper_fn.scanfiles);

// console.log(FileReader.isFileJSON('jfdksl.json'));