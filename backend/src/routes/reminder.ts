import express from 'express';

const router = express.Router();

// Reminder routes placeholder
router.get('/', (req, res) => {
  res.json({ message: 'Reminders endpoint' });
});

export default router;
