import React from "react";
import api from "../../service/Api";

import "../../styles/home/EditButtonEmployeerStyle.css"

export default function DeleteButton({id}){

    const handleDeleteButton = () => {
        api.delete(`/management/api/${id}`)
            .then((response) => {
                console.log(response.data);
        })
        window.location.reload();
    }

    return(
        <div className="buttons-edits">
            <div className="button-delete">
                <button onClick={handleDeleteButton} >Deletar</button>
            </div>
        </div>
        
    )
}