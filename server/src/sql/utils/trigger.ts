import { Connection, RowDataPacket } from "mysql2/promise";

import { MyTables } from "./tables";

export async function checkAndCreateMySQLDatabase(
  connection: Connection
): Promise<boolean> {
  //   // Create a connection to the MySQL server
  //   let connection: Connection | undefined;

  try {
    if (typeof connection === "undefined")
      throw { msg: "MySQL Connection missing." };

    const databaseName: string = "defaultdb"; // Replace with your desired database name

    // Check if the database exists
    const [databases]: [RowDataPacket[], unknown] = await connection.query<
      RowDataPacket[]
    >("SHOW DATABASES LIKE ?", [databaseName]);

    if (databases.length === 0) {
      // Create the database if it does not exist
      await connection.query(`CREATE DATABASE ${databaseName}`);
      console.log(
        `\t\t-> MySQL Database "${databaseName}" created successfully.`
      );
      return true;
    } else {
      console.log(`\t\t-> MySQL Database "${databaseName}" already exists.`);
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    // Ensure the connection is closed
    if (connection) {
      await connection.end();
      console.log("MySQL Connection closed.");
    }
  }
  return false;
}

export async function createMySQLTables(connection: Connection): Promise<{
  created: number;
  table_error: string[];
}> {
  let created: number = 0;
  const table_error: string[] = [];
  try {
    if (typeof connection === "undefined")
      throw { msg: "MySQL Connection missing." };

    for (const table of MyTables) {
      const table_data = table();
      try {
        if (connection) {
          const [tables]: [RowDataPacket[], unknown] = await connection.query<
            RowDataPacket[]
          >("SHOW TABLES LIKE ?", [table_data.table_name]);

          if (tables.length === 0) {
            // Execute the SQL statement
            await connection.execute(table_data.script);
            created++;
            console.log(
              `\t\t-> MySQL Table ${table_data.table_name} created successfully.`
            );
          } else {
            console.log(
              `\t\t-> MySQL Table ${table_data.table_name} already exists.`
            );
          }
        } else {
          throw false;
        }
      } catch (error) {
        console.log("createMySQLTables", { error });
        table_error.push(table_data.table_name);
      }
    }

    return { created, table_error };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  } finally {
    // Ensure the connection is closed
    if (connection) {
      await connection.end();
      console.log("MySQL Connection closed.");
    }
  }
}
