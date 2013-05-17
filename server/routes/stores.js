var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('shoppinglistdb', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'shoppinglistdb' database");
        db.collection('stores', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'stores' collection doesn't exist. Creating it with sample data...");
                populateStores();
            }
        });
    }
});

exports.findAll = function(req, res) {
    db.collection('stores', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};


/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateStores = function() {
    var stores = [
        { name: 'Any'},
        { name: 'Stop & Shop'},
        { name: 'Shaws'},
        { name: 'Whole Foods'},
        { name: 'Target'},
        { name: 'CVS'}
    ];

    db.collection('stores', function(err, collection) {
        collection.insert(stores, {safe:true}, function(err, result) {});
    });

};