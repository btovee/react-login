const express = require('express');
const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const cors = require('cors');
const Prometheus = require('prom-client');
const { AUTH_SECRET } = require('./config');
const { generateToken, verifyUser } = require('./authentication');

const collectDefaultMetrics = Prometheus.collectDefaultMetrics;

const PrometheusMetrics = {
  requestCounter: new Prometheus.Counter({
    name: 'throughput',
    help: 'The number of requests served',
  }),
};

collectDefaultMetrics();
const app = express();

app.use(cors());

app.use((req, res, next) => {
  PrometheusMetrics.requestCounter.inc()
  next()
});

app.get('/metrics', (req, res) => {
  res.end(Prometheus.register.metrics())
});

app.use(bodyParser.json())

app.use(
  jwt({
    secret: AUTH_SECRET,
  }).unless({ path: ['/login', '/metrics'] })
);

app.use((err, req, res, next) => {
  if (err && err.inner && err.inner.name === 'TokenExpiredError') {
    return res.status(401).send('Auth Token Expired')
  }
  if (err && err.name === 'UnauthorizedError') {
    return res.status(401).send('Invalid Auth Token')
  }
  next(req)
});

app.get('/verifyToken', (req, res) => {
  res.status(200).send('OK')
});

app.post('/login', (req, res) => {
  const { username, password } = req.body
  const user = verifyUser(username, password)
  if (user) {
    const token = generateToken(user)
    return res.status(200).json({ token })
  }
  res.status(401).send('Invalid Username or Password')
});

module.exports = app;
