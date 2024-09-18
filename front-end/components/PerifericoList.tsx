import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ThemedText } from './ThemedText';
import { PerifericoProps } from '@/props/periferico';

export default function PerifericoList() {
    const [isLoading, setLoading] = useState(true);
    const [periferico, setPeriferico] = useState<PerifericoProps[]>([]);

    const getPerifericos = async () => {
        try {
            const response = await fetch('http://localhost:3000/periferico/');
            const json = await response.json();
            setPeriferico(json);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getPerifericos();
    }, []);

    // ao recarregar a pagina, ele refaz a busca, atualizando os dados
    useFocusEffect(
        useCallback(() => {
            getPerifericos();
        }, [])
    );

    function PerifericoCard({ periferico }: { periferico: PerifericoProps }) {
        return (
            <View style={styles.card}>
                <View>
                    <ThemedText type='title'>{periferico.nome}</ThemedText>
                </View>
                <View style={{ display: "flex", alignItems: "center" }}>

                    <TouchableOpacity
                        style={[styles.button, { marginTop: 30 }]}
                        onPress={() => {
                            router.push(`../(periferico)/edit/${periferico.nome}`)
                        }}
                    >
                        <Text style={styles.buttonText}>Alterar Usuario</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { marginTop: 20, backgroundColor: "red" }]}
                        onPress={async () => {
                            try {
                                await fetch(`http://localhost:3000/periferico/${periferico.nome}`, {
                                    method: 'DELETE',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                });
                            } catch (error) {
                                console.log("Erro ao deletar usuario: " + error);
                            } finally {
                                getPerifericos();
                            }
                        }}
                    >
                        <Text style={styles.buttonText}>Deletar Usuario</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, padding: 24 }}>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={periferico}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <PerifericoCard periferico={item} />
                    )}
                />
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        flex: 1,
        padding: 24,
        backgroundColor: "black",
        borderRadius: 16,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        width: "50%",
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});