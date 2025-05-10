
import express from 'express';
import UserPlan from '../models/userPlan.js';

const router = express.Router();

// Save user plan
router.post('/plan', async (req, res) => {
  const { location, duration, travelGroup } = req.body;

  try {
    const userPlan = new UserPlan({ location, duration, travelGroup });
    await userPlan.save();

    res.status(201).json({
      success: true,
      message: 'Plan saved successfully!',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// Get user plan
router.get('/plan', async (req, res) => {
  try {
    const userPlan = await UserPlan.findOne().sort({ _id: -1 }); // Get latest plan
    if (!userPlan) {
      return res.status(404).json({
        success: false,
        message: 'No plan found',
      });
    }

    res.status(200).json({
      success: true,
      data: userPlan,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;
