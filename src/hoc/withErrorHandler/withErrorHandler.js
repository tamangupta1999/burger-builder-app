import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal';

import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [error, setError] = useState(null);

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null)
            return req;
        });
        const resInterceptor = axios.interceptors.response.use(null, error => {
            setError(error)
        });

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.request.eject(resInterceptor);
            }
        }, [reqInterceptor,resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
        }
        return (<Aux>
            <Modal show={error}
                modalClosed={errorConfirmedHandler}>
                {error ? error : null}
            </Modal>
            <WrappedComponent {...props} />
        </Aux>);
    }
}

export default withErrorHandler;