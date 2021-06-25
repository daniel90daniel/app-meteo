import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Position = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Position</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Position;