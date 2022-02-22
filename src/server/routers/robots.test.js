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
});
