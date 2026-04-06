// tests/tasks.test.js
const request = require('supertest');
const app = require('../src/app');
const { resetStore } = require('../src/data/store');

beforeEach(() => {
  resetStore();
});

describe('GET /tasks', () => {
  it('should return an empty array when no tasks exist', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('should return all tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});