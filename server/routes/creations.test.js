const request = require('supertest')

const server = require('../server')
const creationDb = require('../db/creations')

jest.mock('../db/creations', () => ({
  getCreations: jest.fn(),
  getCreationById: jest.fn()
}))

const mockCreations = [
  {
    id: 1,
    clay: 1,
    shape: 2,
    status: 2,
    glaze: 4,
    weight_wet: 0,
    weight_leather_hard: 0,
    weight_bone_dry: 0,
    weight_bisque: 0,
    weight_complete: 0,
    date_created: '2020-06-15T13:45:30',
    date_complete: '2020-07-15T13:45:30',
    note: 'Glaze with criss-cross pattern'
  },
  {
    id: 2,
    clay: 2,
    shape: 2,
    status: 1,
    glaze: 4,
    weight_wet: 0,
    weight_leather_hard: 0,
    weight_bone_dry: 0,
    weight_bisque: 0,
    weight_complete: 0,
    date_created: '2020-05-24T14:45:30',
    date_complete: '2020-06-24T14:45:30',
    note: 'Glaze with criss-cross pattern'
  }
]

const mockCreation = {
  id: 2,
  clay: 2,
  shape: 2,
  status: 1,
  glaze: 4,
  weight_wet: 0,
  weight_leather_hard: 0,
  weight_bone_dry: 0,
  weight_bisque: 0,
  weight_complete: 0,
  date_created: '2020-05-24T14:45:30',
  date_complete: '2020-06-24T14:45:30',
  note: 'Glaze with criss-cross pattern'
}

describe('GET /api/v1/creations', () => {
  it('returns the correct number of creations', () => {
    creationDb.getCreations.mockImplementation(() =>
      Promise.resolve(mockCreations)
    )
    return request(server)
      .get('/api/v1/creations')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        return expect(res.body).toHaveLength(2)
      })
  })

  describe('GET /api/v1/creations/:id', () => {
    it('returns the correct status', () => {
      creationDb.getCreationById.mockImplementation(() =>
        Promise.resolve(mockCreation)
      )

      return request(server)
        .get('/api/v1/creations/2')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.clay).toBe(2)
          expect(res.body.shape).toBe(2)
          expect(res.body.status).toBe(1)
          expect(res.body.glaze).toBe(4)
          expect(res.body.date_created).toBe('2020-05-24T14:45:30')
          expect(res.body.date_complete).toBe('2020-06-24T14:45:30')
          expect(res.body.note).toBe('Glaze with criss-cross pattern')
          return null
        })
    })

    it('returns a 404 if id is not found', () => {
      creationDb.getCreationById.mockImplementation(() => Promise.resolve(null))

      return request(server)
        .get('/api/v1/creations/9999')
        .expect(404)
        .then((res) => {
          expect(res.body.error).toMatch('creation id not found')
          return res
        })
    })
  })
})
