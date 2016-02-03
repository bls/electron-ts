
import { exec } from 'child_process';

export interface CmdResult {
    stdout: Buffer;
    stderr: Buffer;
}

export function runCommand(cmd: string, where?: string): Promise<CmdResult> {
    return new Promise<CmdResult>((resolve, reject) => {
        let options: any = {
            env: process.env,
            maxBuffer: 1024 * 1024
        };
        if(typeof where === 'string') {
            options.cwd = where;
        }
        /* tslint:disable:no-unused-variable */
        let child = exec(cmd, options,
            (err: Error, stdout: Buffer, stderr: Buffer) => {
                if(err) {
                    reject(err);
                } else {
                    resolve({
                        stdout: stdout,
                        stderr: stderr
                    });
                }
            });
    });
}
