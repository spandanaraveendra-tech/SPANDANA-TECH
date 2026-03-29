let hrs = document.getElementById("hrs")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let am = document.getElementsByTagName("span")[1]


setInterval(()=>{
    let date = new Date();
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if(h>12){
        h = h % 12;
        hrs.innerText = h;
        am.innerText = "pm";
    }
    hrs.innerText = h
    min.innerText = m
    sec.innerText = s
},1000)