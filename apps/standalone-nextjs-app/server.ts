import next from 'next';
import express from 'express';

export default async function customServer(app, settings, proxyConfig) {
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    const server = express();

    server.all('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(settings.port, () => {
      console.log(`> Ready on http://localhost:${settings.port}`);
    });
    server.on('error', console.error);
  });
}
