const app = require('express')();
const path = require('path');

app.get('/logo.png', (req, res) => {
    return res.sendFile(path.join(__dirname, './IClapDilexSelfBot-Logo-300x300.png'))
})

app.get('/video.mp4', (req, res) => {
    return res.sendFile(path.join(__dirname, './downtime_depression.mp4'))
})

app.get('/script.js', (req, res) => {
    return res.sendFile(path.join(__dirname, './script.js'))
})

app.use((req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'))
})

app.listen(process.env.PORT || 80, () => {
    console.log('Started')
})