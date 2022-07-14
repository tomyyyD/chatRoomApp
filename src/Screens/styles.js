import {StyleSheet} from "react-native";

const mainColor = '#232329'
const themeColor = '#14d7de'
const tertiaryColor = "#fada39"

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
    },
    contentContainer: {
        flex:1,
        width: "100%",
    },
    messagingContainer: {
        width: '90%',
        flexDirection: 'row',
        paddingBottom: 60,
        alignItems: 'center',
    },
    messagingButton: {
        borderRadius: '15%',
        borderColor: themeColor,
        borderWidth: 2,
        width: '25%',
        alignItems: "center",
        padding: 10,
        marginLeft: '4%',
    },
    sentMessageContainer: {
        backgroundColor: themeColor,
        color: mainColor,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignItems: "flex-end",
        maxWidth: '80%',
    },
    receivedMessageContainer: {
        margin: 5,
        backgroundColor: tertiaryColor,
        padding: 10,
        borderRadius: 10,
        alignItems: "flex-start",
        maxWidth: '80%',
    },
    messageText: {
        color: mainColor,
        fontFamily: 'NotoSans_700Bold',
        fontSize: 18,
    },
    messageHeader: {
        color: themeColor,
        marginTop: 10,
        marginHorizontal: 5.
    },
    messageHeaderAlt: {
        color: tertiaryColor,
        marginTop: 10,
        marginHorizontal: 5,
    },
    listContainer:{
        height: '95%',
        marginTop: '2%',
    },
    signOutContainer: {
        marginTop: 40,
        alignItems: "flex-start",
        width: '95%',
    },
    roomContainer: {
        borderBottomColor: themeColor,
        borderBottomWidth: 2,
        padding: 5,
        marginBottom: 10,
        width: '100%',
    },
    roomListContainer: {
        height: '85%',
        alignItems: "center",
        width: '80%'
    },
    createRoomContainer: {
        width: '90%',
        flexDirection: 'row',
        paddingVertical: 20,
        alignItems: 'center',
    }
})

export default styles
