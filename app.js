

const countDate = new Date("Jan 1,2023 00:00:00").getTime();

function newYear(){
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute *60;
    const day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day) / hour))
    let m = Math.floor((gap % (hour) / minute))
    let s = Math.floor((gap % (minute) / second))

    document.querySelector("#second").innerHTML = s;
    document.querySelector("#minute").innerHTML = m;
    document.querySelector("#hour").innerHTML = h;
    document.querySelector("#day").innerHTML = d;
}

setInterval(function(){
newYear();
},1000)

