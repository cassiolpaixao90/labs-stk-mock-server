const app = require('./router');

app.get('/account/:id/test/:id', (req, res) => {
    return res.status(200).send(JSON.stringify({
        accountId: "1223456789"
    }));
});

app.get('/account/:id', (req, res) => {
    return res.status(200).send(JSON.stringify({
        accountId: "1223456789"
    }));
});

app.post('/account', (req, res) => {
    return res.status(201).send(JSON.stringify({
        accountId: "1223456789"
    }));
});

app.listen(9000, () => console.log('App listen at 9000'));