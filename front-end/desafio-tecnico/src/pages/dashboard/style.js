import styled from "styled-components";

export const StyledDashBoard = styled.div`
    background-color: #121214;
    color: white;
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;


    button{
        cursor: pointer;
    }

    p{
        margin: 0;
    }

    h3{
        margin: 0;
    }

    .userContainer{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        background-color: #212529;
        border: 2px solid #F8F9FA;
        border-radius: 4px;
        padding: 42px 22px 42px 22px;
        width: min-content;
        margin-top: 20px;
        margin-left: 20px;
        justify-content: space-between;
        font-weight: 500;
        font-size: 15px;
    }

    .header{
        display: flex;
        max-width: 80vw;
    }

    .registerContactForm{
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 20px;
        background-color: #212529;
        border: 2px solid #F8F9FA;
        border-radius: 4px;
        padding: 42px 22px 42px 22px;
        width: min-content;
        margin-top: 20px;
        margin-left: 20px;

        input{
        max-width: 90%;
        height: 38px;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px 16.2426px;
        gap: 10.15px;
        width: 329.93px;
        height: 48px;
        background: #343B41;
        border: 2px solid #F8F9FA;
        border-radius: 4px;
        color: white;
        outline: none;
    }

    .pinkButton{
            margin: 0;
        }
}

    .contactsContainer{
        padding: 0;
        display: flex;
        margin: 0;

        li{
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
            background-color: #212529;
            border: 2px solid #F8F9FA;
            border-radius: 4px;
            padding: 42px 22px 42px 22px;
            width: 15vw;
            margin-top: 20px;
            margin-left: 20px;
            justify-content: space-between;
            font-weight: 500;
            font-size: 15px;
            
            p{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            button{
                background-color: #212529;
                border: none;
                color: white;
                font-weight: 1000;
            }
        }

        
    }


    .pinkButton{
        
        height: 48px;
        background: #FF577F;
        border: 1.2px solid #FF577F;
        border-radius: 4px;
        color: white;
        margin-left: 20px;
        margin-top: 20px;
    }

    @media (max-width: 838px) {
        overflow-x: scroll;



        .userContainer{
            width: 30vw;
            p{
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }   
        
        .registerContactForm{
            width: 30vw;
            margin-right: 30px;
            margin-left: 5px;

            input{
                max-width: 80%;
            }
        }
    }
`