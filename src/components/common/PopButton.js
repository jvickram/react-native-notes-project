import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const PopButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={ buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    fontWeight:'bold',
    elevation:4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  buttonStyle: {
    flexDirection: 'column',
    backgroundColor:'#223f69',
    justifyContent:'center',
    borderRadius: 25,
    height:40,
    width:40,
    marginRight:5,
    borderWidth: 2,
    borderColor: '#223f69',
    borderColor: 'white',
    position: 'absolute',
    top:'90%',
    right:2,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    
  }
};

export { PopButton };
