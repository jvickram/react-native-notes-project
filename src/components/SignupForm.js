import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Header, Spinner } from './common'
import { View, Text } from 'react-native'
import { emailChanged, passwordChanged, signupUser} from '../actions'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'


class SignupForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props
        this.props.signupUser({email, password})
    }

    renderError() {
        if(this.props.signUpError) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.signUpError}</Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large" />
        }

        return (
            <Button iconName='user-plus' onPress={this.onButtonPress.bind(this)}>
                Sign Up
            </Button>
        )
    }

    render() {
        
        return (
            <Card style={{marginTop:'45%'}}>
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
                    <Text style={{textAlign:'center', color:'black', flexDirection:'row'}}>Already a member</Text>
                    <Text style={{textAlign:'center', color:'red', flexDirection:'row'}} onPress={Actions.login}>Login</Text>
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
        marginTop:'45%',
        lineHeight: 20
        // top: 120
    }
}

const mapStateToProps = ({auth}) => {
    const { email, password, signUpError, loading} = auth
    return { email, password, signUpError, loading }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, signupUser })(SignupForm)