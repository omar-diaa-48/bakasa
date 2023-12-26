import { Platform, StatusBar, StyleSheet } from "react-native";

const defaultStyles = StyleSheet.create({
    safeContainer: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    container: {
        flex: 1,
        padding: 8
    }
})

export default defaultStyles;