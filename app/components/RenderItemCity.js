import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RenderItamCity = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+props.city+'&units=metric&lang=it&appid=c5d870308c049fd5148656ecf46007af')
        .then((response) => response.json())
        .then((json) => {
            json.date = new Date(json.dt * 1000);
            setData(json)
        }
            )
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
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

    const backgroundGradient1 = ['#011354', '#5B9FE3'];
    const backgroundGradient2 = ['#5374E7', '#77B9F5'];
    const backgroundGradient3 = ['#464C64', '#99A9B9'];
    
    const dayFormat = !isLoading && days[data.date.getDay()] +" " + data.date.getDate() +", "+ monthNames[data.date.getMonth()];
    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size={'large'} color={'black'}/> : (
            <TouchableOpacity activeOpacity={0.9} style={{flex:1, flexDirection:'row'}} onPress={() => props.navigation.navigate('City', { city: props.city, data: data, dayFormat:dayFormat})}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}}  colors={props.index == 0 ? backgroundGradient1 : ( props.index == 1 ? backgroundGradient2 : backgroundGradient3 )} style={styles.containerG}>
                    <View style={styles.box1}>
                        <Text style={styles.textCity}>{data.name}</Text>
                        <Text style={styles.text}>{dayFormat}</Text>
                        <Text style={styles.textMini}>{formatAMPM(data.date)}</Text>
                    </View>
                    <View style={styles.box}>
                        <Image
                            style={styles.icon}
                            source={{
                            uri: "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png",
                            }}
                        />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.textTemp}>{Math.round(data.main.temp)}°</Text>

                    </View>
                </LinearGradient>
        
            </TouchableOpacity>
      )}
        
        
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    elevation: 6,
    height: 140,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  containerG: {
    flex: 1,
    borderRadius: 25,
    height: 140,
    flexDirection:'row'
  },
  textCity: {
    fontSize: 26,
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  textBold: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  textMini: {
    fontSize: 12,
    color:'#FFFFFF',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    color:'#FFFFFF',
    marginTop: 6
  },
  textTemp: {
    fontSize: 50,
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  icon: {
      height: 100, 
      width: 100
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:.33333,
    flexDirection:'column'
  },
  box1: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex:.33333,
    flexDirection:'column',
    marginLeft: 20
  }
});

export default RenderItamCity;