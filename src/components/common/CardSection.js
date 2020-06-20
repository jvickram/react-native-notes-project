import React from 'react'
import { View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyles: {
        borderColor: '#ddd',
        backgroundColor: '#fff',
        // backgroundColor:'#223f69',
        borderBottomWidth: 1,
        padding:5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
}


export { CardSection }