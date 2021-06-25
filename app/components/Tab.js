import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
//import { AntDesign } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = ({ color, tab, onPress, icon, selected }) => {
  return (
    <TouchableOpacity style={[styles.container, {borderBottomWidth: selected !== tab.name ? 0 : 2, borderColor: color}]} onPress={onPress}>
      {
      icon && <Icon name={icon} size={30} color={color} />
      }
      {
        //<Text style={{ color }}>{tab.name}</Text>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginLeft: 30,
    marginRight: 30
  },
});

export default Tab;