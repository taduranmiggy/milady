import express from 'express';

const router = express.Router();

// Cycle routes placeholder
router.get('/', (req, res) => {
  res.json({ message: 'Cycles endpoint' });
});

export default router;
