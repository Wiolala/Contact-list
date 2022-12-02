import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';

const Toolbar = ({ hasSelectedContacts, onAdd, onRemove }) => (
    <View styleName="horizontal" style={styles.toolbar}>
        <TouchableHighlight 
            onPress={() => onAdd()}
            style={styles.toolbarAction}>
            <Text style={[styles.toolbarActionText, hasSelectedContacts ? {color: "rgba(155, 155, 155, .5)"} : {}]}>Add Contact</Text>
        </TouchableHighlight>
        <TouchableHighlight 
            onPress={() => onRemove()}
            style={styles.toolbarAction}
            disabled={!hasSelectedContacts}>
            <MaterialIcons style={[styles.delete, !hasSelectedContacts ? {color: "rgba(155, 155, 155, .5)"} : {}]} name="delete" size={18} color='#fff' />
        </TouchableHighlight>
    </View>
);

export default Toolbar