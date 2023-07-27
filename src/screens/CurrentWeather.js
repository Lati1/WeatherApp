import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles;
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
  const weatherCondition = weather[0]?.main;
  return(
    <SafeAreaProvider>
      <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition]?.backgroundColor}]}>
        <View style={container}>
          <Feather name={weatherType[weatherCondition]?.icon} size={100} color='white' />
          <Text style={tempStyles}>{temp}°</Text>
          <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
          <RowText 
            containerStyles={highLowWrapper} 
            messageOne={`High: ${temp_max}° `} 
            messageOneStyles={highLow}
            messageTwo={`Low: ${temp_min}°`} 
            messageTwoStyles={highLow}
          />
        </View>
        <RowText 
            containerStyles={bodyWrapper} 
            messageOne={weather[0]?.description} 
            messageOneStyles={description}
            messageTwo={weatherType[weatherCondition]?.message} 
            messageTwoStyles={message}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  tempStyles: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
})

export default CurrentWeather;