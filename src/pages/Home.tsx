import React from "react";
import Lista from "../components/home/List";
import CreateEmployeer from "../components/home/CreateEmployeer";

export default function Home(){
    return(
        <div>
            <CreateEmployeer/>
            <Lista/>
        </div>
    )
}