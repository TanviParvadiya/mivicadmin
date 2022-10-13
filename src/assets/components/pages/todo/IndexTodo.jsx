import { Component, Fragment } from "react";
import AddTodoForm from "./AddTodoForm";
import List from "./List";
import {  Grid } from "@material-ui/core";
import "./todo.css";
class IndexTodo extends Component {
  state = {
    list: {},
  };
  addToList = (todo) => {
    let list = { ...this.state.list };
    list[`todo${Date.now()}`] = {
      todo: todo,
      status: "active",
    };

    this.setState({ list });
  };
  deleteTodo = (key) => {
    let list = { ...this.state.list };
    list[key] = null;

    this.setState({ list });
  };
  updateTodo = (key) => {
    let list = { ...this.state.list };
    list[key]["status"] = "editing";

    this.setState({ list });
  };
  saveTodo = (key, todo) => {
    let list = { ...this.state.list };
    list[key] = {
      todo: todo,
      status: "active",
    };

    this.setState({ list });
  };
  render() {
    return (
      <>
        <div className="theme-box-shadow">
          <h6 className="defultheading">To Do List</h6>
          <Fragment>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <AddTodoForm addToList={this.addToList} />
              </Grid>
              <Grid item xs={12}>
                <List
                  deleteTodo={this.deleteTodo}
                  list={this.state.list}
                  updateTodo={this.updateTodo}
                  saveTodo={this.saveTodo}
                />
              </Grid>
            </Grid>
          </Fragment>
        </div>
      </>
    );
  }
}

export default IndexTodo;
