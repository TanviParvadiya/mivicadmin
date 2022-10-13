import React, { Component } from "react";
import { Save } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

class EditTodo extends Component {
  inputRef = React.createRef();
  render() {
    return (
      <>
        <Grid xs={12} item key={this.props.index}>
        
            <form
              onSubmit={() => {
                this.props.saveTodo(
                  this.props.index,
                  this.inputRef.current.value
                );
              }}
              style={{ display: "flex" }}
            >
              <Input
                style={{ width: "100%" }}
                defaultValue={this.props.todo}
                inputRef={this.inputRef}
              />
              <IconButton type="submit" color="primary" aria-label="Add">
                <Save fontSize="small" />
              </IconButton>
            </form>
         
        </Grid>
      </>
    );
  }
}

export default EditTodo;
