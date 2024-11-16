import mysql, { Connection, ConnectionOptions } from "mysql2/promise";

export const admin_pool = async () =>
  await getAdminConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "",
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT || "3306",
  });

export const admin_db_pool = async () =>
  await getAdminConnection({
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASS || "",
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT || "3306",
  });

async function getAdminConnection({
  host,
  port,
  database,
  user,
  password,
}: {
  host: string;
  port: string;
  database?: string;
  user: string;
  password: string;
}): Promise<Connection> {
  let portNum = 0;

  try {
    parseInt(port);
  } catch (error: unknown) {
    console.log("SQL PORT ERROR", { error });
    portNum = 0;
  }

  const connOps: ConnectionOptions = {
    host,
    port: portNum,
    user,
    password,
  };

  if (database) {
    connOps.database = process.env.MYSQL_DB;
  }
  console.log("MySQL Client Connected");
  return await mysql.createConnection(connOps);
}
