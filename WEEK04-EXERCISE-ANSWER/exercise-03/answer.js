// ข้อ 3.1
function evenNumber(num) {
  const isEven = new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve("success : " + `${num}` + " is an even number")
    } else {
      reject(new Error(`${num} is not an even number`))
    }
  })

  isEven.then(result => {
    document.getElementById("result").innerText = result;
  }).catch(err => {
    document.getElementById("result").innerHTML = err;
  })
}

// 3.2
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 500) {
        resolve(`task ${id}: ${delay}ms ... PASS!`)
      } else {
        reject(`task ${id}: ${delay}ms ... NOT PASS!`)
      }
    }, delay)
  })
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  task(1).then(result => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })

  task(2).then(result => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })

  task(3).then(result => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })

  task(4).then(result => {
    console.log(result)
  }).catch(err => {
    console.log(err)
  })
}

// ข้อ 3.3
// hint : การ getAPI ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise((resolve, reject) => {
    if (password == "Cisco") {
      resolve("รหัสผ่านถูกต้อง");
    } else {
      reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
    }
  });
}

function fetchData(password) {
  checkAuth(password).then((res) => {
    alert(res);
    getAPI('https://api.thecatapi.com/v1/images/search', (res) => {
      document.getElementById('cat').setAttribute("src", res[0].url)
    })
  }).catch((err) => {
    alert(err);
  });
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
