function timer() {
    setInterval(() => {
        document.getElementById('timer').innerHTML = +new Date().UTC()
    }, 1)

    setInterval(() => {
        document.getElementById('timer2').innerHTML = moment().format('MMMM Do YYYY, hh:mm:ss');
    }, 1000)

}