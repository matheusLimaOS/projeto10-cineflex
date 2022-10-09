import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Sessao from './Sessao'
import Footer from "./Footer";
import { useParams } from "react-router-dom";

export default function Assentos(props) {
    let [assentos,setAssentos] = useState([]);
    let {idSessao} = useParams();

    useEffect(()=>{
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        
        promise.then((res)=>{
            setAssentos(res.data);
        })
        promise.catch((error)=>{
            console.log(error.response.data)
        })

    },[idSessao])

    return (
        <ContainerSessoes>
            <SubTitulo>
                <h2>
                    Selecione a sessão
                </h2>
            </SubTitulo>
            <div>
                {
                    assentos.days.map((assento)=>{
                        return <Sessao key={assento.id} assento={assento}/>
                    })
                }
            </div>
            <Footer sessoes={assentos} sessao={'Quinta-feira - 15:00'}/>
        </ContainerSessoes>
    )
}

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

const ContainerSessoes = styled.div`
    padding-bottom: 120px;
`