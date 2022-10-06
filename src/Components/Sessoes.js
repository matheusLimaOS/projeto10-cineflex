import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Sessao from './Sessao'

export default function Sessoes() {
    let [sessoes,setSessoes] = useState(
        {
            days:[]
        }
    );
    useEffect(()=>{
        let promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${2}/showtimes`);
        
        promise.then((res)=>{
            setSessoes(res.data);
        })
        promise.catch((error)=>{
            console.log(error.response.data)
        })

    },[])

    return (
        <>
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
        </>
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
