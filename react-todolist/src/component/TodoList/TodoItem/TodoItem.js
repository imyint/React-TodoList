import React from "react";

import "./TodoItem.css";

class TodoItem extends React.Component {
  render() {
    const { id, title, completed, edit } = this.props.todo;
    const { onEdit, onDelete } = this.props;
    let titleField = edit ? (
      <input
        type="text"
        value={title}
        onChange={(e) => onEdit(id, "title", e.target.value)}
      />
    ) : (
      <span
        onClick={() => onEdit(id, "completed", completed)}
        style={{ textDecoration: completed ? "line-through" : "" }}
      >
        {title}
      </span>
    );

    return (
      <li className="todoitem">
        {titleField}
        <div className="btn--container">
          <button
            className="btn btn--edit"
            onClick={() => onEdit(id, "edit", edit)}
          >
            Edit
          </button>
          <button className="btn btn--delete" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}
// id, title, completed, delete button

export default TodoItem;
