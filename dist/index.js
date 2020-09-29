"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
yargs.command("hello", "to choose who will say hello!", function (yargs) {
    return yargs.options({
        name: {
            type: 'string',
            alias: 'n',
            description: 'the name of the person who we want to say hello to'
        }
    });
}, function (args) {
    console.log('Hello' + ' ' + args.name);
});
yargs.help().parse();
//# sourceMappingURL=index.js.map