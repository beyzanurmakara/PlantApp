import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Boarding = (props: any) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Boarding</Text>
            <TouchableOpacity onPress={() => {
                navigation.reset({
                    index: 0,
                    routes: [
                        {
                            name: "Main",
                            params: {}
                        }
                    ]
                })
            }}>
                <Text>Go To Main!</Text>
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

export default Boarding;