import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 12,
        justifyContent: 'space-between'
    },
    headerContainer: {
        marginBottom: 24,
        height: '20%',
        paddingHorizontal: 24
    },
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
    footerContainer: {
        height: '20%',
        paddingHorizontal: 24
    },
    button: {
        backgroundColor: "#28AF6E",
        height: 56,
        width: '100%',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: "Rubik-Bold",
        fontSize: 15,
        color: "#fff"
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
    },
    image: { width: '100%', height: '60%' }
})

export default styles;