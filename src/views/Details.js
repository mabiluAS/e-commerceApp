import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Product from '../components/Product';

import styles from '../css/Detail.css';

class DetailsSreen extends React.Component {

    render() {
        return (
            <main class="container">
 
            {/* -- Left Column  */}
            <div class="left-column">
                <img data-image="black" src={this.props.navigation.image} alt="">              
                </img>        
            </div>
           
            {/*  Right Column */}
            <div class="right-column">           
              {/* Product Description */}
              <div class="product-description">
                <h2> Sample product </h2> {this.props.navigation.name}
                <p>Description of the product {this.props.navigation.description}</p>
              </div>                               
              {/*  Product Pricing */}
              <div class="product-price">
                <span>R 800 {this.props.navigation.price}</span>
                <a href="#" class="cart-btn">Add to cart</a>
              </div>
            </div>
          </main>
        );
    }
}

export default DetailsSreen;