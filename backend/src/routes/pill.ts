import express from 'express';

const router = express.Router();

// Pill routes placeholder
router.get('/', (req, res) => {
  res.json({ message: 'Pills endpoint' });
});

export default router;
