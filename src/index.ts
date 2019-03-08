import dotenv from 'dotenv';

dotenv.config();

import App from './app';

const app:App = new App();

app.listen(5000);
