const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("..");
const connectDataBase = require("../../database");
const User = require("../../database/models/User");

let server;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const connectionString = server.getUri();

  await connectDataBase(connectionString);
});

beforeEach(async () => {
  await User.create({
    name: "Pepe",
    userName: "Pepito",
    password: "$2b$10$2Sb.Go6I5kzUsQgiUrLkuOgQ2EchBHHq2pc/61z0svywnQ9Wvdexq",
  });
  await User.create({
    name: "Pepa",
    userName: "Pepita",
    password: "$2b$10$qv/DPSkGXWQlx3kUsP4Hne.eX6aKgLzoosstfKUMMrG6UbrSI6cIC",
  });
});

afterEach(async () => {
  await User.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.stop();
});

describe("Given a /users/login endpoint", () => {
  describe("When it receives a POST and a valid user", () => {
    test("Then it should return a valid token", async () => {
      const user = { userName: "Pepito", password: "1234" };

      const { body } = await request(app).post("/users/login").send(user);

      expect(body).toHaveProperty("token");
    });
  });
});
