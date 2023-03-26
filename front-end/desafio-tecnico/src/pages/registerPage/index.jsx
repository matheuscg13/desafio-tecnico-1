// @ts-nocheck
import StyledForm from "../../components/form.js";
import StyledLoginPage from "../login/style.ts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <StyledLoginPage>
      <h1>Crie sua conta</h1>
      <StyledForm>
        <label htmlFor="inputName">Nome Completo</label>
        <input id="inputName" type="text" placeholder="nome completo" />
        <label htmlFor="inputEmail">Email</label>
        <input id="inputEmail" type="text" placeholder="email" />
        <label htmlFor="inputNumber">Número de telefone</label>
        <input id="inputNumber" type="text" placeholder="número de telefone" />
        <label htmlFor="inputPassword">Senha</label>
        <input id="inputPassword" type="text" placeholder="senha" />
        <Link to="/">Login</Link>
      </StyledForm>
    </StyledLoginPage>
  );
};

export default RegisterPage;
