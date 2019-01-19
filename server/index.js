const logger = require('./src/logger');
const app = require('./src/app');
const { PORT } = require('./src/config');

app.listen(PORT, () => logger.info(`app listening on port ${PORT}`));
