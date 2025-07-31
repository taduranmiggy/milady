const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Cycle = sequelize.define('Cycle', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    },
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'start_date',
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'end_date',
  },
  lengthDays: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'length_days',
  },
  flow: {
    type: DataTypes.ENUM('light', 'medium', 'heavy', 'very_heavy'),
    allowNull: true,
  },
  symptoms: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  mood: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  pain: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 0,
      max: 10,
    },
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isComplete: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'is_complete',
  },
  predictedEndDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'predicted_end_date',
  },
  irregularities: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  tableName: 'cycles',
  indexes: [
    {
      fields: ['user_id', 'start_date'],
    },
    {
      fields: ['user_id', 'is_complete'],
    },
  ],
});

module.exports = Cycle;
