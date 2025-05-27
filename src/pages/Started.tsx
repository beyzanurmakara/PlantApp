import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import shareStyle from "../styles";

const GetStarted = (props: any) => {
    const { navigation } = props;
    const insets = useSafeAreaInsets();
    return (
        <LinearGradient colors={['#fff', '#def0fe']} style={{ flex: 1 }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
            <View style={[shareStyle.container, { paddingTop: insets.top }]}>
                <View style={shareStyle.headerContainer}>
                    <Text style={styles.header}>Welcome To <Text style={{ fontFamily: "Rubik-Medium" }}>PlantApp</Text></Text>
                    <Text style={styles.description}>Identify more than 3000+ plants and 88% accuracy.</Text>
                </View>
                <Image source={require("../assets/images/walktrough.png")} style={shareStyle.image} resizeMode='stretch' />
                <View style={shareStyle.footerContainer}>
                    <TouchableOpacity style={shareStyle.button} onPress={() => navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: 'Boarding',
                                params: {},
                            },
                        ],
                    })}>
                        <Text style={shareStyle.buttonText}>Get Started</Text>
                    </TouchableOpacity>
                    <Text style={styles.footer}>
                        By tapping next, you are agreeing to <Text style={{ textDecorationLine: 'underline' }}>PlantID Terms of Use & Privacy Policy.</Text>
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Rubik-Light",
        fontSize: 28,
        color: "#13231B",
    },
    description: {
        fontFamily: "Rubik-Light",
        fontSize: 16,
        color: "#13231BB2",
        marginTop: 8,
        width: '80%'
    },
    footer: {
        color: "#597165B2",
        marginTop: 16,
        fontFamily: "Rubik-Light",
        lineHeight: 15,
        fontSize: 12,
        textAlign: 'center',
        width: '60%',
        alignSelf: 'center'
    }
})

export default GetStarted;
