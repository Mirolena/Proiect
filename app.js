const express = require('express')
const app = express();
const path = require('path');
app.get('/homepage', function (req, res) {
    res.sendFile('homepage.html', { root: path.join(__dirname) });
});
app.get('/about', function (req, res) {
    res.sendFile('about.html', { root: path.join(__dirname) });
});
app.get('/login', function (req, res) {
    res.sendFile('login.html', { root: path.join(__dirname) });
});
app.get('/contact', function (req, res) {
    res.sendFile('contact.html', { root: path.join(__dirname) });
});
app.get('/breakfast/asian', function (req, res) {
    res.sendFile('asian.html', { root: path.join(__dirname) });
});
app.get('/breakfast/european', function (req, res) {
    res.sendFile('european.html', { root: path.join(__dirname) });
});
app.get('/breakfast/american', function (req, res) {
    res.sendFile('american.html', { root: path.join(__dirname) });
});
app.get('/lunch/asian', function (req, res) {
    res.sendFile('asian.html', { root: path.join(__dirname) });
});
app.get('/lunch/european', function (req, res) {
    res.sendFile('european.html', { root: path.join(__dirname) });
});
app.get('/lunch/american', function (req, res) {
    res.sendFile('american.html', { root: path.join(__dirname) });
});
app.get('/dinner/asian', function (req, res) {
    res.sendFile('asian.html', { root: path.join(__dirname) });
});
app.get('/dinner/european', function (req, res) {
    res.sendFile('european.html', { root: path.join(__dirname) });
});
app.get('/dinner/american', function (req, res) {
    res.sendFile('american.html', { root: path.join(__dirname) });
});
app.use('/Proiect', express.static(path.join(__dirname)));
app.use('lunch', express.static(path.join(__dirname)));
app.use('breakfast', express.static(path.join(__dirname)));
app.use('dinner', express.static(path.join(__dirname)));
app.listen(5000);