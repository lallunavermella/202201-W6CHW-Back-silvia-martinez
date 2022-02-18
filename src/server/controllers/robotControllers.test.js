const Robot = require("../../database/models/Robot");
const getAllRobots = require("./robotControllers");

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
