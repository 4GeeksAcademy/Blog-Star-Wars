import React, { useContext, useState} from "react";
import { Card } from "./card";
import { Context } from "../store/appContext";

export const Vehicles = () => {

    const { store, actions } = useContext(Context)
    const planetMap = store.vehicles

    return (
        <div className="m-5 overflow-x-auto" >
            <h2 className="text-danger mb-4 d-flex justify-content-start mt-5" >
                Vehicles
            </h2>
            <div className="d-flex" >
                {planetMap.map(item => (<Card
                    type={"vehicles"}
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                />))}
                
            </div>
        </div>
    )
}