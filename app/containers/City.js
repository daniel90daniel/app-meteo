import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text,TouchableOpacity,Image,FlatList, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const City = ( navigate) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+navigate.route.params.data.coord.lat+'&lon='+navigate.route.params.data.coord.lon+'&units=metric&lang=it&appid=c5d870308c049fd5148656ecf46007af')
      .then((response) => response.json())
      .then((json) => {
          setData(json)
      }
          )
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(data)
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}}  colors={['#77B9F5','#5374E7']} style={styles.container}>
      <View style={{ paddingLeft:10, paddingRight:10 ,flexDirection:'row', marginTop: 15, width:'100%',justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity onPress={()=> navigate.navigation.goBack()} >
          <Icon name={'arrow-back'} size={30} color={'#FFF'} />
        </TouchableOpacity>
        
        <Text style={styles.text}>{navigate.route.params.data.name}</Text>
        <Icon name={'add'} size={30} color={'#FFF'} />
      </View>
      <Text style={styles.subtext}>{navigate.route.params.dayFormat}</Text>
      <Text style={styles.text300}>{navigate.route.params.data.weather[0].main}</Text>

      <View style={styles.box}>
          <Image
              style={styles.icon}
              source={{
              uri: "http://openweathermap.org/img/wn/"+navigate.route.params.data.weather[0].icon+"@2x.png",
              }}
          />
          <Text style={styles.textTemp}>{Math.round(navigate.route.params.data.main.temp)}°</Text>
      </View>

      <View style={styles.box2}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}}  colors={['#FFFFFF','#5374E7']} style={styles.boxTimeline} />
        {
          !isLoading && <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ flex: 1, width:'100%'}}
          data={data.hourly}
          keyExtractor={({city}, index) => index + "" + city}
          renderItem={({ item, index}) => {
            let date = new Date(item.dt * 1000);
            return (
            <View style={styles.timeline}>
              <Text style={styles.textAMPM}> {formatAMPM(date)}</Text>


              <View style={{width: 16, height: 16, borderRadius: 8, backgroundColor: '#FFF', margin: 5}}>
              
              </View>
              <Text style={styles.textTemp3}> {Math.round(item.temp)}°</Text>

              
            </View>
            
          )}}
        />
        }
      </View>

      <View style={styles.box3}>
        {
          !isLoading && <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, width:'100%'}}
          data={data.daily}
          keyExtractor={({city}, index) => index + "" + city}
          renderItem={({ item, index}) => {
            let date = new Date(item.dt * 1000);
            return (
            <View style={styles.item}>
              <Text style={styles.textDay}> {days[date.getDay()]}</Text>
              <Text style={styles.textTemp2}> {Math.round(item.temp.day)}°</Text>
              <Image
                  style={styles.icon2}
                  source={{
                  uri: "http://openweathermap.org/img/wn/"+item.weather[0].icon+"@2x.png",
                  }}
              />
            </View>
            
          )}}
        />
        }
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  boxTimeline: {
    width: '100%',
    height: 5,
    position:'absolute',
    top: 32,
  },
  item: {
    width:148,
    height:232, 
    backgroundColor:'#79aaf1',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'column',
    elevation: 7,
    marginBottom: 10
  },
  textDay: {
    fontSize: 22,
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  textTemp2: {
    fontSize: 36,
    fontWeight: 'bold',
    color:'#FFFFFF',
    marginTop: 15
  },
  textTemp3: {
    fontSize: 25,
    fontWeight: 'bold',
    color:'#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtext: {
    fontSize: 20,
    color: '#fff',
  },
  text300: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '300',
    marginTop: 20
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  icon: {
      height: 150, 
      width: 150
  },
  textTemp: {
    fontSize: 110,
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  textAMPM:{
    fontSize: 17,
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  box2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    height: 80,
  },
  box3: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    marginTop: 10,
    height: 260,
    width: '100%',
  },
  icon2: {
    height: 100, 
    width: 100
  },
  timeline: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80, 
    height: 80, 
    marginLeft: 10, 
    flexDirection: 'column'
  }
});

export default City;