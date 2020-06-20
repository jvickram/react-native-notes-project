import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import NotesList from './components/NotesList'
import firebase from 'firebase'
import SignupForm from './components/SignupForm'
import AddNote from './components/AddNote'
import EditNote from './components/EditNote'
import Icon from 'react-native-vector-icons/FontAwesome';

const ReactComponent = () => {
    
    return (
        <Router>
            <Scene key="root" hideNavBar
            navigationBarStyle={Styles.loginTitle}
            titleStyle={Styles.titlesStyle}
            headerLayoutPreset="center">
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login"
                        initial
                    />
                    <Scene
                        key="signup"
                        component={SignupForm}
                        title="Register"
                    /> 
                </Scene>
                <Scene key="main">
                    <Scene
                        rightTitle={
                        <Icon name='sign-out' size={30} color="white" />
                        }
                        onRight={() => firebase.auth().signOut()}
                        key="notesList" 
                        component={NotesList}
                        title="Notes"
                        initial
                    />
                    <Scene
                        rightTitle={
                            <Icon name='sign-out' size={30} color="white" />
                            }
                        onRight={() => firebase.auth().signOut()}
                        key="addNote" 
                        component={AddNote}
                        title="Add"
                    />
                    <Scene
                        rightTitle={
                            <Icon name='sign-out' size={30} color="white" />
                            }
                        rightButtonStyle={{color:'grey'}}
                        onRight={() => firebase.auth().signOut()}
                        key="noteEdit" 
                        component={EditNote}
                        title='Edit'
                    />
                </Scene>
            </Scene>
        </Router>
    )
}

const Styles = {
    loginTitle: {
    // backgroundColor:'#223f69',
    backgroundColor:'#f4511e',
    borderRadius: 5,
    color: 'white',
    borderBottomWidth:0,
    height: 80,
    },
    titlesStyle: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'cursive'
    }
}

export default ReactComponent