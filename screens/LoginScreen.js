import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>
                Login
            </Text>
            <Button style={styles.button1}
            title="Back"
            // onPress={() => navigation.navigate("HomeScreen")}
            >
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },

    button1: {
        width: 20,
    }
});