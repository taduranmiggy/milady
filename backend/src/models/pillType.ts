import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface PillTypeAttributes {
  id: number;
  name: string;
  brand: string;
  type: 'combination' | 'progestin-only' | 'extended-cycle' | 'emergency';
  description?: string;
  instructions: string;
  cycleDays: number;
  activePillDays: number;
  inactivePillDays: number;
  sideEffects?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface PillTypeCreationAttributes extends Optional<PillTypeAttributes, 'id' | 'description' | 'sideEffects' | 'createdAt' | 'updatedAt'> {}

class PillType extends Model<PillTypeAttributes, PillTypeCreationAttributes> implements PillTypeAttributes {
  public id!: number;
  public name!: string;
  public brand!: string;
  public type!: 'combination' | 'progestin-only' | 'extended-cycle' | 'emergency';
  public description?: string;
  public instructions!: string;
  public cycleDays!: number;
  public activePillDays!: number;
  public inactivePillDays!: number;
  public sideEffects?: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PillType.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('combination', 'progestin-only', 'extended-cycle', 'emergency'),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cycleDays: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 28,
    },
    activePillDays: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 21,
    },
    inactivePillDays: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 7,
    },
    sideEffects: {
      type: DataTypes.JSON,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'pill_types',
    timestamps: true,
  }
);

export default PillType;
