const Robot = require("../../database/models/Robot");
const { getAllRobots, getRobot } = require("./robotControllers");

jest.mock("../../database/models/Robot");

describe("Given an getAllRobots controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a response", () => {
    test("Then it should call method json with a list of robots of the received response", async () => {
      const res = {
        json: jest.fn(),
      };
      const robots = [
        {
          _id: "333333",
          name: "Pepe",
          imagen: "robot.png",
          velocidad: "10",
          resistencia: "10",
          creacion: "18-02-2021",
        },
      ];
      Robot.find = jest.fn().mockResolvedValue(robots);

      await getAllRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robots });
    });
  });
});
describe("Given a getRobot controller", () => {
  describe("When it receives a response", () => {
    test("Then if the robot exists it should call method json with the robot", async () => {
      const req = {
        params: {
          id: "333333",
        },
      };
      const res = {
        json: jest.fn(),
      };
      const next = jest.fn();
      const robots = [
        {
          id: "333333",
          name: "Pepe",
          imagen: "robot.png",
          velocidad: "10",
          resistencia: "10",
          creacion: "18-02-2021",
        },
      ];
      Robot.findById = jest.fn().mockResolvedValue(robots);

      await getRobot(req, res, next);

      expect(res.json).toHaveBeenCalledWith(robots);
      expect(next).not.toHaveBeenCalled();
    });

    test("Then if the robot doesn't exist it should call next with a not found error", async () => {
      const req = {
        params: {
          _id: "333333",
        },
      };
      const next = jest.fn();
      const error = new Error("Robot not found");

      Robot.findById = jest.fn().mockResolvedValue(null);

      await getRobot(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });

    test("Then if the id format is invalid it should call next", async () => {
      const req = {
        params: {
          _id: "333333",
        },
      };
      const next = jest.fn();
      const error = new Error("Invalid id");

      Robot.findById = jest.fn().mockRejectedValue(error);

      await getRobot(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
