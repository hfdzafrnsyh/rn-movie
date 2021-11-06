import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import Router from './src/routes/Router';



export default function App() {

  return (
    <Router />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
