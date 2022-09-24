import { config } from "dotenv";

config()

export const PORT = process.env.PORT || 3000
export const DB_DATABASE = process.env.MYSQLDATABASE || 'db'
export const DB_HOST = process.env.MYSQLHOST || 'localhost'
export const DB_PASSWORD = process.env.MYSQLPASSWORD || 'password'
export const DB_PORT = process.env.MYSQLPORT|| 3306
export const DB_USER = process.env.MYSQLUSER|| 'root'
