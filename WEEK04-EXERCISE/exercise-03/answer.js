// ข้อ 3.1
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
}

// 3.2
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
}

// ข้อ 3.3
// hint : การ getAPI ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  
}

function fetchData(password) {
  
}

// GET API
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
