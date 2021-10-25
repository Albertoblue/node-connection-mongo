const {MongoClient}= require('mongodb');

const url='mongodb://localhost:27017';
const client= new MongoClient(url);
const dbName='Users';
const collectionName='User';

async function main(){
    await client.connect();
    console.log("La conexion al servidor ha sido exitosa");

    
    const db=client.db(dbName);
    const collection=db.collection(collectionName);

    const result=await collection.find({}).toArray();
    return result;


}




main()
.then(result=>{
    console.log(result);
})
.catch(console.log)
.finally(()=>{
    client.close();
});