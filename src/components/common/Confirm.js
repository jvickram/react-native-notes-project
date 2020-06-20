import React, { Component } from 'react'
import { Text, View, Modal } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const { containerSyle, textStyle, CardSectionStyle } = Styles
    return (
        <Modal
            visible={visible}
            transparent
            animationType='fade'
            onRequestClose={() => {}}
        >
            <View style={containerSyle}>
                <CardSection style={CardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}
                    >
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const Styles = {
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerSyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm }