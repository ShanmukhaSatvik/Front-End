let hour=document.querySelector('#hour');
let minute=document.querySelector('#minute');
let second=document.querySelector('#second');
setInterval(() => {
    let date=new Date();
    let htime=date.getHours();
    let mtime=date.getMinutes();
    let stime=date.getSeconds();
    let hrotation=((30*htime)+(1/2*mtime)+(1/120*stime));
    let mrotation=((6*mtime)+(1/10*stime));
    let srotation=((6*stime));
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
}, 1000);