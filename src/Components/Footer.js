import styled from "styled-components";

export default function Footer(props) {
    return (
        <ContainerFooter>
            <ContainerPoster>
                <img src={props.poster} alt={props.title}></img>
            </ContainerPoster>
            <ContainerFIlme>
                <h1>{props.title}</h1>
                {
                    props.sessao === undefined ? '' : <h1>{props.sessao}</h1> 
                }
            </ContainerFIlme>
        </ContainerFooter>
    )
}
const ContainerFIlme = styled.div`
`
const ContainerPoster = styled.div`
    background: white;
    width: 48px;
    height: 72px;
    padding: 8px;
    margin-left: 10px;
    margin-right: 15px;
    img{
        width: 48px;
        height: 72px;
    }
`
const ContainerFooter = styled.div`
    position: fixed;
    height: 120px;
    display: flex;
    align-items: center;
    width:100vw;
    left: 0px;
    bottom: 0px;
    background: #C3CFD9;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
    }
`