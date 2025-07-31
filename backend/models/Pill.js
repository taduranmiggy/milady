const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Pill = sequelize.define('Pill', {
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.ENUM('combination', 'progestin-only', 'emergency', 'other'),
    allowNull: false,
    defaultValue: 'combination',
  },
  dosage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  shape: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reminderTimes: {
    type: DataTypes.JSON,
    defaultValue: ['08:00'],
    field: 'reminder_times',
  },
  instructions: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  prescribedBy: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'prescribed_by',
  },
  prescriptionDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'prescription_date',
  },
  expiryDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'expiry_date',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    field: 'is_active',
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'pills',
  indexes: [
    {
      fields: ['user_id'],
    },
    {
      fields: ['user_id', 'is_active'],
    },
  ],
});

module.exports = Pill;
