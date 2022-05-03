import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProducts, removeselectedProducts } from "../redux/actions/productActions"



const ProductDetail = () => {
    const product = useSelector((state) => state.product)
    const {image,title,price,category,description} = product
    console.log("product", product)
    const { productId } = useParams();
    const dispatch = useDispatch()
    console.log(productId)
    useEffect(() => {
        fetchProductDetail(productId)
    }, [])

    const fetchProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
            console.log("err", err)
        })
        console.log(response.data)
        dispatch(selectedProducts(response.data))
    }
    useEffect(() => {
        if (productId && productId !== "") { fetchProductDetail() }
        return () => {
            dispatch(removeselectedProducts())
        }
    }, [productId])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (<div>....Loading</div>) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center align grid">
                        <div className="ui vertical divider">And</div>
                        <div className="midle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt="image" />
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button red">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
            <h1>ProductDetail</h1>
        </div>
    )

}

export default ProductDetail