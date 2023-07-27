import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utilities/weatherType';
import moment from 'moment';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp, dateWrapper } = styles;
    return(
        <View style={item}>
            <Feather name={weatherType[condition]?.icon} size={50} color='white' />
            <View style={dateWrapper}>
              <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
              <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      padding:20,
      marginVertical:8,
      marginHorizontal:16,
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'space-around',
      borderWidth: 5,
      backgroundColor: 'indianred',
    },
    temp: {
      color: 'white',
      fontSize: 20,
    },
    date: {
      color: 'white',
      fontSize: 15,
    },
    dateWrapper: {
      flexDirection:'column',
    },
})
  
export default ListItem;