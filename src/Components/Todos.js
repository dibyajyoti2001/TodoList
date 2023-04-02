import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function todos({ todos, setTodos, setEditTodo }) {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div style={{ display: "flex" }}>
          <Box
            key={todo.id}
            sx={{
              marginTop: "10px",
              padding: "5px",
              paddingLeft: "10px",
              border: "1px solid #d500f9",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            <Typography variant="p" onChange={(e) => e.preventDefault()}>
              {todo.title}
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{ margin: "3px", marginTop: "10px", color: "yellow" }}
            onClick={() => handleEdit(todo)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            sx={{ margin: "3px", marginTop: "10px", color: "red" }}
            onClick={() => handleDelete(todo)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </>
  );
}
