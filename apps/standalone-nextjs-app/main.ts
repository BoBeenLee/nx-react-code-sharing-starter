import next from 'next';
import customServer from './server';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  ...(process.env.NEXT_DIR
    ? { dir: process.env.NEXT_DIR }
    : {
        dir: 'dist/apps/standalone-nextjs-app',
      }),
});

customServer(app, { port }, {});
