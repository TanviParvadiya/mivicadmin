import { useState, useEffect } from "react";

// ******************************
const useForm = ({ initState, callback, validatorLogin }) => {
  // const [state, setState] = useState(initState);
  const state = initState;
  const [errors, setErrors] = useState({});
  const [isSubmited, setIsSubmited] = useState(false);
  // const [countryCode, setCountryCode] = useState("");
  const countryCode = "";
  // ******************************
  useEffect(() => {
    const isValidErrors = () =>
      Object.values(errors).filter((error) => typeof error !== "undefined")
        .length > 0;
    if (isSubmited && !isValidErrors()) callback();
  }, [errors,callback,isSubmited]);

  // ******************************

  // ******************************
  const handleBlur = (e) => {
    const { name: fieldName } = e.target;
    const faildFiels = validatorLogin(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0],
    }));
  };

  // ******************************
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name: fieldName } = e.target;
    const faildFiels = validatorLogin(state, fieldName);
    setErrors(() => ({
      ...errors,
      [fieldName]: Object.values(faildFiels)[0],
    }));
    setIsSubmited(true);
  };

  return {
    handleSubmit,
    handleBlur,
    state,
    errors,
    countryCode,
  };
};

export default useForm;
