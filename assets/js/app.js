const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
let time = document.querySelector(".time");
let day = document.querySelector(".day");
let mode = document.querySelector(".btn");
const date = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

var dayNow = days[date.getDay()];
var monthNow = months[date.getMonth()];
console.log(dayNow, monthNow);
console.log(date);
const s = date.getSeconds();
const m = date.getMinutes();
const h = date.getHours();

time.textContent = `${h >= 10 ? h : "0" + h}:${m >= 10 ? m : "0" + m}:${s >= 10 ? s : "0" + s} ${h > 12 ? "PM" : "AM"}`;
day.textContent = `${dayNow}, ${monthNow} ${date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()}`;
let rotate_deg_sec = 6 * s;
let rotate_deg_min = 6 * m;
let rotate_deg_hour = 30 * h + m / 2;
sec.style.transform = `rotate(${rotate_deg_sec}deg)`;
min.style.transform = `rotate(${rotate_deg_min}deg)`;
hour.style.transform = `rotate(${rotate_deg_hour}deg)`;

setInterval(() => {
    const date = new Date();
    const s = date.getSeconds();
    const m = date.getMinutes();
    const h = date.getHours();
    time.textContent = `${h >= 10 ? h : "0" + h}:${m >= 10 ? m : "0" + m}:${s >= 10 ? s : "0" + s} ${
        h > 12 ? "PM" : "AM"
    }`;

    day.textContent = `${dayNow}, ${monthNow} ${date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()}`;
    rotate_deg_sec += 6;
    rotate_deg_min += 0.1;
    rotate_deg_hour += 30 / 3600;
    sec.style.transform = `rotate(${rotate_deg_sec}deg)`;
    min.style.transform = `rotate(${rotate_deg_min}deg)`;
    hour.style.transform = `rotate(${rotate_deg_hour}deg)`;
}, 1000);
let is_dark = false;
mode.addEventListener("click", () => {
    if (!is_dark) {
        document.documentElement.style.setProperty("--color-1", "#111");
        document.documentElement.style.setProperty("--color-2", "#fff");
        document.documentElement.style.setProperty("--color-3", "#ddd");
        is_dark = true;
        mode.textContent = `Light mode`;
    } else {
        document.documentElement.style.setProperty("--color-1", "#eee");
        document.documentElement.style.setProperty("--color-2", "#000");
        document.documentElement.style.setProperty("--color-3", "#333");
        is_dark = false;
        mode.textContent = `Dark mode`;
    }
});
