import React, { Component } from "react";
import { Delete, Build } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

class Todo extends Component {
  state = {
    fade: false,
  };

  gridRef = React.createRef();

  deleteTodo = () => {
    const fade = true;
    this.setState({ fade });

    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 500);
    });

    promise.then(() => this.props.deleteTodo(this.props.index));
    console.log(this.state);
  };

  render() {
    const gridClass = this.state.fade ? "fade-out" : "";

    return (
      <div className="inputedtodo">
        <Grid
          xs={12}
          className={`${gridClass}`}
          item
          key={this.props.index}
          ref={this.gridRef}
        >
          <div className="todo-flex">
            <span>{this.props.todo}</span>
            <div>
              <IconButton
                color="primary"
                aria-label="Edit"
                onClick={() => this.props.updateTodo(this.props.index)}
              >
                <Build fontSize="small" />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="Delete"
                onClick={this.deleteTodo}
              >
                <Delete fontSize="small" />
              </IconButton>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Todo;
