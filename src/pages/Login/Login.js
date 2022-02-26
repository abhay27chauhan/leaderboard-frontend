import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

function Login() {
  const history = useHistory();
  const [userId, setUserId] = useState("");

  const submission = () => {
    const queryParams = new URLSearchParams();
    if (userId) {
      queryParams.append("currentUser", userId);
      history.push({
        pathname: "/leaderboard",
        search: queryParams.toString(),
      });
    } else {
      history.push({
        pathname: "/leaderboard",
        search: "",
      });
    }
  };

  const updatePoints = () => {
    const queryParams = new URLSearchParams();
    if (userId) {
      queryParams.append("user", userId);
      history.push({
        pathname: "/update-points",
        search: queryParams.toString(),
      });
    } else {
      history.push({
        pathname: "/update-points",
        search: "",
      });
    }
  };

  return (
    <CustomStack>
      <Heading size="lg">Enter The User Id</Heading>
      <Stack direction="row">
        <Input
          placeholder="user id"
          width="70%"
          id="userId"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button colorScheme="pink" onClick={submission}>
          Check Rank
        </Button>
        <Button colorScheme="blue" onClick={updatePoints}>
          Update Points
        </Button>
      </Stack>
    </CustomStack>
  );
}

const CustomStack = styled(Stack)`
  width: 50%;
  margin: 200px auto;
`;

export default Login;
