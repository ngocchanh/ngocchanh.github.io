!(function() {
    fetch("/khach-hang/dashboard").then(e=>{return e.text()}).then(e => {
        document.write(e);
        console.log(window)
    })
}());