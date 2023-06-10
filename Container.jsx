/* eslint-disable react/prop-types */
import {
  ParentComponent,
  ButtonContainer,
  Button,
  LogoContainer,
  Image,
  Form,
  Input,
} from "./style";
import Logo from "../assets/Form_Logo.png";

const Container = ({
  inputValue,
  setInputValue,
  handleSubmit,
  handleCleanUp,
}) => {
  return (
    <div>
      <ParentComponent>
        <LogoContainer>
          <Image src={Logo} alt="form_logo" />
        </LogoContainer>
        <span> Registrese para mas información </span>
        <Form id="form_registro" onSubmit={handleSubmit}>
          <Input
            onChange={(e) =>
              setInputValue({ ...inputValue, nombre: e.target.value })
            }
            placeholder="nombre"
            fontColor="red"
          />
          <Input
            onChange={(e) =>
              setInputValue({ ...inputValue, apellido: e.target.value })
            }
            placeholder="apellido"
            fontColor="blue"
          />
          <Input
            onChange={(e) =>
              setInputValue({ ...inputValue, correo: e.target.value })
            }
            placeholder="correo"
            fontColor="green"
          />
          <Input
            onChange={(e) =>
              setInputValue({ ...inputValue, password: e.target.value })
            }
            placeholder="password"
            fontColor="purple"
            type="password"
          />
        </Form>
        <ButtonContainer>
          <Button onClick={handleCleanUp}>Cancelar</Button>
          <Button form="form_registro" type="submit" main={true}>
            Enviar
          </Button>
        </ButtonContainer>
      </ParentComponent>
    </div>
  );
};

export default Container;
