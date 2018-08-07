import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

// Stateless component atau function component

const Header = ({ title }) => {
    return(
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container:{
        backgroundColor: "#ffdfba",
        borderBottomWidth: 1,
        borderBottomColor: "#66594a"
    },
    title:{
        color: "#66594a",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        margin: 10
    }
})

export default Header;
