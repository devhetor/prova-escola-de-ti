import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ActivityIndicator, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PerifericoProps } from '@/props/periferico';

export default function PerifericoEdit() {
    const [nome, setName] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [periferico, setPeriferico] = useState<PerifericoProps>();

    const getPeriferico = async () => {
        try {
            const response = await fetch(`http://localhost:3000/periferico/${nome}`);
            const json = await response.json();
            setName(json.nome);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);  // Para capturar possíveis erros de rede
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPeriferico();
    }, []);


    return (
        <ScrollView>
            <ThemedView style={{ width: "100%", height: "100%" }}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <View style={{ padding: 20 }}>
                        <ThemedText type='title'>{periferico?.nome}</ThemedText>

                        <View style={{ marginTop: 20, marginBottom: 5 }}>
                            <ThemedText>
                                Nome Completo:
                            </ThemedText>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Altere o Nome Completo do Periferico"
                                onChangeText={newText => setName(newText)}
                                defaultValue={nome}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={async () => {
                                try {
                                    await fetch(`http://localhost:3000/periferico/${periferico?.nome}`, {
                                        method: 'PUT',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            nome: name
                                        }),
                                    });
                                    router.push(`/(tabs)`)
                                } catch (error) {
                                    console.log("Erro ao deletar usuario: " + error);
                                }
                            }}
                        >
                            <Text style={styles.buttonText}>Salvar Alterações</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </ThemedView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    textInput: {
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
