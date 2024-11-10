import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
//@ts-expect-error: not types for cors
import cors from "cors";
import { admin_db_pool, admin_pool } from "./sql/conn";
import {
  checkAndCreateMySQLDatabase,
  createMySQLTables,
} from "./sql/utils/trigger";
import { Connection } from "mysql2/promise";

const app = express();
const port = process.env.PORT;

async function Server() {
  try {
    const admin_sql = await admin_pool();
    await checkAndCreateMySQLDatabase(admin_sql);
    const admin_db_sql = await admin_db_pool();
    await createMySQLTables(admin_db_sql);

    app.use(
      cors({
        origin: true,
        credentials: true,
      }),
      express.urlencoded({ extended: true }),
      express.json({ limit: "100mb" })
    );

    app.post("/server/add", async (req: Request, res: Response) => {
      let conn: Connection | null = null;
      try {
        const body: { name: string; correct: number; incorrect: number } =
          req.body;
        console.log({ body });
        conn = await admin_db_pool();

        const [info] = (await conn.query(
          `insert into leaderboard(name, correct, incorrect) values(?, ?, ?)`,
          [body.name, body.correct, body.incorrect]
        )) as { insertId: number }[];

        console.log({ info });

        res.status(200).json({ valid: true });
      } catch (error) {
        console.log({ error });
        res.status(200).json({ valid: false, error });
      } finally {
        if (conn && conn.threadId) {
          await conn.end();
        }
      }
    });

    app.get("/server/clear", async (req: Request, res: Response) => {
      let conn: Connection | null = null;
      try {
        const body: { name: string; correct: number; incorrect: number } =
          req.body;
        console.log({ body });
        conn = await admin_db_pool();

        const [info] = (await conn.query(
          `delete from leaderboard`,
          []
        )) as unknown[];

        console.log({ info });

        res.status(200).json({ valid: true });
      } catch (error) {
        console.log({ error });
        res.status(200).json({ valid: false });
      } finally {
        if (conn && conn.threadId) {
          await conn.end();
        }
      }
    });

    app.get("/server/top", async (req: Request, res: Response) => {
      let conn: Connection | null = null;
      try {
        conn = await admin_db_pool();

        const [result] = (await conn.query(
          `SELECT * 
              FROM leaderboard
              ORDER BY CORRECT DESC, INCORRECT ASC
              LIMIT 20`,
          []
        )) as unknown[];

        res.status(200).json({ valid: true, result });
      } catch (error) {
        console.log({ error });
        res.status(200).json({ valid: false });
      } finally {
        if (conn && conn.threadId) {
          await conn.end();
        }
      }
    });

    app.post("/server/scores", async (req: Request, res: Response) => {
      let conn: Connection | null = null;
      try {
        const body: { page: number } = req.body;
        console.log({ body });
        conn = await admin_db_pool();

        const limit = 30;

        let pageNum = 0;
        if (body.page && body.page > 0) {
          pageNum = (body.page - 1) * limit;
        }

        const [result] = (await conn.query(
          `SELECT * 
              FROM leaderboard
              ORDER BY CORRECT DESC, INCORRECT ASC
              LIMIT ?
              OFFSET ?
              `,
          [limit, pageNum]
        )) as unknown[];

        res.status(200).json({ valid: true, result });
      } catch (error) {
        console.log({ error });
        res.status(200).json({ valid: false });
      } finally {
        if (conn && conn.threadId) {
          await conn.end();
        }
      }
    });

    app.post("/server/delete", async (req: Request, res: Response) => {
      let conn: Connection | null = null;
      try {
        const body: { id: number } = req.body;
        console.log({ body });
        conn = await admin_db_pool();

        await conn.query(
          `DELETE
              FROM leaderboard
              WHERE ID = ?
              `,
          [body.id]
        );

        res.status(200).json({ valid: true });
      } catch (error) {
        console.log({ error });
        res.status(200).json({ valid: false });
      } finally {
        if (conn && conn.threadId) {
          await conn.end();
        }
      }
    });

    app.listen(port, () => {
      console.log(`Quiz Server listening on port ${port}`);
    });
  } catch (error) {
    console.log({ error });
  }
}

Server();
