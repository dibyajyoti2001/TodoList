import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Todos from "./Todos";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const updateTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id);
    }
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            border: "1px solid white",
            borderRadius: "5px",
            width: "45%",
            padding: "10px",
            boxShadow: "0px 1px 2px 2px #7c4dff",
          }}
        >
          <Typography variant="h6" textAlign="center">
            TodoList
          </Typography>
          <div style={{ display: "flex" }}>
            <TextField
              size="small"
              placeholder="Enter a todo"
              color="secondary"
              focused
              inputProps={{ style: { color: "white" } }}
              sx={{
                marginTop: "2%",
                width: "100%",
              }}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                marginLeft: "5px",
                marginTop: "10px",
                height: "40px",
                backgroundColor: "#9500ae",
                ":hover": {
                  backgroundColor: "#9500ae",
                },
              }}
              onClick={handleSubmit}
            >
              {editTodo ? "OK" : "Add"}
            </Button>
          </div>
          <Todos todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </Box>
      </Container>
    </>
  );
}
