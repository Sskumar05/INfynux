import { serve } from '@hono/node-server';
import serverModule from './dist/server/server.js';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

console.log(`Starting Render optimized Node server on port ${port}...`);

serve({
  fetch: serverModule.fetch,
  port: port
}, (info) => {
  console.log(`Server is running at http://localhost:${info.port}`);
});
