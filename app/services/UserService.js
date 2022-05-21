const User = require('./../models/User');

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(user){
        let list = [];
        list.push(user.id);
        list.push(user.username);
        list.push(user.name);
        list.push(user.bio);
        return list;
    }

    static updateUserUsername(user, newUsername){
        user.username = newUsername;
        return user;
    }

    static getAllUsernames(list){
        let usernames = [];
        usernames.push(list[0].username);
        usernames.push(list[1].username);
        usernames.push(list[2].username);
        return usernames;
    }
}
module.exports = UserService;