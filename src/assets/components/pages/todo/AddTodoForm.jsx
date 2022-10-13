import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
class AddTodoForm extends Component {
  inputRef = React.createRef();
  errorRef = React.createRef();
  handleSubmit = (e) => {
    console.log(this.inputRef.current.value);
    e.preventDefault();
    if (this.inputRef.current.value === "") {
      this.errorRef.current.classList.add("active");
      return null;
    }
    this.errorRef.current.classList.remove("active");

    this.props.addToList(this.inputRef.current.value);
    e.currentTarget.reset();
  };
  render() {
    return (
      <>
        <div className="todo-input">
          <div className="todo-subtitle">
            <div className="todo-svg-bg bg-primary">
              <PostAddIcon />
            </div>
            <h6>ADD ITEM</h6>
          </div>
          <form onSubmit={this.handleSubmit} style={{ display: "flex" }}>
            <Input
              placeholder="What do you want to do?"
              inputProps={{
                "aria-label": "Description",
              }}
              onChange={this.handleChange}
              inputRef={this.inputRef}
              style={{ width: "90%" }}
            />

            <Button
              type="submit"
              variant="contained"
              className="darkbluebtn"
              style={{ width: "10%" }}
            >
              Add
            </Button>
          </form>

          <p ref={this.errorRef} className="error">
              Error, must enter a value!
            </p>
        </div>
      </>
    );
  }
}

export default AddTodoForm;
