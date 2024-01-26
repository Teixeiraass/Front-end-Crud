import React, {useState, useEffect} from "react";
import api from "../../service/Api";
import ListCard from "./ListCard";

import "../../styles/home/ListStyle.css";

interface ItemType{
    id: number
    name: string;
    salary: number;
    dataEntrada: string;
    dataSaida: string;
}

export default function Lista(){

    const [list, setList] = useState<ItemType[]>([])
    
    useEffect(() => {
        api.get("/management/api").then((response) => {
            setList(response.data);
        })
    }, [])

    return(
        <div className="list">
            {list.map((item, index) => (
                <ListCard
                    key={index}
                    id={item.id}
                    name={item.name}
                    salary={item.salary}
                    data_entrada={item.dataEntrada}
                    data_saida={item.dataSaida}
                ></ListCard>
            ))}
        </div>
    )
}