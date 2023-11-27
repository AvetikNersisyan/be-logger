import { sequelize } from "../db/db.js";
import { DataTypes } from 'sequelize';

export const Logger = sequelize.define('api_responses', {
    endpoint: {
        type: DataTypes.STRING,

    },
    response_text: {
        type: DataTypes.TEXT,
    }
})