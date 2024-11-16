import mysql, { Connection, ConnectionOptions } from "mysql2/promise";

const username = "doadmin";
const password = process.env.MYSQL_PASS || "";
const host = "quiz-server-do-user-18327375-0.i.db.ondigitalocean.com";
const port = "25060";
const database = "defaultdb";
// const sslmode = "REQUIRED"

export const admin_pool = async () =>
  await getAdminConnection({
    host,
    port,
    user: username,
    password,
  });

export const admin_db_pool = async () =>
  await getAdminConnection({
    host,
    port,
    database,
    user: username,
    password,
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
    ssl: { rejectUnauthorized: true },
  };

  if (database) {
    connOps.database = process.env.MYSQL_DB;
  }
  console.log("MySQL Client Connected");
  return await mysql.createConnection(connOps);
}
