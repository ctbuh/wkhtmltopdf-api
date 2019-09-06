require('dotenv').config();

const app = require('./app');

const pdf = require('./pdf');

// use default options
const Options = require('./pdf_options');

var options = new Options();

// custom!!
options.options.pageSize = 'A4';
options.options.disableSmartShrinking = false;
options.options.viewportSize = '1024x768';
options.options.noOutline = true;
options.options.printMediaType = true;
options.options.disableJavascript = true;
options.options.loadErrorHandling = 'ignore';

// custom!
options.options.debug = false;

app.get('/', function (req, res) {
    res.json({
        endpoints: ['/v1/convert']
    });
});

app.get('/checkstatus', function (req, res) {
    res.status(200).send('OK');
});

app.get('/v1/options', function (req, res) {
    res.json({
        'options': options.options
    });
});


app.get('test', function(req, res){


});

// https://github.com/jblotus/aws-lambda-wkhtmltopdf/blob/master/index.js
// typical invoice takes up  10.45 KB or 0.01 mb
// post_max_size = 8 MB by default -- cache this too!
app.post('/v1/convert', async function (req, res) {

    const html = req.body.html; // deprecated
    const html_base64 = req.body.html_base64;

    const encoded = typeof html_base64 !== "undefined";

    // what options?
    const custom_options = req.body.options || {};

    let serialized = options.serialize(custom_options);

    try {

        let buffer = '';

        if (encoded) {
            buffer = Buffer.from(html_base64, 'base64').toString('utf8');
        } else {
            buffer = html;
        }

        const output = await pdf.async_pdf(buffer, serialized);

        if (encoded) {

            let pdf_base64 = Buffer.from(output).toString('base64');

            res.json({
                'html_base64': null,
                'pdf_base64': pdf_base64
            });

        } else {
            res.setHeader('Content-type', 'application/pdf');
            res.send(output);
        }

    } catch (ex) {

        res.status(500).json({
            'error': 'Something went wrong or request timed out!',
            'ex': ex ? ex.toString() : null
        });
    }

});

const API = require('./controllers/api');
app.get('/ping', API.ping);

const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Server started at port %s', port);
});

