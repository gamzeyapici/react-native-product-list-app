/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import HomeScreen from './pages/HomeScreen';
import ProductListPage from './pages/ProductList';
import ProductDetailPage from './pages/ProductDetail';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ProductList: {screen: ProductListPage},
  ProductDetail: {screen: ProductDetailPage},
});

const App = createAppContainer(MainNavigator);

export default App;