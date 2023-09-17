const mongoose = require('mongoose')
const mongoURI =  'mongodb://disha:Black$heep10@ac-cjuori3-shard-00-00.fuu69d9.mongodb.net:27017,ac-cjuori3-shard-00-01.fuu69d9.mongodb.net:27017,ac-cjuori3-shard-00-02.fuu69d9.mongodb.net:27017/Quick-Cuisine?ssl=true&replicaSet=atlas-fx4tqd-shard-0&authSource=admin&retryWrites=true&w=majority' // Customer change url to your db you created in atlas
// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = async function (callback) {
    // mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    //     // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    //     if (err) console.log("---" + err)
    //     else {
    //         // var database =
    //         console.log("connected to mongo")
    //         const foodCollection = await 


    //         console.log(foodCollection,"DATYA");
    //         foodCollection.find({}).toArray(async function (err, data) {
    //             const categoryCollection = await mongoose.connection.db.collection("Categories");
    //             categoryCollection.find({}).toArray(async function (err, Catdata) {
    //                 callback(err, data, Catdata);

    //             })
    //         });
    //         // listCollections({name: 'food_items'}).toArray(function (err, database) {
    //         // });
    //         //     module.exports.Collection = database;
    //         // });
    //     }
    // })

    mongoose.connect(mongoURI, function(err, db) {
  if(err) { return console.dir(err); }

     var collection = db.collection('food_item');
    // console.log(collection);

    collection.find().toArray(function(err, data) {
        var collection = db.collection('foodCategory');
        // console.log(collection);
    
        collection.find().toArray(function(err, Catdata) {
            callback(err, data, Catdata);
        }); 
    });    
   
});
};
