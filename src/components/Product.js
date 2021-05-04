import React from 'react';

import { Text, StyleSheet } from 'react-native';

import { Card, Button } from 'react-native-elements';

import { withNavigation } from 'react-navigation'; 

const BASE_URL = 'https://raw.githubusercontent.com/sdras/sample-vue-shop/master/dist'; 

const products = [

    {
      id: 1,

      name: 'Nike Shoes',
  
      unitPrice: 1449.99,

      isAvilable: true,
  
      image: `${BASE_URL}/1.png`,

      sku: "Sku001",  

      currency: "ZAR",

      isSale: false,

      description: "Nike Shoes"
  
    },
  
    {
  
      id: 2,
      
      name: 'Puma Shirt',
  
      unitPrice: 899.99,

      isAvilable: true,
  
      image: `${BASE_URL}/2.png`,

      sku: "SKU081",  

      currency: "ZAR",

      isSale: false,

      description: "Puma Shirt"
  
    },
  
    {
  
        id: 2,
      
        name: 'Addidas Shorts',
    
        unitPrice: 399.99,
  
        isAvilable: true,
    
        image: `${BASE_URL}/3.png`,
  
        sku: "SKU017",  
  
        currency: "ZAR",
  
        isSale: false,
  
        description: "Addidas Shorts"
  
    },
  
    {
  
        id: 2,
      
        name: 'Lacoste Golfer',
    
        unitPrice: 1599.99,
  
        isAvilable: true,
    
        image: `${BASE_URL}/4.png`,
  
        sku: "SKU135",  
  
        currency: "ZAR",
  
        isSale: false,
  
        description: "Lacoste Golfer"
  
    },
  
  ];

class Product extends React.Component{

    render () {
        return (
            products.map(product=> {

                return (                
                    <Card 

                    image={{uri:product.image }}>
                    <Text style={{marginBottom:10, marginTop: 20}} h2>                    
                        {product.name}
                    </Text>

                    <Text style={styles.price} h4>                    
                    {product.currency} {product.unitPrice}
                    </Text>

                    <Text h6 style={styles.description}>
                        {product.description}
                    </Text>

                    <Button
                    type="clear"

                    title='View Details'

                    onPress={() => this.props.navigation.navigate('Details', {

                        name: product.name,

                        price: product.unitPrice,

                        image: product.image,

                        description: product.description

                    }) }/>

                    </Card>
                )
            })                
        );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },

    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },

    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});

export default withNavigation(Product);