import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
    const navigate = useNavigate();
    return (
        <ContainerHeader>
            <Button disable={window.location.pathname==='/' ? 'none': window.location.pathname==='/sucesso' ? 'none' : 'block'} onClick={()=>{voltar(navigate)}}>
                    <ion-icon name="chevron-back-circle-outline"></ion-icon>
            </Button>
            <h1>
                CINEFLEX
            </h1>
        </ContainerHeader>
    )
}

function voltar(navigate){
    navigate(-1);
}

const ContainerHeader = styled.div`
    position: relative;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content:center;
    width:100vw;
    background: #C3CFD9;
    h1{
        color: #E8833A;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
    }
`
const Button = styled.div`
    font-size: 40px;
    color:white;
    position: absolute;
    display: ${props => props.disable};
    top: 15px;
    left: 25px;
`