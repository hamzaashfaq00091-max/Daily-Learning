use("CrudDb")

db.createCollection("users");

db.user.insertOne({
    name: "John Doe",
    email: "john.doe@example.com"
});