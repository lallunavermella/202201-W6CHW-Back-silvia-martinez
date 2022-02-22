const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("..");
const Robot = require("../../database/models/Robot");
const connectDataBase = require("../../database");

let server;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const connectionString = server.getUri();

  await connectDataBase(connectionString);
});

beforeEach(async () => {
  await Robot.create({
    name: "remullit",
    image: "unaimatge.jpg",
    caractheristics: { velocity: 3, resistence: 5, creation: 2020 },
  });
  await Robot.create({
    name: "supermullit",
    image: "unaimatge.jpg",
    caractheristics: { velocity: 3, resistence: 5, creation: 2020 },
  });
});

afterEach(async () => {
  await Robot.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given a /robots/ endpoint ", () => {
  describe("When it receives a GET ", () => {
    test("Then it should return with 200 status code", async () => {
      const { body } = await request(app).get("/robots").expect(200);

      expect(body.robots).toHaveLength(2);
    });
  });
  describe("When it receives a PUT", () => {
    test("Then it should return a error", async () => {
      const errorMessage = "Not found";
      const { body } = await request(app).put("/robots").expect(404);

      expect(body.message).toBe(errorMessage);
    });
  });
});

describe("Given a /robots/id endpoint", () => {
  describe("When it receives a GET with an inexisting id", () => {
    test("Then it should return an error ", async () => {
      const id = 1;
      const { body } = await request(app).get(`/robots/${id}`).expect(500);

      expect(body.robots).toBe();
    });
  });
  describe("When it receives a Get with a valid id", () => {
    test("Then it should response with code 200", async () => {
      const {
        body: {
          robots: {
            0: { _id: id },
          },
        },
      } = await request(app).get("/robots").expect(200);

      const { body } = await request(app).get(`/robots/${id}`).expect(200);

      // eslint-disable-next-line no-underscore-dangle
      expect(id).toEqual(body._id);
    });
  });
});
