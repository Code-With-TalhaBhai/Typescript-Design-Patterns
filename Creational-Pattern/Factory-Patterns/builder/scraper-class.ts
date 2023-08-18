import fs from 'fs';

interface IFileReader {
    isFileJSON(file_path:string):boolean;
    readJsonFile(file_path:string):unknown;
    readTextFile(file_path:string): string;
}


class Scraper {
    constructor(public dir_path:string,public reader:IFileReader){}

        scanfiles(){
        return fs.readdirSync(this.dir_path
            ,{encoding:'utf8'}
        ).reduce((acc:any,fileName:string)=>{
            // console.log("FileName: ",fileName);
            if(this.reader.isFileJSON(fileName)){
                acc[fileName] =this.reader.readJsonFile(`${this.dir_path}/${fileName}`);
            }
            else{
                acc[fileName] = this.reader.readTextFile(`${this.dir_path}/${fileName}`);
            }
            return acc;
        },{})
    };
}


class FileReader implements IFileReader {
    
    public isFileJSON(file_path:string){
        if(file_path.endsWith('.json')){
            return true;
        }
        else{
            return false;
        }
    };
    public readJsonFile(file_path:string){
        return JSON.parse(fs.readFileSync(file_path,{encoding:'utf8'}).toString());
    };
    public readTextFile(file_path:string){
        return fs.readFileSync(file_path,{encoding:'utf8'}).toString();
    };
}


let scraper = new Scraper('./data',new FileReader);
console.log(scraper.scanfiles());
