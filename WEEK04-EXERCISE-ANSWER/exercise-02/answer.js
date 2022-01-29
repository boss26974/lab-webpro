// ข้อ 2.1
function displayMax() {
    let num1 = document.getElementById("max1").value;
    let num2 = document.getElementById("max2").value;
    findMax(num1, num2, (test) => {
        document.getElementById("test1").innerHTML = "ค่าสูงสุดที่ได้คือ " + test;
        document.getElementById("test2").innerHTML =
            "The Maximum Value is : " + test;
    });
}
function findMax(num1, num2, display) {
    let result = Math.max(num1, num2);
    display(result);
}

// ข้อ 2.2
function start() {
    document.getElementById("start").innerText = "Program started";
    const myTimeout = setTimeout(() => {
        document.getElementById("process").innerText = "Hello World";
        setTimeout(() => {
            document.getElementById("end").innerText = "Program ended";
            clearTimeout(myTimeout);
        }, 3000);
    }, 2000);
}

// ข้อ 2.3
var myInterval = setInterval(myTime, 1000);
function myTime() {
    const date = new Date();
    document.getElementById("myTime").innerHTML = date.toLocaleTimeString();
}
function mytimeStop() {
    clearInterval(myInterval);
}

// ข้อ 2.4
function getDogDemo(url) {
    var countdown = 10;
    document.getElementById("dogTime").innerText = countdown;
    var time = setInterval(() => {
        if (countdown >= 1) {
            countdown -= 1;
            document.getElementById("dogTime").innerText = countdown;
        } else {
            getAPI("https://dog.ceo/api/breeds/image/random", (res) => {
                document.getElementById("dogImg").setAttribute("src", res.message);
            });
            document.getElementById("dogTime").innerText = "";
            clearInterval(time);
        }
    }, 1000);
}

// ข้อ 2.5
let text = [
    { title: "", id: "num1" },
    { title: "", id: "num2" },
    { title: "", id: "num3" },
    { title: "", id: "num4" },
];
function getMedium(url) {
    getAPI("https://v1.nocodeapi.com/jacktnp/medium/xvYwlRhrjtVLsWUn", (res) => {
        console.log(res);
        for (let i = 1; i < 5; i++) {
            var some = res[i - 1];
            var obj = JSON.parse(JSON.stringify(some));
            var newtext = obj["content:encoded"];
            text[i - 1].title = newtext;
        }
        let settext = (index) => {
            document.getElementById("num" + index).innerHTML = text[index - 1].title;
            document.getElementById(text[index - 1].id).classList.remove("is-hidden");
            console.log(index);
        };
        setTimeout(() => {
            settext(1);
            setTimeout(() => {
                settext(2);
                setTimeout(() => {
                    settext(3);
                    setTimeout(() => {
                        settext(4);
                    }, 5000);
                }, 3000);
            }, 1000);
        }, 2000);
    });
}

// ข้อ extra
var time;
function stopTime() {
    let Time = document.getElementById("Time").value;
    if (time) {
        clearInterval(time);
    }
    time = setInterval(() => {
        if (Time >= 0) {
            document.getElementById("setMinute").innerText = Math.floor(Time / 60)
                .toString()
                .padStart(2, "0");
            document.getElementById("setSecond").innerText = (Time % 60)
                .toString()
                .padStart(2, "0");
            Time -= 1;
            console.log(Time);
        } else {
            clearInterval(time);
        }
    }, 1000);
}

// ฟังก์ชันเรียก API
function getAPI(url, success, error) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.response);
            success(res);
        } else if (this.readyState == 4) {
            const res = JSON.parse(this.response);
            error(res);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send();
}
