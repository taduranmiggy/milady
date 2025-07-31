const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const CycleDay = sequelize.define('CycleDay', {
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
  cycleId: {
    type: DataTypes.UUID,
    allowNull: true,
    field: 'cycle_id',
    references: {
      model: 'cycles',
      key: 'id',
    },
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  cycleDay: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'cycle_day',
  },
  phase: {
    type: DataTypes.ENUM('menstrual', 'follicular', 'ovulation', 'luteal'),
    allowNull: true,
  },
  flow: {
    type: DataTypes.ENUM('none', 'spotting', 'light', 'medium', 'heavy', 'very_heavy'),
    defaultValue: 'none',
  },
  symptoms: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  mood: {
    type: DataTypes.ENUM('great', 'good', 'okay', 'bad', 'terrible'),
    allowNull: true,
  },
  energy: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 10,
    },
  },
  sleep: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 10,
    },
  },
  stress: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1,
      max: 10,
    },
  },
  pain: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 0,
      max: 10,
    },
  },
  temperature: {
    type: DataTypes.DECIMAL(4, 2),
    allowNull: true,
  },
  cervicalMucus: {
    type: DataTypes.ENUM('dry', 'sticky', 'creamy', 'watery', 'egg_white'),
    allowNull: true,
    field: 'cervical_mucus',
  },
  weight: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sexualActivity: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'sexual_activity',
  },
  spotting: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  ovulationTest: {
    type: DataTypes.ENUM('negative', 'positive', 'peak'),
    allowNull: true,
    field: 'ovulation_test',
  },
  pregnancyTest: {
    type: DataTypes.ENUM('negative', 'positive'),
    allowNull: true,
    field: 'pregnancy_test',
  },
}, {
  tableName: 'cycle_days',
  indexes: [
    {
      unique: true,
      fields: ['user_id', 'date'],
    },
    {
      fields: ['cycle_id'],
    },
    {
      fields: ['user_id', 'phase'],
    },
  ],
});

module.exports = CycleDay;
