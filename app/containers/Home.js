import React from 'react';
import { View, StyleSheet, Text, Button, FlatList, ScrollView } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
//import { addLocation } from '../actions/location';
import RenderItemCity from '../components/RenderItemCity';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = ({ navigation }) => {
  const locations = useSelector(state => state.locationReducer.locationList)
  //const dispatch = useDispatch();

  //const addLocation = (city) => dispatch(addLocation(city))
  console.log(locations)
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>Good morning!</Text>
      <Text style={styles.text}>Mario</Text>

      <View style={{ flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
        <Icon name={'add'} size={30} color={'#01175F'} />
        <Text style={styles.text2}>Aggiungi città</Text>
      </View>
      
      


      <FlatList
          style={{ flex: 1, width:'100%', marginBottom: 140}}
          data={locations}
          keyExtractor={({city}, index) => index + "" + city}
          renderItem={({ item, index}) => (
            <RenderItemCity navigation={navigation} city={item.city} index={index}/>
          )}
        />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F1F1F1',
    paddingTop: 20
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#01175F',
    textAlign: 'center'
  },
  text2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#01175F',
    marginTop: 25,
    marginBottom: 25,
    textAlign: 'center'
  },
});

export default Home;