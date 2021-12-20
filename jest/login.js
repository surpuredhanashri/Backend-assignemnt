function login(uid,pswd) {
    if(uid==101 && pswd=="admin"){
        return "Valid User"
    }
    else
    return "Invalid User"
}

module.exports=login;