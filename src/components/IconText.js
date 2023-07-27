import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const { container, textTheme } = styles;
    const { iconName, iconColor, bodyText, bodyTextStyle } = props;
    return (
        <View style={container}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
    },
    textTheme: {
        fontWeight: 'bold',
    },
})

export default IconText;