import {StyleSheet} from "react-native";

const mainColor = '#232329'
const themeColor = '#14d7de'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: mainColor,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: '70%',
        marginTop: 30,
    },
    logo: {
        marginTop: 50,
    },
    input: {
        overflow: "hidden",
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        color: themeColor,
    },
    title: {
        fontSize: 30,
        marginTop: 40,
        marginBottom: 15,
        color: themeColor,
        fontFamily: 'NotoSans_700Bold',
    },
    inputContainer: {
        width: '70%',
        borderBottomWidth: 3,
        borderBottomColor: themeColor,
    },
    button: {
        borderRadius: '15%',
        backgroundColor: themeColor,
        width: '45%',
        alignItems: "center",
        padding: 10,
    },
    buttonAlt: {
        borderRadius: '15%',
        borderColor: themeColor,
        borderWidth: 2,
        width: '45%',
        alignItems: "center",
        padding: 10,
    },
    largeButton: {
        borderRadius: '15%',
        backgroundColor: themeColor,
        width: '100%',
        alignItems: "center",
        padding: 10,
    },
    largeButtonAlt: {
        borderRadius: '15%',
        borderColor: themeColor,
        borderWidth: 2,
        width: '100%',
        alignItems: "center",
        padding: 10,
    },
    buttonText: {
        color: mainColor,
        fontFamily: 'NotoSans_700Bold',
    },
    buttonAltText: {
        color: themeColor,
        fontFamily: 'NotoSans_700Bold',
    }
})

export default styles
