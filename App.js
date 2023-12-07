import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCartScreen from './src/components/ShopingCartScreen';
import ShoppingListScreen from './src/components/ShopingListScreen';


const Stack = createStackNavigator();
 function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="ShoppingCart">
      <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
      <Stack.Screen name="ShoppingList" component={ShoppingListScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App;