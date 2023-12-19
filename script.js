// 获取日期
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1; // 月份从0开始，需要加1
let date = today.getDate();
// document.getElementById("date").innerHTML = year + "年" + month + "月" + date + "日";
if (month < 10 && date < 10) {
    document.getElementById("date").innerHTML = year + "年"  + "0" + month + "月" + "0" + date + "日";
}
if (month < 10 && date >= 10) {
    document.getElementById("date").innerHTML = year + "年"  + "0" + month + "月" + date + "日";
}
if (month >= 10 && date < 10) {
    document.getElementById("date").innerHTML = year + "年"  + month + "月" + "0" + date + "日";
}
if (month >= 10 && date >= 10) {
    document.getElementById("date").innerHTML = year + "年"  + month + "月" + date + "日";
}

// 获取时间
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
var ms = 0;
if (hour < 10) {
    document.getElementById("hour").innerHTML = "0" + hour + ":";
}
if (hour>=10) {
    document.getElementById("hour").innerHTML = hour + ":";
}
if (minute < 10) {
    document.getElementById("minute").innerHTML = "0" + minute + ":";
}
if (minute>=10) {
    document.getElementById("minute").innerHTML = minute + ":";
}
if (second < 10) {
    document.getElementById("second").innerHTML = "0" + second + ".";
}
if (second>=10) {
    document.getElementById("second").innerHTML = second + ".";
}
document.getElementById("ms").innerHTML = ms;

setInterval(function () {
    ms = ms + 1;
    if (ms == 10) {
        ms = 0;
        second = second + 1;
        if (second < 10) {
            document.getElementById("second").innerHTML = "0" + second + ".";
        }
        if (second>=10) {
            document.getElementById("second").innerHTML = second + ".";
        }
    }
    if (second == 60) {
        second = 0;
        minute = minute + 1;
        if (minute < 10) {
            document.getElementById("minute").innerHTML = "0" + minute + ":";
        }
        if (minute>=10) {
            document.getElementById("minute").innerHTML = minute + ":";
        }
    }
    if (minute == 60) {
        minute = 0;
        hour = hour + 1;
        if (hour < 10) {
            document.getElementById("hour").innerHTML = "0" + hour + ":";
        }
        if (hour>=10) {
            document.getElementById("hour").innerHTML = hour + ":";
        }
    }
    document.getElementById("ms").innerHTML = ms;
}, 100);