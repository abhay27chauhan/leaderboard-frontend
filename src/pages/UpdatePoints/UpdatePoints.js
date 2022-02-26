import { Button, Heading, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function UpdatePoints() {
  const history = useHistory();
  const [points, setPoints] = useState("");
  const queryParams = new URLSearchParams(history.location?.search);
  const userId = queryParams.get("user");
  const body = {
    userId,
  };
  console.log(body);

  const updatePoints = () => {};
  return (
    <CustomStack>
      <Heading size="lg">Update User Points</Heading>
      <Stack direction="row">
        <Input
          placeholder="user points"
          width="70%"
          id="userId"
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
        />
        <Button disabled={!userId} colorScheme="blue" onClick={updatePoints}>
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

export default UpdatePoints;
