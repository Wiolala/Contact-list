import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import styles from "./styles";

const Toolbar = ({ onModify }) => (
    <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight 
            onPress={() => onModify()}
            style={styles.toolbarAction}
            >
            <Text style={styles.toolbarActionText}>Modify Contact</Text>
        </TouchableHighlight>
    </View>
);

export default Toolbar