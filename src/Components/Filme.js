import styled from "styled-components";

export default function Filme(props) {
    console.log(props); 
    return (
        <StyledFilme>
            <img src={props.filme.posterURL} alt={props.filme}></img>
        </StyledFilme>        
    )
}

const StyledFilme = styled.div`
    heigth:210px;
    width:150px;
    padding:10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    img{
        width:100%;
        height:100%;
    }
`