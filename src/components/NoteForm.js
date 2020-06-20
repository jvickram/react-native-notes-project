import React, { Component } from 'react'
import { CardSection, Input, TextArea } from './common';
import { Text, View } from 'react-native'
import { noteUpdate } from '../actions'
import { connect } from 'react-redux'

class NoteForm extends Component {
    
    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        // label= "Name"
                        placeholder= 'Name'
                        value={this.props.name}
                        onChangeText={value => this.props.noteUpdate({ prop:'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <TextArea 
                        label= "Details"
                        placeholder= 'Details'
                        value={this.props.details}
                        onChangeText={value => this.props.noteUpdate({ prop:'details', value})}
                    />
                </CardSection>
            </View>
        )
    }
}

const Styles = {
    pickerStyle: { 
        flexDirection: 'column'
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    }
}

const mapStateToProps = (state) => {
    const { name, details } = state.noteForm
    return { name, details }
}

export default connect(mapStateToProps, {noteUpdate})(NoteForm)