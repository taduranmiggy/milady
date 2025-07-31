import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface MenstrualCycleAttributes {
  id: number;
  userId: number;
  cycleStartDate: Date;
  cycleEndDate?: Date;
  periodStartDate: Date;
  periodEndDate?: Date;
  cycleLength?: number;
  periodLength?: number;
  flow: 'light' | 'normal' | 'heavy';
  symptoms?: string[];
  mood?: string[];
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface MenstrualCycleCreationAttributes extends Optional<MenstrualCycleAttributes, 'id' | 'cycleEndDate' | 'periodEndDate' | 'cycleLength' | 'periodLength' | 'symptoms' | 'mood' | 'notes' | 'createdAt' | 'updatedAt'> {}

class MenstrualCycle extends Model<MenstrualCycleAttributes, MenstrualCycleCreationAttributes> implements MenstrualCycleAttributes {
  public id!: number;
  public userId!: number;
  public cycleStartDate!: Date;
  public cycleEndDate?: Date;
  public periodStartDate!: Date;
  public periodEndDate?: Date;
  public cycleLength?: number;
  public periodLength?: number;
  public flow!: 'light' | 'normal' | 'heavy';
  public symptoms?: string[];
  public mood?: string[];
  public notes?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

MenstrualCycle.init(
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
    cycleStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cycleEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    periodStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    periodEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    cycleLength: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      validate: {
        min: 21,
        max: 35,
      },
    },
    periodLength: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      validate: {
        min: 1,
        max: 10,
      },
    },
    flow: {
      type: DataTypes.ENUM('light', 'normal', 'heavy'),
      allowNull: false,
      defaultValue: 'normal',
    },
    symptoms: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    mood: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'menstrual_cycles',
    timestamps: true,
  }
);

export default MenstrualCycle;
