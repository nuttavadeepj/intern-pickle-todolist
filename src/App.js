import React, { Fragment } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TodoCard from "./components/TodoCard";
import "./App.css";

const useStyles = makeStyles({
  header: {
    fontSize: "22px",
    fontWeight: "600",
    backgroundColor: "#00D0AA",
    justifyContent: "center",
    letterSpacing: "4px",
  },
  appbar: {
    marginBottom: "4%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="name">Nuttavadee Autsavapanakit</div>
      <div className="App">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar className={classes.header}>Pickle TodoList</Toolbar>
        </AppBar>
        <TodoCard />
      </div>
    </Fragment>
  );
}

export default App;
