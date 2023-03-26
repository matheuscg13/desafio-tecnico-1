// @ts-nocheck
import StyledLoginPage from "./style.ts";
import StyledForm from "../../components/form.js";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <h1>Login</h1>
      <StyledForm>
        <label htmlFor="inputEmail">Email</label>
        <input id="inputEmail" type="email" placeholder="email" />
        <label htmlFor="inputPassword">Email</label>
        <input id="inputPassword" type="password" placeholder="senha" />
        <Link to="registro">Cadastre-se</Link>
      </StyledForm>
    </StyledLoginPage>
  );
};

export default LoginPage;
