import * as mongoose from 'mongoose';

export const SightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  architect: { type: String, required: true },
});

export interface Sight extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  architect: string;
}