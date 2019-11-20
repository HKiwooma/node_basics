const mongoose = require("mongoose");
const Register = require("../models/registrationPost");

//create test suite
describe("registration model test", () => {
  //set up: run before any test; in this case to create out testdb
  beforeAll(async () => {
    try {
      await mongoose.connect(
        "mongodb://localhost:27017/test-db",
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => {
          console.log("Connected to DB");
        }
      );
      await Register.deleteMany({});
    } catch (error) {
      console.log("database error" + err);
    }
  });

  test("should be able to save", async () => {
    const register = new Register({ firstName: "haruna" });
    // save data using scheme collection name 'Register' to database
    try {
      await register.save();
      const items = await Register.find();
      expect(items.length).toBe(1);
    } catch (error) {
      console.log("database error" + err);
    }
  });

  //test tear down: some finishing work that needs to happen
});
