import React, { useState, useContext, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetDetails = () => {

    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getPlanet(params.id)
    }, [])



    return (
        <div className="Container" style={{marginTop: "180px"}}>
            <div className="d-flex justify-content-center mx-auto w-75">
                <div className="bg bg-secondary d-flex justify-content-evenly" style={{width: "600px", height: "400px"}}>
                    <img className="" src={params.id === "1" ? params.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/"+ params.type + "/" + params.id + ".jpg" : "https://starwars-visualguide.com/assets/img/"+ params.type + "/" + params.id + ".jpg"} />
                </div>
                <div className="p-5">
                    <h1 className="text-center text-light mb-3">{store.planet?.properties?.name}</h1>
                    <p className="text-center text-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nibh aliquam, mattis ligula eget, lobortis enim. Integer et nisi pharetra, fringilla libero sit amet, porttitor odio. Sed posuere tellus non viverra congue. Cras tempus tortor eu mi porta, quis facilisis nunc mollis. Cras diam enim, cursus in bibendum vel, blandit non sem. Cras a molestie enim. Sed finibus tempor nisl at tempus. Cras ultrices magna sed enim vestibulum suscipit.
                    </p>
                </div>
            </div>
            <hr style={{ border: "1px solid red"}}/>
            <div className="container text-center text-danger w-75 p-4">
                <div className="row">
                    <div className="col-2 fw-semibold">
                        Name
                    </div>
                    <div className="col-2 fw-semibold">
                        Climate
                    </div>
                    <div className="col-2 fw-semibold">
                        Population
                    </div>
                    <div className="col-2 fw-semibold">
                        Orbital Period
                    </div>
                    <div className="col-2 fw-semibold">
                        Rotation Period
                    </div>
                    <div className="col-2 fw-semibold">
                        Diameter
                    </div>
                    </div>
                <div className="row">
                    <div className="col-2 fw-semibold">
                            {store.planet?.properties?.name}
                        </div>
                        <div className="col-2 fw-semibold">
                            {store.planet?.properties?.climate}
                        </div>
                        <div className="col-2 fw-semibold">
                            {store.planet?.properties?.population}
                        </div>
                        <div className="col-2 fw-semibold">
                            {store.planet?.properties?.orbital_period}
                        </div>
                        <div className="col-2 fw-semibold">
                            {store.planet?.properties?.rotation_period}
                        </div>
                        <div className="col-2 fw-semibold">
                            {store.planet?.properties?.diameter}
                        </div>
                    </div>
                </div>
        </div>
    );
};

