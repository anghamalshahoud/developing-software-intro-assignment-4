"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = require("yargs");
const function_1 = require("./function");
exports.default = yargs.command("hello", "to choose who will say hello!", function (yargs) {
    return yargs.options({
        name: {
            type: 'string',
            alias: 'n',
            description: 'the name of the person who we want to say hello to'
        }
    });
}, function (args) {
    const greet = function_1.Hello(args.name);
    console.log(greet);
});
yargs.help().parse();
//# sourceMappingURL=index.js.map