import React from "react";
import { useHistory } from "react-router-dom";

function UpdatePoints() {
  const history = useHistory();
  const queryParams = new URLSearchParams(history.location?.search);
  const userId = queryParams.get("user");
  const body = {
    userId,
  };
  console.log(body);
  return <div>UpdatePoints</div>;
}

export default UpdatePoints;
