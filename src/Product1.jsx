import { Component } from "react";
import axios from 'axios'

class Product1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {

        axios.get('https://fakestoreapi.com/products').
            then(res => this.setState({ products: res.data }));

    }
    render() {
        return (
            <>
            {
                this.state.products.map((product,index) =>(
                    <h1 key={index}>{product.title}</h1>
                ))
            }
          

            </>
        )
    }
}


export default Product1;