import { Compiler, converterOptions, Dirs, Router } from "../d/types";
import { Request, Response } from "express";
export default class CompilersHandler {
    deleteallTempFilesOnStart: boolean;
    alldir: Dirs;
    compilers: Compiler[];
    filesizeLimitsMB: number;
    randomStringSize: number;
    inputdir: string;
    outputdir: string;
    /**In Minutes */
    timetoGarbageCleaner: number;
    app: any;
    filter: any;
    router: Router;
    debug: any;
    logInFile: any;
    constructor(props?: converterOptions | object);
    /** this function starts the server */
    start(): void;
    /** this function waits for a file from the client */
    setup(): void;
    /**main page */
    mainPage(req: Request, res: Response): Promise<void>;
    checkFile(req: Request, res: Response): void;
    /**upload file */
    uploadFile(req: Request, res: Response): Promise<void>;
    /**depricated!! */
    setTextConverter(): void;
    /** Construct Commands from string
     * commands are:
     * @const {compilerCommand}
     *
     *  #{CompeleteInputFilePath} is the path + filename +.+ fileType
     *  #{CompeleteOutputFilePath} is the outputdirectory + filename +.+
     *  #{CompeleteOutputDirectory} is the output directory
     *
     * filetype
     *  #{ComepeleteFileName}       is the file name with type
     *  #{name}            is the file name without type
     *  #{outputT}         is the same as outputT in the object, is the output type
     *  #{iPath}            is the input Directory path
     *  #{oPath}           is the output Directory path
     */
    Command(FileNameWT: string, compilerIndex: number): string;
    /** this function compiles a file*/
    compileFile(FileNameWT: string, compileIndex: number): Promise<unknown>;
    zipTheOutputDirectory(name: string): Promise<unknown>;
    /** this function download the file to the server **DEPRICATED** */
    uploadTheFile(file: any, uploadpath: string): Promise<unknown>;
    /** this function exicute a programmer with params */
    execShellCommand(cmd: string): Promise<unknown>;
    makeGetReqForTheFile(urlfile: string, filepath: string): Promise<void>;
    /**  just a debugger and a messenger to the client if error*/
    log(errorMes: string, req?: Request, res?: Response): void;
    /** function to delete temp files off input and output folders*/
    deleteGarbage(): void;
    /** get compiler by its name*/
    getIndexByName(name: string): number;
    /** the garbage cleaner cicle starter*/
    GarbageCleaner(): void;
    /** function to correct input and output directory if was relativly to the root
     * directory
     */
    setInputOutputDir(): void;
    /** for not specifying all object parameters under constructor and safe lines of code*/
    getParams(obj: any): void;
}
