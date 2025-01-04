const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = parseInt(process.env.PORT || '3000', 10);

const app = next({ 
  dev,
  hostname,
  port
});

const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    console.log('Next.js app is preparing...');
    
    const server = createServer((req, res) => {
      console.log(`Incoming request: ${req.method} ${req.url}`);
      
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    server.on('error', (err) => {
      console.error('Server error:', err);
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is in use, trying ${port + 1}...`);
        setTimeout(() => {
          server.close();
          server.listen(port + 1, hostname);
        }, 1000);
      }
    });

    server.listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
      console.log('> Mode:', dev ? 'development' : 'production');
    });
  })
  .catch((err) => {
    console.error('Error occurred starting server:', err);
    process.exit(1);
  }); 