import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
    main:{
        backgroundColor: "#8CD2FE",
        padding: 20,
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
    },
});

export { Header };