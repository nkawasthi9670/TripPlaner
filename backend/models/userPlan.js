
import mongoose from 'mongoose';

const userPlanSchema = new mongoose.Schema({
  location: { type: String, required: true },
  duration: { type: String, required: true },
  travelGroup: { type: String, required: true },
});

const UserPlan = mongoose.model('UserPlan', userPlanSchema);

export default UserPlan;
