import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import StyledRegisterPage from "../registerPage/style";
import StyledForm from "../../components/form";

export const EditPage = () => {
  const { contacts, updateContact } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    number: yup.string(),
    id: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <StyledRegisterPage>
      <h1>Editar Contatos</h1>
      <StyledForm onSubmit={handleSubmit(updateContact)}>
        <label htmlFor="inputName">Nome</label>
        <input
          id="inputName"
          type="text"
          placeholder="nome"
          {...register("name")}
        />
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          id="inputEmail"
          placeholder="email"
          {...register("email")}
        />
        <label htmlFor="inputNumber">Número</label>
        <input
          type="text"
          id="inputNumber"
          placeholder="número"
          {...register("number")}
        />
        <select {...register("id")}>
          {contacts.map((contact, i) => {
            return (
              <option key={i} value={contact.id}>
                {contact.name}
              </option>
            );
          })}
        </select>
        <button type="submit" onClick={(e) => e.preventDefault}>
          atualizar
        </button>
      </StyledForm>
    </StyledRegisterPage>
  );
};
