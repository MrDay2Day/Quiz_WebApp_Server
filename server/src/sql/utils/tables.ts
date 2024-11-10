function createLeaderBoardTableSQL() {
  const table_name = "leaderboard";
  const script = `
CREATE TABLE ${table_name} (
  ID INT AUTO_INCREMENT PRIMARY KEY,
  NAME VARCHAR(150) NOT NULL UNIQUE,
  CORRECT INT NOT NULL,
  INCORRECT INT NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;
  return { table_name, script };
}
export const MyTables = [createLeaderBoardTableSQL];
