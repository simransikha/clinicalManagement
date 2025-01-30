import mongoose from 'mongoose';

const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/clinical',
            {
                useNewUrlParser: true,
               
              
            });
        console.log('Database connected');
    }
    catch (err) {
        console.log(err.message);
    }
}
connectDatabase();

export default connectDatabase;












