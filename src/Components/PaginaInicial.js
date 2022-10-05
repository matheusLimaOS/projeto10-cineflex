import styled from "styled-components";

export default function PaginaInicial() {
    return (
        <ContainerPaginaInicial>
            <SubTitulo>
                <h2>
                    Selecione o filme
                </h2>
            </SubTitulo>
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
    align-itens: center;
    h2{
        font-family: Roboto;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        text-justify: center;
    }
`

