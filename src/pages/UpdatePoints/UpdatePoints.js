import React, { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Heading, Input, Stack } from "@chakra-ui/react";
import styled from "styled-components";

import { updateUsersPoints } from "api/updateUsersPoint";
import ButtonWithLoading from "components/ButtonWithLoading/ButtonWithLoading";

function UpdatePoints() {
  const history = useHistory();
  const [points, setPoints] = useState("");
  const [loading, setLoading] = useState(false);
  const queryParams = new URLSearchParams(history.location?.search);
  const userId = queryParams.get("user");
  const body = useMemo(
    () => ({
      userId: userId,
      points: points,
    }),
    [points],
  );

  const updatePoints = async (body) => {
    setLoading(true);
    await updateUsersPoints(body);
    setLoading(false);
    setPoints("");
  };
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
        <ButtonWithLoading
          isDisabled={!userId || !points}
          loading={loading}
          colorScheme="blue"
          handleClick={() => updatePoints(body)}
          buttonText="Update Points"
        />
      </Stack>
    </CustomStack>
  );
}

const CustomStack = styled(Stack)`
  width: 50%;
  margin: 200px auto;
`;

export default UpdatePoints;
