import React, {useState} from "react";
import "../../styles/home/ListCardStyle.css"
import Employeer from "./modal/Employeer";

export const formatDate = (data) => {
    if(data != null){
        const novaData = new Date(data);
        const format = novaData.toLocaleDateString();
        return format; 
    }else{
        return "Atualmente"
    }
}

function ListCard({id, name, salary, data_entrada, data_saida}){
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false)
    }

    return(
        <div>
            <div className="lista-card" onClick={() => setModalOpen(true)}>
                <div className="item-cards">
                    <div className="card-left">
                        <div className="name-card">
                            <h1>{name}</h1>
                        </div>
                        <div className="salary">
                            <p>Salario: R${salary}</p>
                        </div>
                    </div>
                    <div className="card-right">
                        <p><span style={{fontWeight: 'bold'}}>Data entrada:</span> {formatDate(data_entrada)}</p>
                        <p><span style={{fontWeight: 'bold'}}>Data saída:</span> {formatDate(data_saida)}</p>
                    </div>
                </div>
            </div>
            {modalOpen && <Employeer closeModal={closeModal} id={id}/>}
        </div>
        
    )
}

export default ListCard;