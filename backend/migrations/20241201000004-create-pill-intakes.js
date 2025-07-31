'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pill_intakes', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pill_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'pills',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      scheduled_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      scheduled_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      taken_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('scheduled', 'taken', 'missed', 'skipped'),
        allowNull: false,
        defaultValue: 'scheduled',
      },
      late_taken: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      minutes_late: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      side_effects: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mood: {
        type: Sequelize.ENUM('great', 'good', 'okay', 'bad', 'terrible'),
        allowNull: true,
      },
      symptoms: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    });

    // Add indexes
    await queryInterface.addIndex('pill_intakes', ['user_id', 'scheduled_date']);
    await queryInterface.addIndex('pill_intakes', ['pill_id']);
    await queryInterface.addIndex('pill_intakes', ['user_id', 'status']);
    await queryInterface.addIndex('pill_intakes', ['pill_id', 'scheduled_date', 'scheduled_time'], { unique: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pill_intakes');
  }
};
