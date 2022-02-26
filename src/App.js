import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "components/Navbar/Navbar";
import Login from "pages/Login/Login";
import Leaderboard from "pages/Leaderboard/Leaderboard";
import UpdatePoints from "pages/UpdatePoints/UpdatePoints";

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/update-points">
            <UpdatePoints />
          </Route>
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
