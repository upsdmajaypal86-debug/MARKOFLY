import http from 'k6/http';
import { check, sleep } from 'k6';

// Test configuration
export const options = {
  // Key performance indicators (KPIs)
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
  },
  // Load stages
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users over 30s
    { duration: '1m', target: 20 },  // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 },  // Ramp down to 0 users
  ],
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:5173';

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/web-development',
  '/services/seo',
  '/services/paid-ads',
  '/services/brand-identity',
  '/services/digital-marketing',
  '/services/automation',
  '/contact',
];

export default function () {
  // Randomly pick a route to simulate browsing
  const route = ROUTES[Math.floor(Math.random() * ROUTES.length)];
  const res = http.get(`${BASE_URL}${route}`);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body contains content': (r) => r.body.length > 0,
  });

  // Wait a bit between requests (think time)
  sleep(1);
}
