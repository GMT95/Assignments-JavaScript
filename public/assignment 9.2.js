function dateTime() {
     var now = new Date();
     var hours = now.getHours();
     var minutes = now.getMinutes();
     var date = now.getDate().toString() + "-" + (now.getMonth()+1).toString() + "-" + now.getFullYear().toString();
     alert("Current time: "+ hours + ":" + minutes);
     alert("Current Date: " + date);
     }

dateTime();