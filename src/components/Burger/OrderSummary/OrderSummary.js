import React, { Component , Fragment } from 'react';
import Button from './../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span> 
            : {this.props.ingredients[igKey]}
            </li>
        })
        return (  
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {this.props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Fragment>);
        
    }
}
export default OrderSummary;