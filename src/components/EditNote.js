import _ from 'lodash'
import firebase from 'firebase'
import React, { Component } from 'react'
import NoteForm from './NoteForm'
import { CardSection, Card, Button, Confirm } from './common';
import { noteUpdate, noteSave, noteDelete, clearForm } from '../actions'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import Icon from 'react-native-vector-icons/FontAwesome';

class NoteEdit extends Component {
    state = { showModal: false}

    UNSAFE_componentWillMount() {
        _.each(this.props.note, (value, prop) => {
            this.props.noteUpdate({prop, value})
        })
    }
    onButtonPress(){
        const { name, details } = this.props
        this.props.noteSave({name, details, uid:this.props.note.uid })

    }
    onTextPress(){
        const { name, details } = this.props
        // Communications.text(phone, `${name} \n ${details}`)
    }

    onCancel(){
        this.props.clearForm()
    }

    onAccept() {
        const { uid } = this.props.note
        this.props.noteDelete({uid})
    }

    onDecline(){
        this.setState({showModal:false})
    }

    render() {
        return (
            <Card>
                <NoteForm {...this.props}/>
                <CardSection>
                    <Button
                        iconName='save'
                        onPress={this.onButtonPress.bind(this)}>
                        Update
                    </Button>
                </CardSection>
                <CardSection>
                    <Button 
                        iconName='trash'
                        iconColor='red'
                        onPress={() => this.setState({ showModal: !this.state.showModal})}>
                        Delete
                    </Button>
                </CardSection>
                {/* <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Share
                    </Button>
                </CardSection> */}
                <CardSection>
                  <Button 
                      onPress={this.onCancel.bind(this)}
                  >
                    Cancel
                  </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, details } = state.noteForm
    return { name, details }
}

export default connect(mapStateToProps, { noteUpdate, noteSave, noteDelete, clearForm })(NoteEdit)