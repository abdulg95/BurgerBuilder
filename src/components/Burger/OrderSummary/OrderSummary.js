import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
class OrderSummary extends Component{
    //this does not need to be a class should be afunctional component
    componentWillUpdate(){
        console.log('[OrderSummary] WillUpdate');
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey =>{
            return <li key = {igKey}>
                        <span style = {{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
        });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Here's whats in you burger:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Totalprice: {this.props.price} </strong></p>
                <p>Continue to checkout?</p>
                <Button btnType="Danger" clicked = {this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked = {this.props.purchaseContinued}>CONTINUE</Button>
    
            </Aux>
        );
    }
}
export default OrderSummary;