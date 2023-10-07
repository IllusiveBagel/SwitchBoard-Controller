const path = require('path')

const worker = new Worker(path.resolve(__dirname, 'worker.js'))

worker.onmessage = (event) => {
    document.getElementById('switch')!.innerText = event.data
}
