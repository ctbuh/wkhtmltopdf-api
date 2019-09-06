const os = require('os');

function ping(req, res) {

    res.json({
        ping: 'ping',
        arch: os.arch(),
        freemem: os.freemem(),
        loadavg: os.loadavg(),
        host: os.hostname(),
        platform: os.platform(),
        totalmem: os.totalmem(),
        uptime: os.uptime()
    });
}

module.exports = {ping};
