document.getElementById('okstart').onclick = () => {
    document.getElementById('video').onplaying = () => {
        document.getElementById('audio').play();
        setTimeout(() => {
            document.getElementById('content').removeAttribute('hidden');
        }, 6000)
    }

    document.getElementById('before').setAttribute('hidden', 'hidden');
    document.getElementById('start').removeAttribute('hidden');

    var countdownDate = 'August 24 2021 20:30:00 GMT+0300';

    setInterval(() => {
        const total = Date.parse(countdownDate) - Date.parse(new Date());

        var days = Math.floor( (total/(1000*60*60*24)) );
        var hours = Math.floor( (total/(1000*60*60)) % 24 );
        var minutes = Math.floor( (total/1000/60) % 60 );
        var seconds = Math.floor( (total/1000) % 60 );

        document.getElementById('days').innerHTML = days + ' days';
        document.getElementById('hours').innerHTML = hours + ' hours';
        document.getElementById('minutes').innerHTML = minutes + ' minutes ';
        document.getElementById('seconds').innerHTML = seconds + ' seconds ';
    }, 1000)
    
}
