use("ExerciseDb")

db.createCollection("exercises");

db.exercises.insertOne({

    name:"Hamza",
    age:22,
    department:"Computer Science",
    subjects:["math","web development","data structures"]

}
)

db.exercises.updateOne(

    {age:22},
    {$inc:{age:1}}
)

db.exercises.insertOne({
    name:"Ali",
})

db.exercises.insertOne({
    age:24
})

db.exercises.insertOne({
    subjects:["phido"]
})

db.exercises.remove({
    subjects:["math"]
})


db.exercises.find({
    age:{$gt:18}
})

db.exercises.find(
    {age:{$lt:25}},
)

db.exercises.find(

    {department:{$in:["Computer Science","Information Technology"]}}


)


db.exercises.find(

  {  $and:[

        {age:{$age:25}},
        {department:["Computer Science","Information Technology"]}
    ]
}
)