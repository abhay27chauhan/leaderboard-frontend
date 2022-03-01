import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Heading,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import useFetch from "Hooks/useFetch/useFetch";
import styled from "styled-components";
import useHasSearchedUser from "Hooks/useHasSearchedUser/useHasSearchedUser";
import Pagination from "components/Pagination/Pagination";

function Leaderboard() {
  const history = useHistory();
  const [pageNumber, setPageNumber] = useState(1);
  const queryParams = new URLSearchParams(history.location?.search);
  const userId = queryParams.get("currentUser");
  const [result, loading, error] = useFetch(pageNumber, userId);
  const hasSearchedUser = useHasSearchedUser(result?.data);

  return loading ? (
    <StyledSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  ) : error ? (
    <StyledStack>
      <Stack>
        <Heading>Some Error Occured. Please try Again after sometime</Heading>
        <Button
          colorScheme="blue"
          width="fit-content"
          onClick={() => history.push("/login")}
        >
          Back To Login
        </Button>
      </Stack>
    </StyledStack>
  ) : result ? (
    <TableContainer>
      <Pagination
        className="pagination-bar"
        currentPage={Number(pageNumber)}
        totalCount={Number(result.total)}
        pageSize={10}
        onPageChange={(page) => setPageNumber(page)}
      />
      <Table size="md" variant="simple">
        <Thead>
          <Tr>
            <Th>Rank</Th>
            <Th>Name</Th>
            <Th isNumeric>Points</Th>
          </Tr>
        </Thead>
        <Tbody>
          {result.data.map((obj, i) => (
            <StyledTr
              key={i}
              backColor={obj.isSearchedUser ? "#c6ebc1" : undefined}
            >
              <Td>{obj.rank}</Td>
              <Td>{obj.name}</Td>
              <Td isNumeric>{obj.points}</Td>
            </StyledTr>
          ))}
          {!hasSearchedUser && result.currentUserObject && (
            <StyledTr backColor="#c6ebc1">
              <Td>{result.currentUserObject.rank}</Td>
              <Td>{result.currentUserObject.name}</Td>
              <Td isNumeric>{result.currentUserObject.points}</Td>
            </StyledTr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    ""
  );
}

const StyledSpinner = styled(Spinner)`
  position: absolute;
  left: 50%;
  top: 300px;
`;

const TableContainer = styled(Stack)`
  width: 83%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 10%);
`;

const StyledStack = styled(Stack)`
  display: grid;
  place-items: center;
  height: calc(100vh - 84px);

  button {
    margin: 10px auto;
  }
`;

const StyledTr = styled(Tr)`
  background-color: ${(props) => props.backColor && props.backColor};
`;

export default Leaderboard;
