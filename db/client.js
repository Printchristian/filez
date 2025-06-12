import dotenv from "dotenv";
dotenv.config(); // ✅ Must come BEFORE using process.env

import pg from "pg";

const db = new pg.Client(process.env.DATABASE_URL);

export default db;
