import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';

const App = () => {
  const [loading, error, weather] = useGetWeather();

  if(weather && weather.list && !loading) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tabs weather={weather} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }

  return(
    <View style={styles.container}>
      {error ? <ErrorItem /> : <ActivityIndicator size={'large'} />}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default App;
