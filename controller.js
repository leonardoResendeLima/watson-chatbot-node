const getMessage = require('./service').getMessage;

exports.ask = (req, res, next) => {
    console.log(req.body.text)
    return getMessage(req.body).then(output => {
        res.status(200);
        console.log(output.output.text)
        res.send(output);
    }).catch(next);
}