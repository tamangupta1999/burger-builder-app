import React, { Component } from 'react';
import Modal from '../../components/Burger/UI/Modal';

import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
        return class extends Component {
            state = {
                error : null
            }
            componentWillMount () {
                axios.interceptors.request.use(req=>{
                    this.setState({
                        error:null
                    })
                    return req;
                });
                axios.interceptors.response.use(null, error=>{
                    this.setState({
                        error:error
                    })
                });
            }   
            render () {
                return ( <Aux>
                    <Modal show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error : null}
                    </Modal>
                <WrappedComponent {...this.props} />
                </Aux>);
            }
        } 
}

export default withErrorHandler;