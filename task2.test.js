const request = require('supertest');
const app = require('./task2');
const Test = require('supertest/lib/test');

describe('task2 express endpoints' , () => {

    test('GET /home should return 200 and the greetings message.' , async () => {
        const res = await request(app).get('/home');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello visitor. THIS IS FROM task2!!!!!!');
    });

    test('GET /more-information should return 200 and more information.' , async () => {
        const res = await request(app).get('/more-information');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('This is more information on task2!!!!!!');
    });
    
});