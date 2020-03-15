!(function() {
    fetch("/khach-hang/dashboard").then(e=>e.text()).then(e => {
        document.write(e);
        console.log(window)
    })
}());