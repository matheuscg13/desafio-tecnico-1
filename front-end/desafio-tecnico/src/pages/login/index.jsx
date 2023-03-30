// @ts-nocheck
import StyledLoginPage from "./style.js";
import StyledForm from "../../components/form.js";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts.js";

const LoginPage = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Digite um email"),
    password: yup.string().required(""),
  });

  const { login } = useContext(AuthContext);
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledLoginPage>
      <h1>Login</h1>
      <StyledForm onSubmit={handleSubmit(login)}>
        <label htmlFor="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="email"
          placeholder="email"
          {...register("email")}
        />
        <label htmlFor="inputPassword">Email</label>
        <input
          id="inputPassword"
          type="password"
          placeholder="senha"
          {...register("password")}
        />
        <button type="submit">Login</button>
        <p>Ainda não possuí uma conta?</p>
        <Link to="registro">Cadastre-se</Link>
      </StyledForm>
    </StyledLoginPage>
  );
};

export default LoginPage;
