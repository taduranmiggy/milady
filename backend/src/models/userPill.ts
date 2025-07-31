import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from './index';

interface UserPillAttributes {
  id: number;
  userId: number;
  pillTypeId: number;
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserPillCreationAttributes extends Optional<UserPillAttributes, 'id' | 'endDate' | 'isActive' | 'createdAt' | 'updatedAt'> {}

class UserPill extends Model<UserPillAttributes, UserPillCreationAttributes> implements UserPillAttributes {
  public id!: number;
  public userId!: number;
  public pillTypeId!: number;
  public startDate!: Date;
  public endDate?: Date;
  public isActive!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserPill.init(
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
    pillTypeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'pill_types',
        key: 'id',
      },
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'user_pills',
    timestamps: true,
  }
);

export default UserPill;
