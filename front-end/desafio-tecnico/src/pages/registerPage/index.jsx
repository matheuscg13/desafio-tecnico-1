// @ts-nocheck
import StyledForm from "../../components/form.js";
import { Link } from "react-router-dom";
import StyledRegisterPage from "./style.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts.js";

const RegisterPage = () => {
  const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    number: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserSchema),
  });

  const { registerUser } = useContext(AuthContext);

  return (
    <StyledRegisterPage>
      <h1>Crie sua conta</h1>
      <StyledForm onSubmit={handleSubmit(registerUser)}>
        <label htmlFor="inputName">Nome Completo</label>
        <input
          id="inputName"
          type="text"
          placeholder="nome completo"
          {...register("name")}
        />
        {/* <p>{errors.name?.message}</p> */}
        <label htmlFor="inputEmail">Email</label>
        <input
          id="inputEmail"
          type="text"
          placeholder="email"
          {...register("email")}
        />
        {/* <p>{errors.email?.message}</p> */}
        <label htmlFor="inputNumber">Número de telefone</label>
        <input
          id="inputNumber"
          type="text"
          placeholder="número de telefone"
          {...register("number")}
        />
        {/* <p>{errors.number?.message}</p> */}
        <label htmlFor="inputPassword">Senha</label>
        <input
          id="inputPassword"
          type="text"
          placeholder="senha"
          {...register("password")}
        />
        {/* <p>{errors.password?.message}</p> */}
        <button type="submit">Cadastrar</button>
        <Link to="/">Login</Link>
      </StyledForm>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
