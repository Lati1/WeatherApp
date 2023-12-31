import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RowText = (props) => {
    const { containerStyles, messageOne, messageOneStyles, messageTwo, messageTwoStyles } = props;
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text>
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default RowText;