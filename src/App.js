import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'
import { firebaseConfig } from './components/config/firebaseConfig'
import { ThemeProvider } from 'styled-components';

class App extends Component {
  state = { loggedIn: null };

    componentDidMount() {
      

          !firebase.apps.length
        ? firebase.initializeApp(firebaseConfig)
        : firebase.app()

        // Whether the user is signed in
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              this.setState({ loggedIn: true });
            } else {
              this.setState({ loggedIn: false });
            }
          });
        }
      
        render() {
          const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
          return (
            <Provider store={store}>
                <Router  style={styles.masterContainer}/>
            </Provider>
          );
        }
      }

      const styles = {
        masterContainer: {
          padding: 10,
          // marginTop: '50%'
          backgroundColor:'#223f69',
          flex:1,
          backgroundColor:'red'
        }
      }
      
      export default App;
      