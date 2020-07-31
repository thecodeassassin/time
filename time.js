var timezone = moment.tz.guess()

const timeMs = () => {
    document.getElementById('timer').innerHTML = moment().tz(timezone).format('HH:mm:ss.SSS')
    document.getElementById('timer2').innerHTML = moment().tz(timezone).format('x')
}

const loadTimer = async () => {

        timeMs(timezone)

    document.getElementById('date').innerHTML = moment().tz(timezone).format('MMMM Do YYYY');
    setInterval(timeMs, 1)
    const timezoneSelector = document.getElementById('timezone')

    try {
        const timezones = moment.tz.names()
        if (timezones.length > 0) {
            timezones.forEach((tz) => {
                const defaultValue = (tz === timezone)
                const newOption = new Option(tz, tz, defaultValue, defaultValue)
                timezoneSelector.append(newOption)
            })
        }

    } catch (e) {
        console.error(e)
    }

    timezoneSelector.onchange = (() => {
        timezone = timezoneSelector.value
    })

    let mouseTimer = null, cursorVisible = true;

    const disappearCursor = () => {
        mouseTimer = null
        document.body.style.cursor = "none"
        cursorVisible = false
    }

    document.onmousemove = () => {
        if (mouseTimer) {
            window.clearTimeout(mouseTimer)
        }

        if (!cursorVisible) {
            document.body.style.cursor = "default"
            cursorVisible = true
        }
        mouseTimer = window.setTimeout(disappearCursor, 1000)
    }


}

function unicorns() {

    const canvas = document.getElementById('unicorns')
    const link = document.getElementById('expecations').remove()

    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
    const cw = canvas.width;
    const ch = canvas.height;

    const unicorn = new Image()
    unicorn.src = '6427925.png'
    unicorn.onload= () => requestAnimationFrame(animate)
    unicorn.width = 100
    unicorn.height = 100

    const shadow = new Image, shading = new Image
    const ctx = canvas.getContext('2d')

    var dx = 5, dy = -2;
    var x  = 400, y = 100, a = 0;
    var deg2rad = Math.PI / 180;
    var da = 10 * deg2rad;

    var bw = unicorn.width/2;
    var bh = unicorn.height/2;

    const animate = () => {
        ctx.clearRect( 0, 0, cw, ch );

        ctx.translate(x,y);
        ctx.drawImage( shadow, -bw+10, -bh+10 );
        ctx.rotate(a);
        ctx.drawImage( unicorn, -bw, -bh, 120, 100);
        ctx.rotate(-a);
        ctx.drawImage( shading, -bw, -bh );
        ctx.translate(-x,-y);

        x += dx;
        a += da;
        y += dy;

        if ((x-bw < 0) || (x+bw > cw)){
            dx *= -1;
            da *= -1;
        }

        if ((y-bh < 0) || (y+bh > ch)){
            dy *= -1;
            da *= -1;
        }
    }

    setInterval(animate, 15)

}