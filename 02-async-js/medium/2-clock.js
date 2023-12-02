/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

*/

const timeFormat24 = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  });

  const timeFormat12 = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

function printTime() {

    console.clear();
    let date = new Date();

    let time24 = timeFormat24.format(date);
    console.log(`Current Time (24-hour format): ${time24}`);
    
    let time12 = timeFormat12.format(date);
    console.log(`Current Time (12-hour format): ${time12}`);
}

setInterval(printTime, 1000);
