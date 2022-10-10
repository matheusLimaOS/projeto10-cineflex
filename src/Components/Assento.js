import styled from "styled-components";

export default function Assento(props) {

    return (
        <>
            <StyledAssento 
                cor={props.assento.isAvailable ? props.selecionados.includes(Number(props.assento.name)) ? '#1AAE9E' : '#C3CFD9' : '#FBE192'}
                border={props.assento.isAvailable ? props.selecionados.includes(Number(props.assento.name)) ? '#0E7D71' : '#808F9D' : '#F7C52B'}
            >
                <button onClick={()=>{handleClick(props.selecionados,props.setSelecionados,props.assento.name)}} disabled={!props.assento.isAvailable}>{props.assento.name}</button>
            </StyledAssento>
        </>
    )
}

function handleClick(selecionados,setSelecionados,assento){
    if(selecionados.includes(Number(assento))){
        let novoArray = [...selecionados]
        novoArray = novoArray.filter((selecionado)=>{
            return selecionado !== Number(assento);
        })
        setSelecionados(novoArray);
    }
    else{
        let novoArray = [...selecionados,Number(assento)];
        setSelecionados(novoArray);
    }
}

const StyledAssento = styled.div`
    width: 26px;
    height: 26px;
    button {
        width: 26px;
        height: 26px;
        background: ${props=>props.cor};
        border: 1px solid ${props=>props.border};
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content:center;
        text-align: center;
        color: black;
    }
`
