#!/usr/bin/env node

import program  from 'commander';
 

program
    .version('0.0.1')
    .usage('<keywords>')
    .parse(process.argv);

if(!program.args.length) {
  program.help();
} else {
  switch(program.args[0]){
    case "create":
      if(args[1] == "instance"){
        // Create an instance
        
      } else {
        // Create an app

      }
      break;
    case "deploy":
      break;
    case "install":
      break;
  }
}