db.createCollection("fiction", {
  validator: {
    $jsonSchema: {
      required: ["name", "price"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and required",
        },
        price: {
          bsonType: "number",
          description: "must be a number",
        },
      },
    },
  },
  validationAction: "error",
});

db.runCommand({
  collMod: "fiction",
});
