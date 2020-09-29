import { string } from 'yargs';
import yargs = require('yargs');
import {Hello} from './function';


export default yargs.command(

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

        
     const greet = Hello( args.name);

     console.log(greet);
       


    }
 );
  yargs.help().parse();