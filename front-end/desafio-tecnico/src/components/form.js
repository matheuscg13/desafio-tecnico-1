import styled from "styled-components";

const StyledForm = styled.form`
    background-color: #212529;
    height: max-content;
    width: 70%;
    max-width: 369px;
    left: 535px;
    top: 133px;
    border-radius: 4px;
    padding: 42px 22px 42px 22px;
    display: flex;
    flex-direction: column;
    gap: 22px;

    h3{
        color: white;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;


    }

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

    label{
        
        color: #F8F9FA;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;

    }

    button{
        
        height: 48px;
        background: #FF577F;
        border: 1.2px solid #FF577F;
        border-radius: 4px;
        color: white;

    }

    p{

        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: #868E96;
        text-align: center;
    }

    a{
        text-decoration: none;
        width: 100%;
        max-width: 85%;
        text-align: center;
        color: #F8F9FA;
        background-color: #868E96;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 22.3336px;
        height: 48px;
        border: 1.2182px solid #868E96;
        border-radius: 4px;
    }

    select{
        max-width: 100%;
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

`

export default StyledForm;