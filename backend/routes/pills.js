const express = require('express');
const router = express.Router();

// Placeholder routes - will be implemented later
router.get('/', (req, res) => {
  res.status(501).json({ message: 'Get pills endpoint not implemented yet' });
});

router.post('/', (req, res) => {
  res.status(501).json({ message: 'Create pill endpoint not implemented yet' });
});

router.get('/:id', (req, res) => {
  res.status(501).json({ message: 'Get pill by ID endpoint not implemented yet' });
});

router.put('/:id', (req, res) => {
  res.status(501).json({ message: 'Update pill endpoint not implemented yet' });
});

router.delete('/:id', (req, res) => {
  res.status(501).json({ message: 'Delete pill endpoint not implemented yet' });
});

module.exports = router;
