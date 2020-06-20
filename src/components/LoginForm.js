import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Header, Spinner } from './common'
import { View, Text } from 'react-native'
import { emailChanged, passwordChanged, loginUser} from '../actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props
        this.props.loginUser({email, password})
    }

    renderError() {
        if(this.props.loginError) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.loginError}</Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button iconName='sign-in' onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        )
    }

    render() {
        
        return (
            <Card style={styles.loginFormStyle}>
                {this.renderError()}
                <CardSection>
                    <Input
                        style={{paddingTop:20}}
                        // label='Email'
                        placeholder='email@gmail.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        // label='Password'
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value = {this.props.password}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    <Button iconName= 'user-plus' onPress={Actions.signup}>Sign Up</Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    },
    loginFormStyle: {
        marginTop:50
    }
}

const mapStateToProps = ({auth}) => {
    const { email, password, loginError, loading} = auth
    return { email, password, loginError, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm)