import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { ThemedText } from './ThemedText';
import { PerifericoProps } from '@/props/periferico';
import { ComputadorProps } from '@/props/computador';

export default function ComputadorList() {
    const [isLoading, setLoading] = useState(true);
    const [computador, setcomputador] = useState<ComputadorProps[]>([]);

    const getComputador = async () => {
        try {
            const response = await fetch('http://localhost:3000/computador/');
            const json = await response.json();
            setcomputador(json);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getComputador();
    }, []);

    // ao recarregar a pagina, ele refaz a busca, atualizando os dados
    useFocusEffect(
        useCallback(() => {
            getComputador();
        }, [])
    );

    function ComputadorCard({ computador }: { computador: ComputadorProps }) {
        return (
            <View style={styles.card}>
                <View>
                    <ThemedText type='title'>{computador.nome}</ThemedText>
                    <ThemedText style={{ marginTop: 15 }}>Cor: {computador.cor}</ThemedText>
                    <ThemedText>Email: {computador.dataFabricacao}</ThemedText>
                </View>
                <View style={{ display: "flex", alignItems: "center" }}>

                    <TouchableOpacity
                        style={[styles.button, { marginTop: 30 }]}
                        onPress={() => {
                            router.push(`../(computador)/edit/${computador.nome}`)
                        }}
                    >
                        <Text style={styles.buttonText}>Alterar Usuario</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, { marginTop: 20, backgroundColor: "red" }]}
                        onPress={async () => {
                            try {
                                await fetch(`http://localhost:3000/computador/${computador.nome}`, {
                                    method: 'DELETE',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                });
                            } catch (error) {
                                console.log("Erro ao deletar usuario: " + error);
                            } finally {
                                getComputador();
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
                    data={computador}
                    keyExtractor={(item) => item._id}
                    renderItem={({ item }) => (
                        <ComputadorCard computador={item} />
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