document.getElementById('okstart').onclick = () => {
    document.getElementById('video').onplaying = () => {
        setTimeout(() => {
            document.getElementById('content').removeAttribute('hidden');
        }, 6000)
    }

    document.getElementById('before').setAttribute('hidden', 'hidden');
    document.getElementById('start').removeAttribute('hidden');
    document.getElementById('video').play();

    var countdownDate = 'August 24 2021 20:30:00 GMT+0300';

    setInterval(() => {
        const total = Date.parse(countdownDate) - Date.parse(new Date());

        var days = Math.floor( (total/(1000*60*60*24)) );
        var hours = Math.floor( (total/(1000*60*60)) % 24 );
        var minutes = Math.floor( (total/1000/60) % 60 );
        var seconds = Math.floor( (total/1000) % 60 );
        
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) { 
           document.getElementById('end').innerHTML = "Coming really soon. JOIN DISCORD!!"
           
           document.getElementById('days').innerHTML = '0 days';
           document.getElementById('hours').innerHTML = '0 hours';
           document.getElementById('minutes').innerHTML = '0 minutes ';
           document.getElementById('seconds').innerHTML = '0 seconds ';
        } else { 
           document.getElementById('days').innerHTML = days + ' days';
           document.getElementById('hours').innerHTML = hours + ' hours';
           document.getElementById('minutes').innerHTML = minutes + ' minutes ';
           document.getElementById('seconds').innerHTML = seconds + ' seconds ';
        }
    }, 1000)
    
}
