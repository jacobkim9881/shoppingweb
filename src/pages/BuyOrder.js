import React, { Component } from 'react';

class BuyOrder extends Component {
    render() {
        return (
            <form>
                <tr>
                    <th>Email: </th><th><input type="text" name="email"/></th>
                    <th>Quantity: </th><th><input type="text" name="qty"/></th>
                    <th><input type="submit" name="order"/></th>
                </tr>
            </form>
        );
    }
}

export default BuyOrder;