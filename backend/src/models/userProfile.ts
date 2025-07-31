import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface UserProfileAttributes {
  id: number;
  userId: number;
  dateOfBirth?: Date;
  averageCycleLength: number;
  averagePeriodLength: number;
  lastPeriodDate?: Date;
  contraceptiveGoal: 'pregnancy-prevention' | 'cycle-regulation' | 'acne-treatment' | 'other';
  healthConditions?: string[];
  allergies?: string[];
  currentMedications?: string[];
  reminderTime: string; // HH:MM format
  reminderDays: string[]; // Array of days: ['monday', 'tuesday', etc.]
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserProfileCreationAttributes extends Optional<UserProfileAttributes, 'id' | 'dateOfBirth' | 'lastPeriodDate' | 'healthConditions' | 'allergies' | 'currentMedications' | 'createdAt' | 'updatedAt'> {}

class UserProfile extends Model<UserProfileAttributes, UserProfileCreationAttributes> implements UserProfileAttributes {
  public id!: number;
  public userId!: number;
  public dateOfBirth?: Date;
  public averageCycleLength!: number;
  public averagePeriodLength!: number;
  public lastPeriodDate?: Date;
  public contraceptiveGoal!: 'pregnancy-prevention' | 'cycle-regulation' | 'acne-treatment' | 'other';
  public healthConditions?: string[];
  public allergies?: string[];
  public currentMedications?: string[];
  public reminderTime!: string;
  public reminderDays!: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserProfile.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    averageCycleLength: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 28,
      validate: {
        min: 21,
        max: 35,
      },
    },
    averagePeriodLength: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 5,
      validate: {
        min: 3,
        max: 10,
      },
    },
    lastPeriodDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    contraceptiveGoal: {
      type: DataTypes.ENUM('pregnancy-prevention', 'cycle-regulation', 'acne-treatment', 'other'),
      allowNull: false,
      defaultValue: 'pregnancy-prevention',
    },
    healthConditions: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    allergies: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    currentMedications: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    reminderTime: {
      type: DataTypes.STRING(5),
      allowNull: false,
      defaultValue: '09:00',
      validate: {
        is: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
      },
    },
    reminderDays: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
    },
  },
  {
    sequelize,
    tableName: 'user_profiles',
    timestamps: true,
  }
);

export default UserProfile;
