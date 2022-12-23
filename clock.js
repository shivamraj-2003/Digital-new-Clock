function displaytime() {
    var datetime=new Date();
    var hrs=datetime.getHours();
    var min=datetime.getMinutes();
    var sec=datetime.getSeconds();
    var session=document.getElementById('session')
    if(hrs>=12){
        session.innerHTML='PM';
    }
    else
    session.innerHTML='AM';

    document.getElementById('Hours').innerHTML=hrs;
    document.getElementById('Minutes').innerHTML=min;
    document.getElementById('Seconds').innerHTML=sec;
}
setInterval(displaytime,10)