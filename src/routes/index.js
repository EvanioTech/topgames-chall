import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import { Home } from "../pages/home";
import { Details } from "../pages/detail";
import { Favorites } from "../pages/favorites";
import { Categorys } from "../pages/categorys";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Details"
                component={Details}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Favorites"
                component={Favorites}
                options={{headerShown: false}}
                />
                <Stack.Screen
                name="Categorys"
                component={Categorys}
                options={{headerShown: false}}
                />    
            </Stack.Navigator>
        
    )
}


export {Routes}