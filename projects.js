setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ms=d.getMilliseconds();
    hrot = 30 * h + m / 2 +s/120;
    mrot = 6 * m+s/10;
    srot = 6 * s+0.006*ms;
    hours.style.transform = `rotate(${hrot}deg)`;
    minutes.style.transform = `rotate(${mrot}deg)`;
    seconds.style.transform = `rotate(${srot}deg)`;
}, 1);

function checkbox() {

    alert("You are alredy on the Home Page.Click on other tabs to navigate.");

}