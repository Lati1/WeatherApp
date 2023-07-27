import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;
  const { container, image, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSet ,rowLayout } = styles;
  return(
    <SafeAreaProvider>
      <SafeAreaView style={container}>
        <ImageBackground source={require('../../assets/city-background.jpg')} style={image}>
          <Text style={[cityText, cityName]}>{name}</Text>
          <Text style={[cityText, countryName]}>{country}</Text>
          <View style={[rowLayout, populationWrapper]}>
            <IconText iconName={'user'} iconColor={'red'} bodyText={`Population: ${population}`} bodyTextStyle={populationText} />
          </View>
          <View style={[rowLayout, riseSetWrapper]}>
            <IconText iconName={'sunrise'} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyle={riseSet} />
            <IconText iconName={'sunset'} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyle={riseSet} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
  },
  image: {
    flex:1,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSet: {
    fontSize: 20,
    color: 'white',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default City;