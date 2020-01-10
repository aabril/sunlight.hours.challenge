const request = require('supertest')
const app = require('../../src/app')

describe('📡  /api/init', () => {
  it('should be accessible via POST', async () => {
    const postPayload = { }
    const res = await request(app).post('/api/init').send(postPayload)
    expect(res.statusCode).toBeTruthy()
  })

  it('should return an error if the strjson is not defined', async () => {
    const postPayload = { }
    const res = await request(app).post('/api/init').send(postPayload)
    expect(res.statusCode).toEqual(422)
    expect(res.body).toEqual({"status": "missing strjson body post parameter"})
  })

  it('should return an error if the strjson is not a valid str', async () => {
    const postPayload = { strjson: 22 }
    const res = await request(app).post('/api/init').send(postPayload)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({"status": "strjson is not a string"})
  })

  it('should return an error if the strjson string is not a valid JSON format', async () => {
    const postPayload = { strjson: "DUMMY_STRING" }
    const res = await request(app).post('/api/init').send(postPayload)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({"status": "strjson is not a valid JSON string"})
  })

  it('should return an error if the strjson string JSON is not an array', async () => {
    const postPayload = { strjson: "{}" }
    const res = await request(app).post('/api/init').send(postPayload)
    expect(res.statusCode).toEqual(400)
    expect(res.body).toEqual({"status": "strjson is not a valid JSON array"})
  })

  it('should return a successful if strjson is correctly formatted', async () => {
    const postPayload = { strjson: "[{}, {}]" }
    const res = await request(app).post('/api/init').send(postPayload)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({"status": "initialised correctly"})
  })

})

describe('📡  /api/sunlight', () => {
  it('should be accessible via GET', async () => {
    const res = await request(app).get('/api/sunlight')
    expect(res.statusCode).toBeTruthy()
  })
})