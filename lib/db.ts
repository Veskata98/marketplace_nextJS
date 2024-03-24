import mongoose from 'mongoose';

let isConnected = 0;

export const dbConnect = async () => {
    if (isConnected === 1) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL!);
        isConnected = mongoose.connection.readyState;

        console.log('Connected to DB Successfully');
    } catch (error) {
        console.log('Error connecting to DB' + error);
    }
};
