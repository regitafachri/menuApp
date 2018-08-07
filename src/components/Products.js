import React, { Component } from "react";
import { View, Text, FlatList, Image } from "react-native";
import axios from "axios";

const BASE_URL = "https://ace.tokopedia.com";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data_products: [] //supaya bisa dipanggil di UI
    };
  }

  componentDidMount() {
    this._getDataProductFromApi();
  }

  _getDataProductFromApi() {
    //kalo kita bikin function yg isinya request API wajib pake async
    const API_URL = `${BASE_URL}/search/v2.6/product?shop_id=345986&ob=9&rows=80&start=0&full_domain=www.tokopedia.com&scheme=https&device=desktop&source=shop_product`;
    axios
      .get(API_URL)
      .then(res => {
        const dataProducts = res.data.data;
        this.setState({ data_products: dataProducts }); //yang tadi kosong trs di isi
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }

  _renderProducts = products => {
    console.log(products);
    return (
      <View
        key={products.index}
        style={{
          borderColor: "#66594a",
          borderWidth: 1,
          borderRadius: 10,
          width: "45%",
          marginTop: 10,
          marginLeft: 5
        }}
      >
        <Image
          source={{ uri: products.item.image_uri }}
          style={{ width: 150, height: 200, resizeMode: "contain", marginLeft: 10 }}
        />
        <View style={{marginLeft:10}}>
            <Text>{products.item.name}</Text>
            <Text>{products.item.price}</Text>
            <Text>
                {products.item.shop.name} {products.item.shop.city}
            </Text>
            </View>
        <Image
          source={{ uri: products.item.shop.reputation_image_uri }}
          style={{ width: 20, height: 20, resizeMode: "contain", marginLeft:10 }}
        />
      </View>
    );
  };

  render() {
    return (
      <View>
        {this.state.data_products.length > 0 && ( // kalo array nya kosong dia skip
          <FlatList
            data={this.state.data_products}
            keyExtractor={(item, id) => item.id}
            renderItem={this._renderProducts}
            numColumns={2}
          />
        )}
      </View>
    );
  }
}

export default Products;
