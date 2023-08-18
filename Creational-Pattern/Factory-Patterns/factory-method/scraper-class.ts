import fs from 'fs';


abstract class Scraper {
    constructor(public dir_path:string){}

        scanfiles(){
        return fs.readdirSync(this.dir_path
            ,{encoding:'utf8'}
        ).reduce((acc:any,fileName:string)=>{
            // console.log("FileName: ",fileName);
            if(this.isFileJSON(fileName)){
                acc[fileName] =this.readJsonFile(`${this.dir_path}/${fileName}`);
            }
            else{
                acc[fileName] = this.readTextFile(`${this.dir_path}/${fileName}`);
            }
            return acc;
        },{})
    };

    abstract isFileJSON(file_path:string):boolean;
    abstract readJsonFile(file_path:string):unknown;
    abstract readTextFile(file_path:string): string;
}


class FileReader extends Scraper {
    
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



let scraper = new FileReader('./data');
console.log(scraper.scanfiles());

