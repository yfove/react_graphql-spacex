import React, { Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
//components
import Error from './../components/Error';
import Loader from './../../components/Loader';

const PastLaunches = () => {
    return (
        <Fragment>
            <h1 className="display-4 text-center my-5 pt-5">Past Launches</h1>
        </Fragment>
    );
};

export default PastLaunches;
