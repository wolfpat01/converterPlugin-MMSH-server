import * as path from "path"
import * as fs from "fs"

import type { Compiler } from "../../d/types"






export function getProps(name: string) {
    const n = name.split(".");
    const n2 = name.split("");
    const type: string = name.split(".")[n.length - 1]
    const other: string = n2.slice(0, n2.length - type.length - 1).join('')
    return { type, name: other }
}

// delete functions
export function deleteFile(filePath: string) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err)
        }
    })
}


export function deleteDirectory(dirPath: string) {
    return new Promise((solve) => {
        fs.rmdir(dirPath, { recursive: true }, solve)
    })

}

export function deleteAllFilesInDirectory(dir: string) {
    fs.readdir(dir, (err, files) => {
        if (err) throw err;

        for (const file of files) {
            try {
                fs.unlink(path.join(dir, file), err => {
                    if (err) throw err;
                });
            } catch {
                try {
                    deleteDirectory(path.join(dir, file))
                } catch (err) {
                    throw err
                }
            }
        }
    });
}


export function getNameOf(arry: Compiler[], name: string) {
    let indexofar = -1;
    arry.forEach((ar, i) => {
        if (ar.name === name) {
            indexofar = i;
        }
    });
    return indexofar;
}




