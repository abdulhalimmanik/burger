import React from 'react'

import Aux from '../../../hoc/AuxCom'
import Button from '../../UI/Button/Button'

class OrderSummary extends React.Component {

    componentWillUpdate() {
        console.log('[update] Order summary');
    }
    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                )
            })

        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
                <p>want to continue?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )

    }
}

export default OrderSummary