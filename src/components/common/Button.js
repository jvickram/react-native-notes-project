import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CardSection } from './CardSection';

const Button = ({ iconName, iconColor, onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Icon name={iconName} style={styles.iconStyle} />
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  iconStyle: {
    paddingTop: 10,
    paddingBottom: 8,
    fontSize: 20,
    color: 'white',
    // color: `${this.props.iconColor}`,
    alignSelf: 'center',
    flexDirection: 'row',
      // marginLeft: 5,
    marginRight: 5,
    // flex:1
  },
  textStyle: {
    alignSelf: 'center',
    // color: '#007aff',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight:'bold',
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#223f69',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    // marginLeft: 5,
    // marginRight: 5,
    flexDirection: 'row'
  }
};

export { Button };
