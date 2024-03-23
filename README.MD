flow mvc + SEQUELIZE

CONROLLER = adalah pelayan yang memberi order dari client ke dapur 

a -> z
request client --> controller(red.query,req.params,req.body) --> services(business logic)
services --> repositories(database)

z -> a
repositories --> services --> controllers --> responce for client