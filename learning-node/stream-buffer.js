const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

// creating a server using raw node.js
const server = http.createServer()

// listener
server.on('request', (req, res) => {
    // console.log(req);
    // console.log(req.url, req.method);
    if (req.url === '/read-file' && req.method === 'GET');

    // streaming file reading
    const readableStream = fs.createReadStream(__dirname + '/texts/read.txt')
    // const readableStream = fs.createReadStream(__dirname + '/texts/readvul.txt') // something went wrong !
    // const readableStream = fs.createReadStream(process.cwd() +'/texts/read.txt')

    readableStream.on('data', (buffer) => {
        res.statusCode = 200;
        res.write(buffer)
    })

    readableStream.on('error', (error) => {
        // res.end('Hello From World !')
        console.log(error);
        res.statusCode = 500;
        // res.end('The streaming is over !')
        res.end('something went wrong !')
    })
    // res.end('Hello From World !')
})

server.listen(5000, () => {
    console.log(`server is listening on port 5000`)
})

