import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReportTemplate from "./modules/Report.js";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ReportTemplate year="2021" month={new Date().getMonth()} day="QUARTA" date='05'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
