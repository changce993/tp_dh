module.exports = function(req, res, next){
    let admins = [
        {user : 'ada'},
        {user : 'greta'},
        {user : 'vim'},
        {user : 'tim'},
    ]
    
    var user = req.query.user;
    var username = user.toLowerCase()
    for ( var i = 0; i < admins.length; i++){
        if(username == admins[i].user){
            next()
        }
    }
    res.send(`Lo sentimos ${user}, no tienes los permisos necesarios`)
}