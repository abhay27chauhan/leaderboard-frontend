import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";

import Navbar from "components/Navbar/Navbar";
import Login from "pages/Login/Login";
import Leaderboard from "pages/Leaderboard/Leaderboard";
import UpdatePoints from "pages/UpdatePoints/UpdatePoints";

function App() {
  return (
    <Router>
      <Toaster
        toastOptions={{
          duration: 4000,
          position: "bottom-left",
          style: { marginBottom: "30px", marginLeft: "30px" },
        }}
      />
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
