TextInput 
import React from 'react'
import { TextInput, View, Text } from 'react-native'

const TextArea = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    const { inputStyle, labelStyle, containerStyle } = styles
    return(
        <View style={containerStyle}>
            <TextInput 
            multiline
            numberOfLines={5}
            secureTextEntry={secureTextEntry}
            placeholder= {placeholder}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    )
}

const styles = { 
    inputStyle : {
        color: '#223f69',
        paddingRight: 10,
        paddingLeft: 10,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
        borderColor: '#223f69',
        borderWidth: 1,
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#223f69',
    }
}

export { TextArea }