// @ts-nocheck

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContexts";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Navigate, useNavigate } from "react-router-dom";
import { StyledDashBoard } from "./style";

const DashBoard = () => {
  const { loggedUser, contacts, createContact, deleteContact } =
    useContext(AuthContext);
  const userJSON = localStorage.getItem("LoggedUserJSON");
  const userOBJ = JSON.parse(userJSON);
  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.string().required(),
  });
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <StyledDashBoard>
        <div className="header">
          <div className="userContainer">
            <h3>Seus dados</h3>
            <div>
              <span>nome:</span>
              <p>{userOBJ.name}</p>
            </div>
            <div>
              <span>email:</span>
              <p>{userOBJ.email}</p>
            </div>
            <div>
              <span>número:</span>
              <p>{userOBJ.number}</p>
            </div>
          </div>
          <form
            className="registerContactForm"
            onSubmit={handleSubmit(createContact)}
          >
            <h3>Criar Contato</h3>
            <input type="text" placeholder="nome" {...register("name")} />
            <input type="email" placeholder="email" {...register("email")} />
            <input type="text" placeholder="numero" {...register("number")} />
            <button
              className="pinkButton"
              type="submit"
              onClick={(e) => e.preventDefault}
            >
              Criar contato
            </button>
          </form>
        </div>
        <button className="pinkButton" onClick={(e) => navigate("/editar")}>
          Editar contatos
        </button>
        <ul className="contactsContainer">
          {contacts.map((contact, i) => {
            return (
              <li key={i}>
                <div>
                  <span>nome:</span>
                  <p>{contact.name}</p>
                </div>
                <div>
                  <span>email:</span>
                  <p>{contact.email}</p>
                </div>
                <div>
                  <span>número:</span>
                  <p>{contact.number}</p>
                </div>
                <button
                  onClick={(e) => {
                    deleteContact(contact.id);
                  }}
                >
                  excluir
                </button>
              </li>
            );
          })}
        </ul>
      </StyledDashBoard>
    </>
  );
};

export default DashBoard;
