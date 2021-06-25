import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
      
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

export default Search;