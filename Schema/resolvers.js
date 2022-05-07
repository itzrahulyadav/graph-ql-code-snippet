const {UserList,MovieList} = require('../fakeData');
const _ = require("lodash");

const resolvers = {
    Query:{
        users:() => {
           return UserList;
        },
        user:(parent,args)=>{
            const id = args.id;
            const user = _.find(UserList,{id:Number(id)});
            return user;
        },
        movies:() => {
            return MovieList;
        },
        movie:(parent,args) => {

            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        }
    },
    User:{
        favouriteMovies:() => {
            return _.filter(MovieList,(movie) => {
                return  movie.yearOfPublication >= 2000;
            })
        }
    },
    Mutation:{
        createUser:(parent,args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername:(parent,args) => {
            const {id,newUsername} = args.input;
            const user = _.find(UserList,{id:Number(id)});
            user.username = newUsername;
            return user;
        },
        deleteUser:(parent,args) => {
            const id = args.id;
            _.remove(UserList,user => user.id === Number(id));
            return null;
        }
    }
}

module.exports = {resolvers};