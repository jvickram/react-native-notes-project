import React, { Component } from 'react'
import { connect } from 'react-redux'
import { noteUpdate, addNote, clearForm } from '../actions'
import { Card, CardSection, Button } from './common';
import NoteForm from './NoteForm'

class AddNote extends Component {
    onButtonPress() {
        const { name, details } = this.props
        this.props.addNote({ name, details })
    }
    onCancel(){
        this.props.clearForm()
    }
    render() {
        return (
            <Card>
                <NoteForm  />
                <CardSection>
                    <Button
                        iconName='save'
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Save
                    </Button>
                </CardSection>
                <CardSection>
                  <Button 
                        iconName='chevron-left'
                        onPress={this.onCancel.bind(this)}
                  >
                    Cancel
                  </Button>
                </CardSection>
                
            </Card>
        )
    }
}


const mapStateToProps = (state) => {
    const { name, details } = state.noteForm
    return { name, details}
}

export default connect(mapStateToProps, {noteUpdate, addNote, clearForm})(AddNote)