function timeStamp() {
    var x = new Date();
    var n = `${x.getHours()}:${x.getMinutes()}:${x.getSeconds()}`;
    return console.log(n);
}
setInterval(timeStamp,500);
