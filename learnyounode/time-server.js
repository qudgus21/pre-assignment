var net = require('net');
var server = net.createServer(function (socket) {
    socket.end(getDate());
});

server.listen(process.argv[2]);

function getDate() {
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    const minutes = date.getMinutes();
    let hours = date.getHours();

    return `${date.getFullYear()}-${
        month < 10 ? `0${month}` : month}-${
        day < 10 ? `0${day}` : day} ${
            hours < 10 ? ((hours === 0) ? '12' : `0${hours}`) : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}\n`
}
