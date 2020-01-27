/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';

import productItems from './mocks/products';

class App extends React.Component {
  state = {
    products: productItems
  }

  updateItemCount(selectedItem, type) {
    
    this.state.products.forEach((item) => {

      if (selectedItem.id === item.id) {
        if (type === "inc") {
          item.count++;
        } else if (item.count !== 0) {
          item.count--;
        }
      }


    });

    this.setState({ products: this.state.products });
    
  }

  handlePressAdd(selectedItem) {
    this.updateItemCount(selectedItem, 'inc');
  }

  handlePressRemove(selectedItem) {
    this.updateItemCount(selectedItem, 'dec');
  }

  getItem(item) {
    return <View style={styles.Item}>

      <View style={{ justifyContent: 'flex-start' }}><Text style={{ fontSize: 18 }}>{item.title}</Text></View>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginRight: 5 }}>
          <Button title='+Ekle'
            style={{ fontSize: 18 }}
            color='green'
            disabled={item.count === 10}
            onPress={() => this.handlePressAdd(item)} />
        </View>
        <View style={{ alignItems: 'center', marginVertical: 5, marginRight: 5 }}>
          <Text style={{ fontSize: 18, }}>{item.count}</Text>
        </View>
        <Button
          title='-Çıkar'
          style={{ fontSize: 18 }}
          color='darkorange'
          disabled={!item.count}
          onPress={() => this.handlePressRemove(item)} />
      </View>

    </View>;

  }

  getBasketItems() {
    return this.state.products.filter(item => item.count);
  }


  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sepet Uygulaması</Text>

        <View style={styles.ListItems}>

          <FlatList
            data={this.state.products}
            renderItem={({ item }) => this.getItem(item)}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.StatusBar}>
          <Text style={{ color: 'white' }}>
            Sepetteki ürün sayısı:
            {this.getBasketItems().length}
          </Text>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 20,
    borderBottomWidth: 2,
    paddingBottom: 15

  },
  ListItems: {
    height: '80%',
    flexDirection: "row",
    marginHorizontal: 16,

  },
  Item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    paddingTop: 5
  },
  StatusBar: {
    height: "100%",
    backgroundColor: 'red',
    padding: 15
  }

});

export default App;