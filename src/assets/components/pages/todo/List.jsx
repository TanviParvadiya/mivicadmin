import React from "react";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import { Grid } from "@material-ui/core";
import ListAltIcon from "@mui/icons-material/ListAlt";
class List extends React.Component {
  renderTodo = (key) => {
    if (this.props.list[key] == null) return null;
    if (this.props.list[key]["status"] === "active") {
      return (
        <Todo
          key={key}
          index={key}
          todo={this.props.list[key]["todo"]}
          deleteTodo={this.props.deleteTodo}
          updateTodo={this.props.updateTodo}
        />
      );
    } else if (this.props.list[key]["status"] === "editing") {
      return (
        <EditTodo
          key={key}
          index={key}
          todo={this.props.list[key]["todo"]}
          saveTodo={this.props.saveTodo}
        />
      );
    }
  };
  render() {
    return (
      <>
        <div className="todo-list todo-input">
          <div className="todo-subtitle">
            <div className="todo-svg-bg bg-pink">
              <ListAltIcon />
            </div>
            <h6>TO-DO LIST</h6>
          </div>
         
          <Grid>
            {Object.keys(this.props.list).map((key) => this.renderTodo(key))}
          </Grid>
        </div>
      </>
    );
  }
}

export default List;
