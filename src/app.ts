// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.
// Use new ES6 modules syntax for everything.

import { remote } from 'electron';
import { runCommand } from './runcmd';

let app = remote.app;
let appDir = app.getAppPath();

// Holy crap! This is browser window with HTML and stuff, but we can access
// files or run commands like it is node.js! Welcome to Electron world :)

document.addEventListener('DOMContentLoaded', () => {

    let cmdBtn = <HTMLButtonElement> document.getElementById('cmd'),
        clearBtn = <HTMLButtonElement> document.getElementById('clear'),
        outputArea = <HTMLTextAreaElement> document.getElementById('output');

    // Run a command when button is pressed.
    // Note the use of 'async' below, which allows 'await'!

    cmdBtn.addEventListener('click', async () => {
        console.log('You clicked the button!');
        console.log(process.cwd());
        console.log(appDir);
        let result = await runCommand('ls -l /bin');
        outputArea.value = result.stdout.toString('utf8');
    });

    clearBtn.addEventListener('click', () => {
        outputArea.value = '';
    });

});

