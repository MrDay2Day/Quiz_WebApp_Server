import LeaderBoard from "./leaderboard";

export default function Admin() {
  return (
    <>
      <h1>Admin</h1>

      <LeaderBoard admin={true} />
    </>
  );
}
