import mongoose from 'mongoose';

const connectMongo = async () => await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(error => console.log('Connection Error:', error));


export default connectMongo;