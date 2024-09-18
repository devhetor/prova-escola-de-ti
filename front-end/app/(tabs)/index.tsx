import React from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import PerifericoList from '@/components/PerifericoList';
import ComputadorList from '@/components/ComputerList';

export default function HomeScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#cb8129' }}
      headerImage={
        <Image
          source={require('@/assets/images/perifericos.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Computador</ThemedText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push(`/(computador)/create`)}
        >
          <Text style={styles.buttonText}>Cadastrar Computador</Text>
        </TouchableOpacity>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        {/* <PerifericoList /> */}
        <ComputadorList />
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    display: "flex"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 10,
    left: 0,
    position: 'absolute',
    borderRadius: 15
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    width: "30%",
    marginRight: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
