import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 10,
        backgroundColor: "#fafafa",
        borderWidth: 2,
        borderColor: "#8CD2FE",
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});

export { ListItem }; 