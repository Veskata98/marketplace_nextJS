import { Categories } from '@/types';
import { Schema, model, Types, models } from 'mongoose';

function validateCategory(value: string) {
    return Object.values(Categories).includes(value as Categories);
}

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
        validate: {
            validator: validateCategory,
            message: 'Invalid category',
        },
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Listing = models.Listing || model('Listing', listingSchema);

export default Listing;
