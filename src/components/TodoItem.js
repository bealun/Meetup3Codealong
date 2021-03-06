/* eslint-disable camelcase */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js";

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector((store) => store.todos.list.items[itemIndex]);

  const dispatch = useDispatch();

  const onRemoveClicked = (e) => {
    // Dispatch the remove todo event for this item
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    );
  };

  const handleOnChange = (e) => {
    // Change the value of done for this item
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    );
  };

  return (
    <div className={`todo-item ${item.done ? "done" : ""}`}>
      <input
        type="checkbox"
        onChange={handleOnChange}
        className="todo-item-check"
        checked={item.done ? "checked" : ""}
      ></input>
      <span className="todo-item-description">{item.description}</span>
      <a className="todo-item-remove" onClick={onRemoveClicked}>
        [Remove]
      </a>
    </div>
  );
};
