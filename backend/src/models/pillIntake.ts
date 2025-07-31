import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface PillIntakeAttributes {
  id: number;
  userId: number;
  userPillId: number;
  scheduledDate: Date;
  actualTakenDate?: Date;
  status: 'scheduled' | 'taken' | 'missed' | 'late';
  notes?: string;
  sideEffects?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface PillIntakeCreationAttributes extends Optional<PillIntakeAttributes, 'id' | 'actualTakenDate' | 'notes' | 'sideEffects' | 'createdAt' | 'updatedAt'> {}

class PillIntake extends Model<PillIntakeAttributes, PillIntakeCreationAttributes> implements PillIntakeAttributes {
  public id!: number;
  public userId!: number;
  public userPillId!: number;
  public scheduledDate!: Date;
  public actualTakenDate?: Date;
  public status!: 'scheduled' | 'taken' | 'missed' | 'late';
  public notes?: string;
  public sideEffects?: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PillIntake.init(
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
    userPillId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user_pills',
        key: 'id',
      },
    },
    scheduledDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    actualTakenDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('scheduled', 'taken', 'missed', 'late'),
      allowNull: false,
      defaultValue: 'scheduled',
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sideEffects: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'pill_intakes',
    timestamps: true,
  }
);

export default PillIntake;
