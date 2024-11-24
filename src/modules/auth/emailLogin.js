import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

// Styled Components
export const ViewContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-top:10px;
  background-color: #4CAF50; 
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`;

const EmailLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Login logic here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <ViewContainer>
      <Label>Email</Label>
      <Input
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Enter your email"
      />

      <Label>Password</Label>
      <Input
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Enter your password"
      />

      <ButtonContainer onPress={handleLogin}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
      </ButtonContainer>
    </ViewContainer>
  );
};

export default EmailLoginScreen;
