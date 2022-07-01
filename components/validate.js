import { View,Text,StyleSheet } from "react-native"

export default function Validate({name}) {
    return(
        <View style={styles.container}>
            <Text style={styles.textTop}>Hello {name}</Text>
            <Text style={{ fontSize:20 }}>You're Welcome!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textTop: {
        fontSize: 30
    }
})