export default function Form(props) {
    return (
        <>
            <label>
                Nome do comprador do assento {props.selecionado}:
            </label>
            <input data-identifier="buyer-name-input" type='text' name={props.selecionado+'nome'} placeholder="Digite seu nome..." required />
            <label>
                CPF do comprador do assento {props.selecionado}:
            </label>
            <input data-identifier="buyer-cpf-input" type='number' name={props.selecionado+'cpf'} onChange={handleChange} placeholder="Digite seu CPF..." required />
        </>
    )
}

function handleChange(e){
    if(e.target.value.length > 11){
        e.target.value = e.target.value.slice(0,11);
    }
}
