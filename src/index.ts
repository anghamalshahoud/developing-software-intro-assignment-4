import { string } from 'yargs';
import yargs = require('yargs');
import {say_hello_to} from './say-hello';

 yargs.command(

     "hello",

     "to choose who will say hello!",

     function(yargs){
        
        return yargs.options({

            name:{

                type: 'string',
                alias: 'n',
                description: 'the name of the person who we want to say hello to'
            }
        })
    
    },


    function(args){

        
 
        console.log('Hello'+ ' ' + args.name);


    }
 );
  yargs.help().parse();