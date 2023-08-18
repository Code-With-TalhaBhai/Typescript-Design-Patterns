import { Ilogger } from "./factory-types";



function func_logger():Ilogger{
    return {
    info(){console.log("info is working for function")},
    error(){console.log("error is working for function")}
    }
}

const logger = func_logger();


logger.info();
logger.error();