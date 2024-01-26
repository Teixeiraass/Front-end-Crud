import React, {useState, useEffect} from "react";
import api from "../../../service/Api";
import "../../../styles/home/modal/EmployeerStyle.css"
import { formatDate } from "../ListCard"; 
import DeleteButton from "../editsButtonEmployeer";

export const observacoes = (observacoes) => {
    if(observacoes != null){
        return observacoes
    }else{
        return "Nenhuma observação foi atribuida a esse funcionario!"
    }
}

function Employeer({id, closeModal}) {
    const [itemId, setItemId] = useState([]);

    useEffect(() => {
        api.get(`/management/api/${id}`)
        .then((response) => {
            setItemId(response.data)
        })
    }, [id])


    return(
        <div className="modal-fundo">
            <div className="modal">
                <div className="close-button">
                    <DeleteButton id={id}/>
                    <button onClick={() => closeModal(false)}>Fechar</button>
                </div>
                <div className="content-modal">
                    <div className="top-modal">
                        <div className="image-modal">
                            <img src={itemId.image} alt="" />
                        </div>
                        <div className="name-modal">
                            <h1>{itemId.name}</h1>
                        </div>
                    </div>
                    <div className="button-modal">
                        <div className="salary-model">
                            <h1>Salario: R$ {itemId.salary}</h1>
                        </div>
                        <div className="office-model">
                            <p>{itemId.office}</p>
                        </div>
                        <div className="date-model">
                            <p>Data entrada: {formatDate(itemId.dataEntrada)}</p>
                            <p>Data saida: {formatDate(itemId.dataSaida)}</p>
                        </div>
                        <div className="observacao-model">
                            <p>Observações: {observacoes(itemId.observacao)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employeer;