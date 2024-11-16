import mysql, { Connection, ConnectionOptions } from "mysql2/promise";

export const admin_pool = async () =>
  await getAdminConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD || "",
    database: process.env.MYSQL_DATABASE,
  });

export const admin_db_pool = async () =>
  await getAdminConnection({
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD || "",
    database: process.env.MYSQL_DATABASE,
  });

async function getAdminConnection({
  host,

  database,
  user,
  password,
}: {
  host: string;
  database?: string;
  user: string;
  password: string;
}): Promise<Connection> {
  const connOps: ConnectionOptions = {
    host,
    port: 3959,
    user,
    password,
  };

  if (database) {
    connOps.database = process.env.MYSQL_DB;
  }
  console.log("MySQL Client Connected");
  return await mysql.createConnection(connOps);
}
