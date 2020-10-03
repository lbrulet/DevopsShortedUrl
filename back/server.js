const express = require('express');
const bodyParser = require('body-parser')
const ShortUrl = require('./db/models/shortUrl')
const short = require('short-uuid');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json())

app.get('/:alias', async (req, res) => {
    const shorted = await ShortUrl.findOne({
        where: {
            alias: req.params.alias,
        },
    })
    if (!shorted) return res.sendStatus(404).send({message: 'not found'})
    res.redirect(shorted.url);
});

app.post('/short-me', async (req, res) => {
    const alias = short.generate();
    await ShortUrl.create({
        url: req.body.url,
        alias
    })
    res.status(200).send({"message": alias})
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
