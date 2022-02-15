setInterval(() => {
const hour = document.getElementById('get-hour');
const date = new Date()
let hours= date.getHours();
let minute= date.getMinutes();
    let second = date.getSeconds();
    let day = "AM"
    if (hours > 12) {
        day = "PM"
        hours = hours - 12; 
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

hour.textContent = hours +":" + minute + ":" + second +' '+ day
})
