var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log(`Current Timestamp: ${now.unix()}`);

var timestamp = 1485133500;
var currentMoment = moment.unix(timestamp);
console.log(`Current Moment: ${currentMoment.format('MMMM Do, YYYY @ h:mm A')}`);

// January 3rd, 2016 @ 12:13 AM