const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const PillIntake = sequelize.define('PillIntake', {
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
  pillId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'pill_id',
    references: {
      model: 'pills',
      key: 'id',
    },
  },
  scheduledDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: 'scheduled_date',
  },
  scheduledTime: {
    type: DataTypes.TIME,
    allowNull: false,
    field: 'scheduled_time',
  },
  takenAt: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'taken_at',
  },
  status: {
    type: DataTypes.ENUM('scheduled', 'taken', 'missed', 'skipped'),
    allowNull: false,
    defaultValue: 'scheduled',
  },
  lateTaken: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: 'late_taken',
  },
  minutesLate: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'minutes_late',
  },
  sideEffects: {
    type: DataTypes.JSON,
    allowNull: true,
    field: 'side_effects',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mood: {
    type: DataTypes.ENUM('great', 'good', 'okay', 'bad', 'terrible'),
    allowNull: true,
  },
  symptoms: {
    type: DataTypes.JSON,
    allowNull: true,
  },
}, {
  tableName: 'pill_intakes',
  indexes: [
    {
      fields: ['user_id', 'scheduled_date'],
    },
    {
      fields: ['pill_id'],
    },
    {
      fields: ['user_id', 'status'],
    },
    {
      unique: true,
      fields: ['pill_id', 'scheduled_date', 'scheduled_time'],
    },
  ],
});

module.exports = PillIntake;
