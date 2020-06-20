import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({children, label, value, onChangeText, placeholder, secureTextEntry}) => {
    const { inputStyle, labelStyle, containerStyle } = styles
    renderLabel = () => {
        if(label){
         return <Text style={labelStyle}>{label}</Text>
        } else {
            return <Text></Text>
        }
    }
    return(
        <View style={containerStyle}>
            {renderLabel()}
            {children}
            <TextInput 
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
        color: '#000',
        color: '#223f69',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
        backgroundColor:'#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#223f69',
    }
}

export { Input }