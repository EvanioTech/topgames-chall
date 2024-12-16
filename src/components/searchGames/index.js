/* eslint-disable react/react-in-jsx-scope */
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



const SearchGames = () => {
    return(
        <View style={styles.containerView}>
            <TextInput style={styles.search}>

            </TextInput>
            <TouchableOpacity>
            <FontAwesome6 name="magnifying-glass" size={28} color="#FF455F" />
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    containerView: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
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
    search: {
        backgroundColor: '#1F2430',
        width: '85%',
        borderRadius: 10

    }
});




export {SearchGames};
