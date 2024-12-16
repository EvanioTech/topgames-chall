import React from "react";
import { View,Text, StyleSheet } from "react-native";


const Categorys = () => {
    return(
        <View style={styles.container}>
            <Text style={{color:'#FFF'}}>
            seja bem vindo a Categorys
            </Text>
        </View>
    )
}


export {Categorys}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#050B18',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });