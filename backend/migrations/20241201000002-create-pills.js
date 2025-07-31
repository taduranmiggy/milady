'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pills', {
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
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.ENUM('combination', 'progestin-only', 'emergency', 'other'),
        allowNull: false,
        defaultValue: 'combination',
      },
      dosage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      shape: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reminder_times: {
        type: Sequelize.JSON,
        defaultValue: ['08:00'],
      },
      instructions: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      prescribed_by: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      prescription_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      expiry_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      notes: {
        type: Sequelize.TEXT,
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
    await queryInterface.addIndex('pills', ['user_id']);
    await queryInterface.addIndex('pills', ['user_id', 'is_active']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pills');
  }
};
