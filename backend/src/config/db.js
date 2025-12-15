import { dbPool } from "./dbConfig.js";

export const connectDB = async () => {
  try {
    const connection = await dbPool.getConnection();
    console.log(">>> DB is connected");
    connection.release();
  } catch (error) {
    console.error("Error conectando a la base de datos:", error);
  }
};

export default dbPool;
