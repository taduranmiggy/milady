'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cycle_days', {
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
      cycle_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'cycles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      cycle_day: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      phase: {
        type: Sequelize.ENUM('menstrual', 'follicular', 'ovulation', 'luteal'),
        allowNull: true,
      },
      flow: {
        type: Sequelize.ENUM('none', 'spotting', 'light', 'medium', 'heavy', 'very_heavy'),
        defaultValue: 'none',
      },
      symptoms: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      mood: {
        type: Sequelize.ENUM('great', 'good', 'okay', 'bad', 'terrible'),
        allowNull: true,
      },
      energy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      sleep: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      stress: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pain: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      temperature: {
        type: Sequelize.DECIMAL(4, 2),
        allowNull: true,
      },
      cervical_mucus: {
        type: Sequelize.ENUM('dry', 'sticky', 'creamy', 'watery', 'egg_white'),
        allowNull: true,
      },
      weight: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: true,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      sexual_activity: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      spotting: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      ovulation_test: {
        type: Sequelize.ENUM('negative', 'positive', 'peak'),
        allowNull: true,
      },
      pregnancy_test: {
        type: Sequelize.ENUM('negative', 'positive'),
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
    await queryInterface.addIndex('cycle_days', ['user_id', 'date'], { unique: true });
    await queryInterface.addIndex('cycle_days', ['cycle_id']);
    await queryInterface.addIndex('cycle_days', ['user_id', 'phase']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cycle_days');
  }
};
