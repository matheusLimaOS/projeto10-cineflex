import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Sessao(props) {
    return (
        <StyledSessao>
            <h1 data-identifier="session-date">{`${props.sessao.weekday} - ${props.sessao.date}`}</h1>
            {
                props.sessao.showtimes.map((showtime)=>{
                    return <Link key={showtime.id} to={'/assentos/'+showtime.id}>
                        <button data-identifier="hour-minute-btn">
                            {showtime.name}
                        </button>
                    </Link>
                })
            }
        </StyledSessao>
    )
}

const StyledSessao = styled.div`
    margin-bottom: 20px;
    margin-left: 25px;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        
        color: #293845;  
    }
    button{
        margin-top: 25px;
        margin-right: 10px;
        width: 85px;
        height: 50px;
        background: #E8833A;
        border-radius: 3px;
        color: white;
        border: 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
    }
`
