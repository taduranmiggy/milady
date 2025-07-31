const User = require('./User');
const Pill = require('./Pill');
const PillIntake = require('./PillIntake');
const Cycle = require('./Cycle');
const CycleDay = require('./CycleDay');

// Define associations
User.hasMany(Pill, { foreignKey: 'user_id', as: 'pills' });
Pill.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(PillIntake, { foreignKey: 'user_id', as: 'pillIntakes' });
PillIntake.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Pill.hasMany(PillIntake, { foreignKey: 'pill_id', as: 'intakes' });
PillIntake.belongsTo(Pill, { foreignKey: 'pill_id', as: 'pill' });

User.hasMany(Cycle, { foreignKey: 'user_id', as: 'cycles' });
Cycle.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

User.hasMany(CycleDay, { foreignKey: 'user_id', as: 'cycleDays' });
CycleDay.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Cycle.hasMany(CycleDay, { foreignKey: 'cycle_id', as: 'days' });
CycleDay.belongsTo(Cycle, { foreignKey: 'cycle_id', as: 'cycle' });

module.exports = {
  User,
  Pill,
  PillIntake,
  Cycle,
  CycleDay,
};
