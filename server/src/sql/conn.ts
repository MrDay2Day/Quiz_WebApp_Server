import mysql, { Connection, ConnectionOptions } from "mysql2/promise";

export const admin_pool = async () =>
  await getAdminConnection({
    host: process.env.MYSQL_HOST || "",
    port: process.env.MYSQL_PORT || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASS || "",
  });

export const admin_db_pool = async () =>
  await getAdminConnection({
    host: process.env.MYSQL_HOST || "",
    port: process.env.MYSQL_PORT || "",
    database: process.env.MYSQL_DB || "",
    user: process.env.MYSQL_USER || "",
    password: process.env.MYSQL_PASS || "",
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
