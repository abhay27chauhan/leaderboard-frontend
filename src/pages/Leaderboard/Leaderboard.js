import React from "react";
import { useHistory } from "react-router-dom";

function Leaderboard() {
  const history = useHistory();
  const queryParams = new URLSearchParams(history.location?.search);
  const userId = queryParams.get("currentUser");
  const body = {
    userId,
  };
  console.log(body);
  return <div>Leaderboard</div>;
}

export default Leaderboard;
