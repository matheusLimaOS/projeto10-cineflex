import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import Assento from "./Assento"
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";

export default function Assentos() {
    let navigate = useNavigate();
    let { idSessao } = useParams();
    let [assentos, setAssentos] = useState(
        {
            name: '',
            movie: {
                posterURL: '',
                title: ''
            },
            day: {
                weekday: ''
            },
            seats: []
        }
    );
    let [selecionados, setSelecionados] = useState([]);

    useEffect(() => {
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);

        promise.then((res) => {
            setAssentos(res.data);
        })
        promise.catch((error) => {
            console.log(error.response.data)
        })

    }, [idSessao])

    return (
        <Container>
            <SubTitulo>
                <h2>
                    Selecione o(s) assento(s)
                </h2>
            </SubTitulo>
            <ContainerAssentos>
                <StyledAssentos>
                    {
                        assentos.seats.map((assento) => {
                            return <Assento setSelecionados={setSelecionados} selecionados={selecionados} key={assento.id} assento={assento} />
                        })
                    }
                </StyledAssentos>
            </ContainerAssentos>
            <Legenda>
                <ButtonLegenda data-identifier="seat-selected-subtitle" cor='#1AAE9E' border='#0E7D71'>
                    <button disabled />
                    <p>Selecionado</p>
                </ButtonLegenda>
                <ButtonLegenda data-identifier="seat-available-subtitle" cor="#C3CFD9" border='#7B8B99'>
                    <button disabled />
                    <p>Disponível</p>
                </ButtonLegenda>
                <ButtonLegenda data-identifier="seat-unavailable-subtitle" cor='#FBE192' border='#F7C52B'>
                    <button disabled />
                    <p>Indisponível</p>
                </ButtonLegenda>
            </Legenda>
            <Formulario onSubmit={(event) => { handleSubmit(event, selecionados, assentos, navigate) }}>
                {
                    selecionados.map((selecionado, index) => {
                        return <Form key={index} selecionado={selecionado}></Form>
                    })
                }
                <button type="submit">Reservar assento(s)</button>
            </Formulario>
            <Footer poster={assentos.movie.posterURL} title={assentos.movie.title} sessao={`${assentos.day.weekday} - ${assentos.name}`} />
        </Container>
    )
}

function handleSubmit(event, selecionados, assentos, navigate) {
    event.preventDefault();

    let i = 0;
    let ids = [];
    let compradores = [];
    let comprador = {
        idAssento: 0,
        nome: '',
        cpf: ''
    }
    if (selecionados.length === 0) {
        alert('Por favor selecione um assento disponivel.\nCaso não exista assentos disponiveis, procure em outra sessão!');
        return;
    }

    selecionados.forEach((selecionado, index) => {
        comprador = {
            idAssento: assentos.seats[selecionado - 1].id,
            nome: event.target[i].value,
            cpf: event.target[i + 1].value
        };
        compradores.push(comprador);
        ids.push(assentos.seats[selecionado - 1].id);
        i += 2;
    });


    let promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",{ids,compradores});

    promise.then((res)=>{
        navigate('/sucesso', { state: { ids, compradores, selecionados, assentos } })
    })
    promise.catch((error)=>{
        console.log(error.response.data);
    })
}


const Formulario = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 25px 0px 25px;
    input {
        width: 100%;
        height: 50px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 20px;
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }
    label{
        width: 100%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
    }

    button{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        border: 0;
        height: 45px;
        background: #E8833A;
        border-radius: 3px;
        width: 80%;
    }
`

const SubTitulo = styled.div`
    height: 110px;
    display:flex;
    justify-content: center;
    align-items: center;
    h2{
        height: 25px;
        display:block;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;   
    }
`

const Container = styled.div`
    display: flex;
    align-itens: center;
    justify-content: center;
    padding-bottom: 150px;
    flex-direction: column;
`
const Legenda = styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: center;
    button:nth-child(1){
        width: 25px;
        height: 25px;
        background: #1AAE9E;
        border: 1px solid #0E7D71;
        border-radius: 17px;
    }
`
const ContainerAssentos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const StyledAssentos = styled.div`
    margin: 0 25px;
    display: grid;
    grid-template-columns: repeat(10,26px);
    grid-column-gap: 8px;
    grid-row-gap: 15px;
`
const ButtonLegenda = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    button:nth-child(1){
        width: 25px;
        height: 25px;
        background: ${props => props.cor};
        border: 1px solid ${props => props.border};
        margin-bottom: 10px;
        border-radius: 17px;
    }
`
