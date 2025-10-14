const https = require('https');

const webhookUrl = 'https://discord.com/api/webhooks/1427562889643823176/7gyBwsa85BOKcwXuPz4bWde5MQyNrP0jtAfSbrZntr5HcusYPpBnsJrVNuPQ7ubCs_w0';
const message = {
  content: `🚀 Build #${process.env['TEAMCITY_BUILD_ID']} - ${process.env['TEAMCITY_BUILD_STATUS']} by ${process.env['TEAMCITY_BUILD_TRIGGERED_BY']}`
};

const data = JSON.stringify(message);

const url = new URL(webhookUrl);
const options = {
  hostname: url.hostname,
  path: url.pathname + url.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  res.on('data', () => {});
});
req.on('error', () => {});
req.write(data);
req.end();
