import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso() {
    const location = useLocation();
    return (
        <>
            <SubTitulo>
                <h2>
                    Pedido feito com sucesso!
                </h2>
            </SubTitulo>
            {
                location.state !== null ?
                    <Container>
                        <div>
                            <h2>Filme e sessão</h2>
                            <p>{location.state.assentos.movie.title}</p>
                            <p>{location.state.assentos.day.date} - {location.state.assentos.name}</p>
                        </div>
                        <div>
                            <h2>Ingressos</h2>
                            {
                                location.state.selecionados.map((selecionado, index) => {
                                    return <p key={index}>Assento {selecionado}</p>
                                })
                            }
                        </div>
                        <div>
                            <h2>Comprador(es)</h2>
                            {
                                location.state.compradores.map((comprador, index) => {
                                    return <p key={index}>
                                        Nome: {comprador.nome}
                                        <br />
                                        CPF: {comprador.cpf}
                                    </p>
                                })
                            }
                        </div>
                        <ContainerBotao>
                            <Link to='/'>
                                <button>Voltar pra Home</button>
                            </Link>
                        </ContainerBotao>
                    </Container> : ''   
            }

        </>
    )
}

const Container = styled.div`
    margin: 0 30px;
    h2{
        margin-top: 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        display: flex;
        align-items: center;
        color: #293845;
    }

    p{
        margin-top: 7px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        display: flex;
        align-items: center;
    }
`

const ContainerBotao = styled.div`
    width: 100%;
    height: 100px;
    margin-top: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none
    }

    button{
        background: #E8833A;
        height: 42px;
        width: 80%;
        border-radius: 3px;
        border: 0;
        font-family: 'Roboto';
        font-style: normal;
        text-decoration: none
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
`

const SubTitulo = styled.div`
    height: 90px;
    display:flex;
    justify-content: center;
    align-items: center;
    h2{
        height: 25px;
        display:block;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: #247A6B;
    }
`