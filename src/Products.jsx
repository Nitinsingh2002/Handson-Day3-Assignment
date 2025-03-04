import { Component } from "react";

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => this.setState({ products: res }));
    }

    render() {
        return (
            <>
                {
                    this.state.products.map((product, index) => (
                        <h1 key={index}>{product.title}</h1>
                    ))
                }
            </>
        )
    }
}

export default Product;