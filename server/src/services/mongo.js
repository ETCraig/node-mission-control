const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://nasa-api:nx28Y8LhRM7v1PEf@node-cluster.g57kopv.mongodb.net/?retryWrites=true&w=majority';


mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}