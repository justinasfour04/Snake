import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(__dirname));

app.get('/', (_, res) => {
  res.sendFile(join(__dirname + '/index.html'));
});

app.listen(3000, () => {
});