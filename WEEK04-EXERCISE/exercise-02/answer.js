// ข้อ 2.1
function displayMax() {
    
}
function findMax(num1, num2, display) {
    
}

// ข้อ 2.2
function start() {
    
}

// ข้อ 2.3
function myTime() {
    
}
function mytimeStop() {
    
}

// ข้อ 2.4
function getDogDemo(url) {
    
}

// ข้อ 2.5
function getMedium(url) {
   
}

// ข้อ extra
function stopTime() {
    
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