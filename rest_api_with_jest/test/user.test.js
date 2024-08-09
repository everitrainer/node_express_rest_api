import request from 'supertest';
import app from '../src/app.js';

describe('Users API', () => {
    describe('GET /api/users', () => {
        it('should GET all the users', async () => {
            const res = await request(app).get('/api/users');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Array);
            expect(res.body.length).toEqual(2);
        });
    });

    describe('GET /api/users/:id', () => {
        it('should GET a user by the given id', async () => {
            const userId = 1;
            const res = await request(app).get(`/api/users/${userId}`);
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Object);
            expect(res.body).toHaveProperty('id', userId);
            expect(res.body).toHaveProperty('name');
        });

        it('should return 404 for a user not found', async () => {
            const userId = 999;
            const res = await request(app).get(`/api/users/${userId}`);
            expect(res.statusCode).toEqual(404);
        });
    });
});
