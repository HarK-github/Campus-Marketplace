// src/db/pgConnect.js
import { initDatabase } from './initDb.js';

const connectPostgres = async () => {
  try {
    await initDatabase();
    console.log('✅ Supabase REST API & Database initialized');
    return null;
  } catch (error) {
    console.error('Database initialization error:', error);
    process.exit(1);
  }
};

export { connectPostgres };
