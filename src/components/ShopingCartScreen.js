import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ShoppingCartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setTotalQuantity(totalQuantity + 1);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalQuantity(totalQuantity + 1);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, item.quantity - 1);
        setTotalQuantity(totalQuantity - (item.quantity - newQuantity));
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);
  };

  return (
    <View>
      <Text>Shopping Cart Screen</Text>
      <Button
        title="Go to Shopping List"
        onPress={() => navigation.navigate('ShoppingList')}
      />
      {cartItems.map((item) => (
        <View key={item.id}>
          <Text>{`${item.name} - Quantity: ${item.quantity}`}</Text>
          <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          <Button title="Increase Quantity" onPress={() => increaseQuantity(item.id)} />
          <Button title="Decrease Quantity" onPress={() => decreaseQuantity(item.id)} />
        </View>
      ))}
    </View>
  );
};

export default ShoppingCartScreen;
