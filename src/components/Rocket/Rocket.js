import React, { Fragment } from 'react';
// components
import RockeHeader from './../RocketHeader';
import TechInfo from './../TechInfo';

const Rocket = ({ rocket }) => {
    const { id, name, height, diameter, stages, cost_per_launch, engines } = rocket;

    return;
    <Fragment>
        <div className="rocket d-flex flex-column align-items-center justify-content-around">
            <RockeHeader id={id} name={name} />
        </div>
    </Fragment>;
};

export default Rocket;
