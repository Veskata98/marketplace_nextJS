import { Schema, model, Types, models } from 'mongoose';

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: [5, 'Title must be at least 5 characters long'],
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Description must be at least 10 characters'],
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    creatorId: {
        type: String,
        required: true,
    },
});

const Listing = models.Listing || model('Listing', listingSchema);

export default Listing;
