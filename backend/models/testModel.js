import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TestSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
        trim: true,
        maxlength: 140,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});