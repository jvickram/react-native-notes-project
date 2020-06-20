import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome';


class Item extends Component {
    onRowPress() {
        Actions.noteEdit({note: this.props.note})
    }
    render() {
        const { name } = this.props.note
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View style={Styles.containerStyle}>
                    <CardSection>
                        <Icon name='edit' style={Styles.iconStyle} />
                        <Text style={Styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
            
        )
    }
}

const Styles = {
    iconStyle: {
        // flex:1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 8,
        fontSize: 20,
        color: '#223f69',
        paddingLeft: 15,
        alignSelf: 'center'

    },
    titleStyle: {
        alignItems: 'center',
        color: '#223f69',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight:'bold',
        paddingLeft: 15,
        flexDirection: 'row',
        shadowColor: 'red',
        shadowOffset: {width:5, height:5},
        shadowOpacity: 5,
        shadowRadius:5

    },
    containerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        // backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'grey',
        marginLeft: 5,
        marginRight: 5,
        marginTop:2,
        flexDirection:'column',
      }
}

export default Item