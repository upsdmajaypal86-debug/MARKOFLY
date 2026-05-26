import http from 'k6/http';
import { check, sleep } from 'k6';

// Stress test configuration
export const options = {
  stages: [
    { duration: '30s', target: 20 },  // Ramp up
    { duration: '1m', target: 20 },   // Stay
    { duration: '30s', target: 50 },  // Increase load
    { duration: '1m', target: 50 },   // Stay
    { duration: '30s', target: 100 }, // Increase load further (Stress)
    { duration: '2m', target: 100 },  // Stay at peak
    { duration: '1m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'], // Allow up to 5% errors under stress
    http_req_duration: ['p(95)<1000'], // 95% of requests should be below 1s
  },
};

const BASE_URL = __ENV.BASE_URL || 'http://localhost:5173';

export default function () {
  // Test the Home page which is usually the most hit
  const res = http.get(BASE_URL);

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(0.5); // Faster interaction during stress
}
