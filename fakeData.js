const UserList = [
    {
        id:1,
        name:"John",
        username:"john",
        age:25,
        nationality:"KOREA",
        friends:[
            {
                id: 2,
                name: "Rony",
                username: "rony23",
                age: 23,
                nationality: "RUSSIA"
            },
            {
                id: 3,
                name: "Rahul",
                username: "itzrahulyadav",
                age: 22,
                nationality: "INDIA"
            }

        ]
    },
    {
        id:2,
        name:"Rony",
        username:"rony23",
        age:23,
        nationality:"RUSSIA"
    },
    {
        id:3,
        name:"Rahul",
        username:"itzrahulyadav",
        age:22,
        nationality:"INDIA"
    },
    {
        id:4,
        name:"Sarah",
        username:"Cameron",
        age:28,
        nationality:"CHILE",
        friends:[
            {
                id: 3,
                name: "Rahul",
                username: "itzrahulyadav",
                age: 22,
                nationality: "INDIA"
            }
        ]
    }
];

const MovieList = [
    {
        id:1,
        name:"Avengers Endgame",
        yearOfPublication:2019,
        isInTheaters:true
    },
    {
        id:2,
        name:"Interstellar",
        yearOfPublication:2010,
        isInTheaters:true
    },
    {
        id:3,
        name:"SuperBad",
        yearOfPublication:2000,
        isInTheaters:false
    }
]

module.exports = {UserList,MovieList};