import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };

    return(
        <View>
            <TextInput 
            style={styles.input} 
            onChangeText={onChange} 
            placeholder="Впишите задачу..."
            />
            <Button 
            color="#8CD2FE"
            onPress={() => addHandler(text)}
            title="Добавить задачу"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        textAlign: "center",
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#8CD2FE",
        width: "60%",
        marginLeft: "20%",
        marginBottom: "5%",
        marginTop: "5%",
        backgroundColor: "#fafafa",        
    },
});

export { Form };