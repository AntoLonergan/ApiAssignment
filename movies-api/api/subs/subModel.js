import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SubSchema = new Schema({
  name: { type: String, required: true},
  email: {type: String, unique: true, required: true },
});

SubSchema.statics.findByName = function (name) {
  return this.findOne({ name: name });
};

export default mongoose.model('Sub', SubSchema);