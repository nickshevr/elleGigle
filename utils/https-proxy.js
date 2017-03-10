const rp = require('request-promise');
const cheerio = require('cheerio');
const cheerioTableparser = require('cheerio-tableparser');

const SSL_LINKS = ['https://www.sslproxies.org/'];

exports.getProxyList = function getProxyList() {
    return rp.get(SSL_LINKS[0]).then(page => {
        const $ = cheerio.load(page);
        cheerioTableparser($);

        const data = $("#proxylisttable").parsetable(true, false, false);

        const output = [];

        for (let i = 1; i < 100; i++) {
            output.push({
                ip: data[0][i],
                port: data[1][i],
                country: data[3][i]
            })
        }

        return output;
    })
};