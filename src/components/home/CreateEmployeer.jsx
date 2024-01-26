import React, {useState} from "react";
import "../../styles/home/CreateStyle.css"
import ModalCreateEmployeer from "./modal/ModalCreateEmployeer";

export default function CreateEmployeer() {


    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () =>{
        setOpenModal(true)
    }
    
    return(
        <div>
            <div className="button-create">
                <button onClick={handleOpenModal} >Adicionar novo funcionario</button>
            </div>
            {openModal && <ModalCreateEmployeer closeModal={() => setOpenModal(false)}/>}
        </div>
    )
}