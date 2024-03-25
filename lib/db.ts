import mongoose from 'mongoose';

export const dbConnect = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_CONNECT_URL!);
        console.log('Connected to DB Successfully');
    } catch (error) {
        console.log('Error connecting to DB' + error);
    }
};
