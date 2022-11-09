'use strict';

// Sample usage (do not modify)
const wait = milliseconds => {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('finished executing');
      }, milliseconds);
  });
}

/**
 Fix the code in the init function such that the 2nd console.log
 ("Waited 1 second") logs after wait(1000) has finished executing..*/

 const init = () => {
     console.log("Program started");
     wait(1000).then(result => console.log(result));
     console.log("Waited 1 second");
 }

 // Sample usage (do not modify)
 init();
