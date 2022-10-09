import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Filme from "./Filme";

export default function PaginaInicial() {
    const [filmes,setFilmes] = useState([]);

    useEffect(()=>{
        let promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
        
        promise.then((res)=>{
            setFilmes(res.data);
        })
        promise.catch((error)=>{
            console.log(error.response.data)
        })

    },[])
    
    return (
        <ContainerPaginaInicial>
            <SubTitulo>
                <h2>
                    Selecione o filme
                </h2>
            </SubTitulo>
            <ContainerFIlmes>
                {
                    filmes.map((filme)=>{
                        return <Filme filme={filme} key={filme.id}/>
                    })
                }
            </ContainerFIlmes>
        </ContainerPaginaInicial>
    )
}

const ContainerPaginaInicial = styled.div`
    width:100vw;
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

const ContainerFIlmes = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
`
