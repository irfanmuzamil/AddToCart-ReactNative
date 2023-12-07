import React from 'react';
import { View, Text, Button } from 'react-native';

const ShoppingListScreen = ({ navigation }) => {

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <View>
      <Text>Shopping List Screen</Text>
      <Button
        title="Go to Shopping Cart"
        onPress={() => navigation.navigate('ShoppingCart')}
      />
      {products.map((product) => (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <Button title="Add to Cart" onPress={() => addToCart(product)} />
        </View>
      ))}
    </View>
  );
};

export default ShoppingListScreen;
