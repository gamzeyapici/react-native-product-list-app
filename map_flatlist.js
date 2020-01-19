/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

class App extends React.Component {
  state = {
    data: [
      {
        id: 1,
        title: 'Çorba',
        count: 0
      },
      {
        id: 2,
        title: 'Hamburger',
        count: 0
      },
      {
        id: 3,
        title: 'Döner',
        count: 0
      },
      {
        id: 4,
        title: 'Külbastı',
        count: 0
      },
      {
        id: 5,
        title: 'Dolma',
        count: 0
      },
      {
        id: 6,
        title: 'Kokoreç',
        count: 0
      },
      {
        id: 7,
        title: 'İmam Bayıldı',
        count: 0
      },
      {
        id: 8,
        title: 'İçli Köfte',
        count: 0
      },
      {
        id: 9,
        title: 'Adıyaman Çiğköfte',
        count: 0
      },
      {
        id: 10,
        title: 'Sivas Köfte',
        count: 0
      },
      {
        id: 11,
        title: 'Baklava',
        count: 0
      },
      {
        id: 12,
        title: 'Kazandibi',
        count: 0
      },
      {
        id: 13,
        title: 'Sütlaç',
        count: 0
      },
      {
        id: 14,
        title: 'Trileçe',
        count: 0
      },
      {
        id: 15,
        title: 'Helva',
        count: 0
      },

    ]
  }

  componentDidMount() {
  }

  updateItemCount(selectedItem, type) {
    const newData = this.state.data.map((item) => {

      if (selectedItem.id === item.id) {
        if (type === "inc") {
          item.count++;
        } else if (item.count !== 0) {
          item.count--;
        }
      }

      return item;
    });

    this.setState({ data: newData });
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
            onPress={() => this.handlePressAdd(item)} />
        </View>
        <View style={{ alignItems: 'center', marginVertical: 5, marginRight: 5 }}>
          <Text style={{ fontSize: 18, }}>{item.count}</Text>
        </View>
        <Button
          title='-Çıkar'
          style={{ fontSize: 18 }}
          color='darkorange'
          onPress={() => this.handlePressRemove(item)} />
      </View>

    </View>;

  }

  getBasketItems() {
    return this.state.data.filter(item => item.count);
  }


  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sepet Uygulaması</Text>

        <View style={styles.ListItems}>

          <FlatList
            data={this.state.data}
            renderItem={({ item }) => this.getItem(item)}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Text>Sepetteki ürün sayısı: {this.getBasketItems().length}</Text>
        </View>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 20,
    borderWidth: 2

  },
  ListItems: {
    height: '80%',
    flexDirection: "row",

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
  }

});

export default App;