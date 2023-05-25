import { StyleSheet, Text, View, Button, Image } from "react-native";


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image1} source={require('../assets/logo.jpg')} />
            <View style={styles.view1}>
            <Button style={styles.button1}
            title="QR"
            onPress={() => navigation.navigate("QR")}>
            </Button>
            </View>
            <View>
            <Button style={styles.button1}
            title="Attend Class"
            onPress={() => navigation.navigate("Login")}>
            </Button>
            </View>
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
    view1: {
        backgroundColor: '#fff',
        margin: 5,
        top: -310,
        right: -160,
        width: 40,
        height: 40,
    },
    image1: {
        width: 130,
        height: 130,
    },

    button1: {
        width: '20%',
        color: 'red'
    }
});