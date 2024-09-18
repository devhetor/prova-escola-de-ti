import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function PerifericoCreate() {
    const [nome, setname] = useState("");

    return (
        <ScrollView>
            <ThemedView style={{ width: "100%", height: "100%", padding: 20 }}>
                <View style={{ marginTop: 20, marginBottom: 5 }}>
                    <ThemedText>
                        Username:
                    </ThemedText>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Insira o nome do Periferico"
                        onChangeText={newText => setname(newText)}
                        defaultValue={nome}
                    />
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                        try {
                            await fetch(`http://localhost:3000/periferico/`, {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    nome: nome
                                }),
                            });
                            router.push(`/(tabs)`)
                        } catch (error) {
                            console.log("Erro ao Cadastrar usuario: " + error);
                        }
                    }}
                >
                    <Text style={styles.buttonText}>Cadastrar Periferico</Text>
                </TouchableOpacity>
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    TextInput: {
        height: 40,
        width: "50%",
        color: "white",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        width: "50%",
        marginTop: 40
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
