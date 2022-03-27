import React from "react";
import { Card, CardContent } from "@mui/material";

function Result({ total, inputValue, list, sum, text }) {
  return (
    <Card className="result-card ">
      <b>Implementation Result</b>
      <CardContent>
        {total !== total || typeof total == "undefined"
          ? null
          : "Total sum is: " + total}
        <div> {list.length === 0 ? null : "Concat all Todos: " + list}</div>
        <div>
          {inputValue.length === 0
            ? null
            : "Sum of all Todos that is a number: " + sum}
        </div>
        <div>
          {text.length === 0 ? null : "Concat all string in Todos: " + text}
        </div>
      </CardContent>
    </Card>
  );
}

export default Result;
