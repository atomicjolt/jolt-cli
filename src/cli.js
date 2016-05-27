#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .usage('<keywords>')
    .parse(process.argv);

if(!program.args.length) {
  program.help();
} else {
  switch(program.args[0]){
    case "create":
      if(program.args[1] == "instance"){
        // Create an instance
        // Add instance json ie usu-dev, usu-prod, etc
      } else {

        // Create an app
        // Clone github repo
        // Change values
        // Add initial instances - dev, prod, staging'
      }
      break;
    case "deploy":
      // Call api install, pass all instance json files.
      // Get back token for uploading code
      // Will need to execute build in current directory, get build files and upload them
      break;
    case "install":

      // Perform LTI install
      break;
  }
}
