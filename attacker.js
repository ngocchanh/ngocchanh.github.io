!(function() {
    fetch("/khach-hang/dashboard").then(e=>{return e.text()}).then(e => {
        let a = document.write(e);
        console.log(a)
    })
}());