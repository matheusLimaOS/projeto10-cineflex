import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Sessao from './Sessao'
import Footer from "./Footer";
import { useParams } from "react-router-dom";

export default function Sessoes(props) {
    let {idFilme} = useParams();
    let [sessoes,setSessoes] = useState(
        {
            days:[],
            title:'',
            posterURL:''
        }
    );
    useEffect(()=>{
        let promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        
        promise.then((res)=>{
            setSessoes(res.data);
        })
        promise.catch((error)=>{
            console.log(error.response.data)
        })

    },[idFilme])

    return (
        <ContainerSessoes>
            <SubTitulo>
                <h2>
                    Selecione a sessão
                </h2>
            </SubTitulo>
            <div>
                {
                    sessoes.days.map((sessao)=>{
                        return <Sessao key={sessao.id} sessao={sessao}/>
                    })
                }
            </div>
            <Footer poster={sessoes.posterURL} title={sessoes.title}/>
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