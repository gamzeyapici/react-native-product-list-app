import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList
} from 'react-native';


class ProductDetail extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.product.title} Detail`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
  });

  state = {

  }

  render() {
    const { getParam } = this.props.navigation;
    const product = getParam('product');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={{padding: 15, fontSize: 16}}>{product.description}</Text>


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

export default ProductDetail;