const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented later
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Get cycles endpoint not implemented yet' });
});

router.post('/', (req, res) => {
  res.status(501).json({ message: 'Create cycle endpoint not implemented yet' });
});

router.get('/current', (req, res) => {
  res.status(501).json({ message: 'Get current cycle endpoint not implemented yet' });
});

router.get('/:id/days', (req, res) => {
  res.status(501).json({ message: 'Get cycle days endpoint not implemented yet' });
});

router.post('/days', (req, res) => {
  res.status(501).json({ message: 'Log cycle day endpoint not implemented yet' });
});

router.get('/predictions', (req, res) => {
  res.status(501).json({ message: 'Get cycle predictions endpoint not implemented yet' });
});

module.exports = router;
