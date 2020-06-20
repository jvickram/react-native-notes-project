import _ from 'lodash'
import React, { Component } from 'react'
import { ScrollView, Share } from 'react-native'
import NoteForm from './NoteForm'
import { CardSection, Card, Button, Confirm } from './common';
import { noteUpdate, noteSave, noteDelete, clearForm } from '../actions'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'

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
    // onTextPress(){
    //     const { name, details } = this.props
    //     // Communications.text(phone, `${name} \n ${details}`)
    // }
    
    onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'Title:\n' + this.props.name + '\n\nDetails:\n' + this.props.details
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

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
            <ScrollView>
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
                <CardSection>
                    {/* <Button onPress={this.onTextPress.bind(this)}>
                        Text message
                    </Button> */}
                    <Button onPress={this.onShare.bind(this)}> Share </Button>
                </CardSection>
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
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, details } = state.noteForm
    return { name, details }
}

export default connect(mapStateToProps, { noteUpdate, noteSave, noteDelete, clearForm })(NoteEdit)