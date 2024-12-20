import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Fontisto from 'react-native-vector-icons/Fontisto';
import { SearchGames } from '../../components/searchGames';
import { FlatList } from 'react-native-gesture-handler';

const Home = () => {
    return (
        <ScrollView style={styles.containerView}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Top<Text style={{ color: '#FF455F' }}>Games</Text>
                </Text>
                <TouchableOpacity style={styles.btnFav} onPress={() => { console.log('teste'); }}>
                    <Fontisto name="favorite" size={14} color="white" />
                </TouchableOpacity>
            </View>
            <View>
                <SearchGames/>
            </View>
            <View>
                <FlatList/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#050B18',
    },
    container: {
        flex: 1,
        marginTop: 70,
        marginRight: 12,
        marginLeft: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    title: {
        color: '#FFF',
        fontSize: 30,
    },
    btnFav: {
        backgroundColor: '#1F2430',
        padding: 10,
        borderRadius: 20,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { Home };
