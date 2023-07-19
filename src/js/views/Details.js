import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/home.css";
import { CharacterDetails } from "../component/character-details";
import { PlanetDetails } from "../component/planet-details";
import { VehicleDetails } from "../component/vehicle-details";

export const Details = () => {

    const params = useParams();

    let componentType;

    if (params.type === "planets") {
        componentType = <PlanetDetails />
    }else if (params.type === "vehicles"){
        componentType = <VehicleDetails />
    }else {
        componentType = <CharacterDetails />
    }

    return (
        <div className="mt-5">
            {componentType}
        </div>
    )
}