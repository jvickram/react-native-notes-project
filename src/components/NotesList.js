import React, { Component } from 'react'
import _ from 'lodash'
import { Card, Button, PopButton, CardSection } from './common'
import { FlatList } from 'react-native'
import { notesFetch } from '../actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Item from './Item'
import Icon from 'react-native-vector-icons/FontAwesome';

class NotesList extends Component {
    componentDidMount() {
        this.props.notesFetch()
        this.setData(this.props)
    }
    
    componentWillReceiveProps(nextProps) {
            this.setData(nextProps)
    }

    setData({notes}){
        this.data = notes
    }

    renderRow(note) {
        return <Item note={note.item}></Item>
    }

    render() {
        return (
            <Card>
                <FlatList 
                data = {this.data}
                renderItem={this.renderRow}
                keyExtractor={note => note.uid}
                // style={{backgroundColor:'#fb3f2d'}}
            />
  
            <PopButton onPress={() => Actions.addNote()}>+</PopButton>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    // convert object to array with lodash
    const notes = _.map(state.notes, (val, uid) => {
        return { ...val, uid }
    })
    return {notes}
}

export default connect(mapStateToProps,{notesFetch})(NotesList)

