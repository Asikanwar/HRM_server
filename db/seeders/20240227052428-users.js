'use strict';

module.exports = {
  up: (models, mongoose) => {
    return models.users
      .insertMany([
        {
          _id: "65f15c502d4df9de07a9f765",
          first_name: "Asik",
          last_name: "anwar",
          email: 'asikanwar@gmail.com',
          password: "$2a$12$GjhZQmFAXLdBR2UJwOWJceTkGsdxHQgXDEoS5fnPCxfH2PDPH5oyq",
          user_type : "65f3d64061496a1395461cf0"

        },
        {
          _id: "65e57767b4afea6e91b76783",
          first_name: "kiran",
          last_name: "antony",
          email: 'kiran@gmail.com',
          password: "$2a$12$tbfB365WDuwma4pJmomXbedD2OAsyC1f2eJAgawTXFHYx2o51SGpi",
          user_type : "65f3d65961496a1395461cf1"
        }
      ])
      .then((res) => {
        console.log(res.insertedCount);
      });
  },

  down: (models, mongoose) => {
    return models.users
      .deleteMany({
        _id: {
          $in: [
            "65f15c502d4df9de07a9f765",
            "65f15e592d4df9de07a9f766",
          ]
        }
      })
      .then((res) => {
        console.log(res.deletedCount);
      });
  },
};
