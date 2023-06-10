import { useState } from "react";
import Container from "./Container";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    e.target.reset();
  };
  const handleCleanUp = () => {
    setInputValue({
      nombre: "",
      apellido: "",
      correo: "",
      password: "",
    });
  };

  const childProps = {
    inputValue,
    setInputValue,
    handleSubmit,
    handleCleanUp
  };

  return <Container {...childProps} />;
};

export default FormComponent;
