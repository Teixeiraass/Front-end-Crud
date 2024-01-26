import React, {useState, useEffect} from "react";
import api from "../../../service/Api";

import "../../../styles/home/modal/ModalCreateEmployeerStyle.css"

export default function ModalCreateEmployeer({ closeModal }){
    const [values, setValues] = useState()
    
    const handleChange = (value) => {
        setValues(prevValue => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }))
    } 
      
    const handleClose = () => {
        closeModal(false)
    }

    const handleSubmit = () => {
        api.post("/management/api", {
            name: values.nome,
            salary: values.salario,
            dataEntrada: values.dataEntrada,
            office: values.cargo,
            image: values.imageUrl,
            observacoes: values.observacao
        })
        .then((response) => {
            console.log("Enviado com sucesso")
        })
    }

    return(
        <div className="fundo-modal">
            <div className="modal-create">
                <div className="button-create-modal">
                    <button onClick={handleClose}>Fechar</button>
                </div>
                <div className="itens-create-modal">
                    <h1>Adicione um novo funcionario</h1>
                    <form className="formulario-cadastro" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nome" name="nome" onChange={handleChange}/>  
                        <input type="number" step={0.01} placeholder="Salario" name="salario" onChange={handleChange}/>              
                        <input type="text" placeholder="Cargo" name="cargo" onChange={handleChange}/>   
                        <input type="date" placeholder="Data de entrada" name="dataEntrada" onChange={handleChange}/>
                        <input type="text" placeholder="Observações" name="observacao" onChange={handleChange}/>
                        <input type="text" placeholder="ImageUrl" name="imageUrl" onChange={handleChange}/>
                        <div className="button-enviar">
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}