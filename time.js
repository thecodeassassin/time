function timer() {
    document.getElementById('date').innerHTML = moment().format('MMMM Do YYYY');
    setInterval(() => {
        document.getElementById('timer').innerHTML = +new Date()
    }, 1)

    setInterval(() => {
        document.getElementById('timer2').innerHTML = moment().format('hh:mm:ss');
    }, 1000)

}