import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { Card } from "./card";


export const Planets = () => {
    
    const { store, actions } = useContext(Context)
    const planetMap = store.planets

    return (
        <div className="m-5 overflow-auto" >
            <h2 className="text-danger mb-4 d-flex justify-content-start mt-5" >
                Planets
            </h2>
            <div className="d-flex" >
                {planetMap.map(item => (<Card
                    type={"planets"}
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                    route={`/planets/${item.uid}`}
                />))}
                
            </div>
        </div>
    )
}