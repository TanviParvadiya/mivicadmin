import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import axios from "axios";
import Input from "./common/input";
const StudentForm = () => {
  // set State value
  const [data, setData] = useState({
    name: "",
    fees: "",
    class: "",
    create_date: Date.now(),
    status: 1,
  });
  const [errors, setErrors] = useState({});

  // get params
  const { studentId } = useParams();
  let navigate = useNavigate();
  // validation schema
  var schema = {
    id: Joi.number().integer(),
    name: Joi.string().required().label("Name"),
    fees: Joi.number().integer().required().label("Fees"),
    class: Joi.string().required().label("Class"),
    create_date: Joi.date(),
    status: Joi.number().integer(),
  };

  //validate form
  const validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(data, schema, option);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  //validate property
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema1 = { [name]: schema[name] };
    const { error } = Joi.validate(obj, schema1);
    return error ? error.details[0].message : null;
  };

  //handle change event
  const handleChange = ({ currentTarget: input }) => {
    const _errors = { ...errors };
    const errorMessage = validateProperty(input);

    if (errorMessage) _errors[input.name] = errorMessage;
    else delete _errors[input.name];

    const _data = { ...data };
    _data[input.name] = input.value;
    setData(_data);
    setErrors(_errors);
  };

  //handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    const _errors = validate();

    setErrors(_errors || {});
    if (_errors) return;

    // call the server
    if (!studentId) {
      console.log("add");
      onCreate();
    } else {
      onUpdate();
    }
  };

  const onCreate = async () => {
    try {
      // const result = await axios.post("https://jobick.com/demo_api/students", {
      //   ...data,
      // });
      toast.success("Record Added Successfully");
      navigate("/ecommerce/product-list", { replace: true });
    } catch (errors) {
      toast.error(errors.message);
    }
  };

  const onUpdate = async () => {
    try {
      // const result = await axios.put("https://jobick.com/demo_api/students", {
      //   ...data,
      // });
      toast.success("Record Updated Successfully");
      navigate("/students", { replace: true });
    } catch (errors) {
      toast.error(errors.message);
    }
  };

  useEffect(() => {
    fetchData();
  });

  //Fetch Data from Server
  const fetchData = async () => {
    // get the data from the api
    const result = await axios.get(
      `https://jobick.com/demo_api/students/${studentId}`
    );
    setData(result.data);
  };
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <Input
        name="name"
        value={data.name}
        label="Name"
        onChange={handleChange}
        error={errors.name}
      />
      <Input
        name="fees"
        value={data.fees}
        label="Fees"
        onChange={handleChange}
        error={errors.fees}
      />
      <Input
        name="class"
        value={data.class}
        label="Class"
        onChange={handleChange}
        error={errors.class}
      />

      <button className="btn btn-primary mt-5">
        {studentId ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default StudentForm;
