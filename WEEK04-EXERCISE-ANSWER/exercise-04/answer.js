function checkAuth(password) {
    return new Promise((resolve, reject) => {
        if (password == "In4matioN") {
            resolve("รหัสผ่านถูกต้อง");
        } else {
            reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
        }
    });
}

async function fetchData(password) {
    try {
        let loginAuth = await checkAuth(password);
        alert(loginAuth)
        let getAPI = await fetch('https://api.thecatapi.com/v1/images/search')
        const picture = await getAPI.json()
        document.getElementById('cat').setAttribute("src", picture[0].url)
    } catch (err) {
        alert(err);
    }
}