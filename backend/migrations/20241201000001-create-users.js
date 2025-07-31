'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_birth: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      timezone: {
        type: Sequelize.STRING,
        defaultValue: 'UTC',
      },
      is_email_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      profile_picture: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      preferences: {
        type: Sequelize.JSON,
        defaultValue: {
          notifications: {
            pillReminders: true,
            cycleUpdates: true,
            healthInsights: true,
          },
          privacy: {
            shareData: false,
            publicProfile: false,
          },
          ui: {
            theme: 'pink',
            animations: true,
          },
        },
      },
      last_login_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.addIndex('users', ['email'], { unique: true });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
