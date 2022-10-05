import styled from "styled-components";

export default function Header() {
    return (
        <ContainerHeader>
            <h1>
                CINEFLEX
            </h1>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
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