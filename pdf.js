const wkhtmltopdf = require('wkhtmltopdf');
const options = require('./pdf_options');

function streamToString(stream, timeout) {

    const chunks = [];
    return new Promise(function (resolve, reject) {

        stream.on('data', function (chunk) {
            chunks.push(chunk);
        });

        stream.on('error', function () {
            reject();
        });

        var all_read = false;

        stream.on('end', function () {
            all_read = true;

            console.log('All the data in the file has been read');
            resolve(Buffer.concat(chunks))
        });

        stream.on('close', function () {
            console.log('Stream has been destroyed and file has been closed');

            if (!all_read) {
                reject();
            }
        });

        timeout = timeout || 25000;

        setTimeout(function () {

            if (!all_read) {
                console.log('Stream has timed out before it was fully read');
                stream.destroy();
            }

        }, timeout);

    });
}

// https://github.com/devongovett/node-wkhtmltopdf/issues/57
// https://github.com/sugojs/sugo-wkhtmltopdf/blob/c54c433f37ffc2f7928f6e4682f48d509183c40d/src/wkhtmltopdf.ts
async function async_pdf(input, options) {

    return new Promise(function (resolve, reject) {

        // https://nodejs.org/api/stream.html#stream_class_stream_readable
        const stream = wkhtmltopdf(input, options);

        try {

            const buf = streamToString(stream);
            resolve(buf);

        } catch (ex) {
            reject();
        }

    });
}


module.exports = {async_pdf, streamToString, options};
