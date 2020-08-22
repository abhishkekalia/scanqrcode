import React, { Component, useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';


const Product = props => {
    const [productData, setProductdata] = useState({})
    useEffect(() => {
        getMoviesFromApi()
    }, [])
    const getMoviesFromApi = () => {
        return fetch(`http://demo.evolutionitsolution.com/graphql?query={product(id:${props.route.params.productId}){product_name,category,sub_category,quantity}}`)
            .then((response) => response.json())
            .then((res) => {
                setProductdata(res.data.product)
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <View style={styles.container} >
            <Image
                source={{ uri: 'https://offautan-uc1.azureedge.net/-/media/images/off/ph/products-en/products-landing/landing/off_overtime_product_collections_large_2x.jpg?la=en-ph' }}
                style={{ width: 200, height: 200 }}
            />
            <Text style={styles.product}>Overtime</Text>
            <Text style={styles.productText}>sku : {productData && productData.product_name}</Text>
            <Text style={styles.productText}>Category : {productData && productData.category}</Text>
            <Text style={styles.productText}>Sub Category : {productData && productData.sub_category}</Text>
            <Text style={styles.productText}>Qty : {productData && productData.quantity}</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    product: {
        fontSize: 20,
        marginVertical: 8
    },
    productText: {
        width: 200,
        borderRadius: 5,
        textAlign: "left",
        paddingLeft: 5,
        backgroundColor: 'rgb(208, 210, 251)',
        // paddingHorizontal: 70,
        paddingVertical: 10,
        marginBottom: 5
    }
})
export default Product;