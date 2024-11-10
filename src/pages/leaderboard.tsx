import { useEffect, useState } from "react";
import { SERVER_URL } from "../exports";
import { OverLay } from "./quiz";

type Person = {
  ID: number;
  NAME: string;
  CORRECT: number;
  INCORRECT: number;
  updated_at: Date;
  created_at: Date;
};
export default function LeaderBoard({ admin = false }: { admin: boolean }) {
  const [list, setList] = useState<Person[]>([]);
  const [page, setPage] = useState(1);
  const [err, setErr] = useState("");

  useEffect(() => {
    console.log("TRIGGER");
    fetchList(1);
    setPage(1);
  }, [setList]);

  const fetchList = async (x: number) => {
    try {
      const url = `${SERVER_URL}/${admin ? "scores" : "top"}`;
      console.log(1000, { url });

      const options: RequestInit = {
        method: admin ? "POST" : "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (admin) {
        options.body = JSON.stringify({ page: x });
      }
      const resRaw = await fetch(url, options);

      const res: { valid: boolean; result: Person[] } = await resRaw.json();

      console.log({ res });

      if (res.valid) {
        setList(res.result);
      }
    } catch (error: unknown) {
      console.log({ error });
    }
  };

  const deletePerson = async (id: number) => {
    try {
      const url = `${SERVER_URL}/delete`;
      console.log(1000, { url });

      const options: RequestInit = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      };

      const resRaw = await fetch(url, options);
      const res: { valid: boolean } = await resRaw.json();

      if (!res.valid) {
        setErr("Not Delete");
      } else {
        fetchList(page);
      }
    } catch (error: unknown) {
      console.log({ error });
    }
  };

  const clearAll = async () => {
    try {
      const url = `${SERVER_URL}/clear`;

      const options: RequestInit = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const resRaw = await fetch(url, options);
      const res: { valid: boolean } = await resRaw.json();

      if (!res.valid) {
        setErr("Not Cleared");
      } else {
        fetchList(page);
      }
    } catch (error: unknown) {
      console.log({ error });
    }
  };

  return (
    <>
      {admin ? (
        <>
          <OverLay
            admin={true}
            reset={() => {
              fetchList(page);
            }}
          />
          <br />
          <button
            style={{ width: 150, margin: 5, backgroundColor: "darkred" }}
            onClick={clearAll}
          >
            Clear All
          </button>
        </>
      ) : (
        <h1>Leader Board</h1>
      )}

      <>
        <button
          style={{
            right: 60,
            position: "absolute",
            padding: 8,
            width: 40,
            top: 5,
          }}
          onClick={() => {
            fetchList(1);
            setPage(1);
          }}
        >
          R
        </button>
        <h2>Top 20</h2>
        {err ? <p>{err}</p> : null}
        {admin ? (
          <>
            <button
              disabled={page <= 1}
              style={{ margin: 5 }}
              onClick={() => {
                if (page - 1 > 0) {
                  setPage(page - 1);
                  fetchList(page - 1);
                }
              }}
            >
              Prev
            </button>
            {` ${page} `}
            <button
              disabled={list.length <= 0}
              style={{ margin: 5 }}
              onClick={() => {
                if (list.length > 0) {
                  setPage(page + 1);
                  fetchList(page + 1);
                }
              }}
            >
              Next
            </button>
          </>
        ) : null}
        {list.map((ele, index) => {
          if (index < 20) {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#000000",
                  padding: 5,
                  borderRadius: 8,
                  margin: 10,
                }}
              >
                <h2 style={{ margin: 5 }}>
                  {`${index + 1}: ${ele.NAME} `}
                  <span style={{ color: "green" }}>{ele.CORRECT}</span>/
                  <span style={{ color: "red" }}>{ele.INCORRECT}</span>
                </h2>
                {admin ? (
                  <button onClick={() => deletePerson(ele.ID)}>Delete</button>
                ) : null}
              </div>
            );
          } else {
            return null;
          }
        })}
      </>
      {list.length > 0 ? null : (
        <h3>{admin ? "No Records yet..." : "Nothing to see here..."}</h3>
      )}
    </>
  );
}
