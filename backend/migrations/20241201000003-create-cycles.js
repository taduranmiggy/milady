'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cycles', {
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
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      length_days: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      flow: {
        type: Sequelize.ENUM('light', 'medium', 'heavy', 'very_heavy'),
        allowNull: true,
      },
      symptoms: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      mood: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      pain: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      is_complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      predicted_end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      irregularities: {
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
    await queryInterface.addIndex('cycles', ['user_id', 'start_date']);
    await queryInterface.addIndex('cycles', ['user_id', 'is_complete']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cycles');
  }
};
