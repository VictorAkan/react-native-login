import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useForm, Controller } from "react-hook-form"
import { useState } from "react"

export default function Form({ onSubmit, userName, userEmail, userPassword, setName, setEmail, setPassword }) {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: { userName },
            email: { userEmail },
            password: { userPassword }
        }
    });
    const submit = (data) => {
        console.log(data);
    }
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={require('./images/formLogo.png')} />
            <Text style={styles.textHead}>LOGIN</Text>
            <Controller
                control={control}
                name="name"
                render={({ onChangeText, value }) => (
                    <TextInput style={styles.textInput} placeholder="Username" onChangeText={(value) => setName(value)} maxLength={10} />
                )}
            />
            <Controller
                control={control}
                name="email"
                render={({ onChangeText, value }) => (
                    <TextInput style={styles.textInput} onChangeText={value => {setEmail(value)}} placeholder="Email" />
                )}
            />
            {/* <Text>{validity}</Text> */}
            <Controller
                control={control}
                name="password"
                render={({ onChangeText, value }) => (
                    <TextInput style={styles.textPassInput} onChangeText={(value) => setPassword(value)} placeholder="Password" secureTextEntry={true} />
                )}
            />
            <TouchableOpacity onPress={onSubmit} style={styles.touchButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHead: {
        fontSize: 37,
        color: 'white'
    },
    textInput: {
        height: 60,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    textPassInput: {
        height: 60,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    touchButton: {
        backgroundColor: 'black',
        marginTop: 40,
        padding: 20,
        width: 300,
        borderRadius: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});