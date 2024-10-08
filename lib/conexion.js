import mysql from 'mysql2/promise';

let conexion;

export const createConnection = async () =>{
  if(!conexion){
    conexion = await mysql.createConnection(
      {
        host: process.env.DATABASE_HOST,
        user : process.env.DATABASE_USER,
        password : process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME
  
      }
    );
  }
  return conexion;
}