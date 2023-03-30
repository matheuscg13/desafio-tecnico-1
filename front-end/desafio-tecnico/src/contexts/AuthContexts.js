import {
    createContext,
    useEffect,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import React from "react";



export const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {

    // const [modalIsOpen, setModalIsOpen] = useState(false)
    const navigate = useNavigate()
    const [loggedUser, setLoggedUser] = useState();
    const [contacts, setContacts] = useState([])
    async function login(data) {
        await api
            .post("login/", data)
            .then(async (resp) => {
                if (resp.data) {
                    toast.success("Login realizado com sucesso");

                    localStorage.setItem("@UserTokenKenzieContacts", resp.data.token);

                    const token = localStorage.getItem("@UserTokenKenzieContacts");

                    api.defaults.headers.authorization = `Bearer ${token}`;
                    const { data } = await api.get("/users/profile/");
                    setLoggedUser(data);
                    setContacts(data.listContacts)

                    navigate(`contatos/`, { replace: true });
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Usuário ou senha inválidos");
            });
    }

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@UserTokenKenzieContacts");
            if (token) {
                api.defaults.headers.authorization = `Bearer ${token}`;
                const { data } = await api.get("/users/profile/");
                const data2 = await api.get("/users/profile/");
                const data2String = JSON.stringify(data2.data)
                localStorage.setItem("LoggedUserJSON", data2String)
                setLoggedUser(data);
                setContacts(data.listContacts);
            }
        };

        loadUser()
    }, []);
    async function registerUser(data) {
        api
            .post("users/", data)
            .then((resp) => {
                if (resp.data) {
                    toast.success("Conta criada com sucesso!");
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error("Ops! Algo deu errado");
            });
    }

    async function updateContact(data) {

        try {
            for (let field in data) {
                if (data[field] === "") {
                    delete data[field];
                }
            }
            const { id } = data
            const response = await api.patch(`/contacts/${id}`, data)
            const profile = await api.get("/users/profile/");
            setContacts(profile.data.listContacts);


            toast.success("Contato atualizado com sucesso!");

        } catch (error) {
            console.error(error);

            toast.error("Ops! Algo deu errado");
        }
    }

    async function deleteContact(contactId) {
        try {
            await api.delete(`/contacts/${contactId}`);

            const profile = await api.get("/users/profile/");

            setContacts(profile.data.listContacts);

            toast.success("Contato deletado com sucesso!");
        } catch (error) {
            console.error(error);

            toast.error("Ops! Algo deu errado");
        }
    }

    async function createContact(data) {

        try {
            await api.post("/contacts", data);

            const profile = await api.get("/users/profile/");
            setContacts(profile.data.listContacts);


            toast.success("Contato criado com sucesso!");
        } catch (error) {
            console.error(error);

            toast.error("Ops! Algo deu errado");
        }
    }

    return (
        <AuthContext.Provider
            value={{
                login,
                contacts,
                setContacts,
                loggedUser,
                setLoggedUser,
                registerUser,
                // modalIsOpen,
                // setModalIsOpen,
                createContact,
                deleteContact,
                updateContact


            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

