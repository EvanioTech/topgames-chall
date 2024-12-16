import React from "react";
import { View,Text, StyleSheet } from "react-native";


const Favorites = () => {
    return(
        <View style={styles.container}>
            <Text style={{color:'#FFF'}}>
            seja bem vindo a Favorites
            </Text>
        </View>
    )
}


export {Favorites}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#050B18',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });