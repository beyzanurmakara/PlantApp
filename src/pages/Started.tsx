import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Started = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Started</Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Boarding") }}>
                <Text>Go To Boarding!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Started;