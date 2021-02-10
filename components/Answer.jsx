import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    borderColor: "#7c00ec",
    color: "#7c00ec",
    fontWeight: 600,
    marginBottom: "8px",
    "&:hover": {
      backgroundColor: "#7c00ec",
      color: "#fff",
    },
  },
});

const Answer = (props) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};

export default Answer;
