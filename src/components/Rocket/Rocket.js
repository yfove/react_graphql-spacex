import React, { Fragment } from 'react';
// components
import RockeHeader from './../RocketHeader';
import TechInfo from './../TechInfo';
// style
import './style.scss';

const Rocket = ({ rocket }) => {
    const { id, name, height, diameter, stages, cost_per_launch, engines } = rocket;

    return;
    <Fragment>
        <div className="rocket d-flex flex-column align-items-center justify-content-around">
            <RockeHeader id={id} name={name} />
            <TechInfo name={name} rocket={{ height, diameter, stages, cost: cost_per_launch }} isEngine />
        </div>
        <TechInfo name={engine.type} engine={engines} isEngine />
    </Fragment>;
};

export default Rocket;
