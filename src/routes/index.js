import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

/* Import views componments */
import Main from "../views/main";
import Contacts from "../views/contacts";
import Contact from "../views/contact";
import PhoneCall from "../views/phoneCall";


const AppContainer = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Contacts" component={Contacts}/>
            <Stack.Screen name="Contact" component={Contact}/>
            <Stack.Screen name="PhoneCall" component={PhoneCall}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default AppContainer;
