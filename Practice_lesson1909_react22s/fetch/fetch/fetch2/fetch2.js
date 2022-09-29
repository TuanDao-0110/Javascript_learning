'use strict';

/*
Complete the checkForNewNotifications function such that it makes a fetch request to https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/notifications.json  
and return its result. Also, visualize that the result of fetch is a Promise. You should see Promise in the console.
*/

const checkForNewNotifications = () => {
  // write here

  return fetch('https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/notifications.json').then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
}


// Sample usage - do not modify
checkForNewNotifications();