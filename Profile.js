import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');

  const handleCreateProfile = () => {
    if (!fullName || !email || !password) {
        console.log('Please fill in all fields');
        return;
      };
    console.log('Creating profile...', { fullName, email, password, title });
  };
  fetch('https://react-native-firebase-3d61e.appspot.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ fullName, email, password }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Profile created successfully:', data);
    });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

        <TextInput
        style={styles.input}
        placeholder="Enter you title"
        value={email}
        onChangeText={(text) => setTitle(text)}
        keyboardType="title"
      />

      <Button title="Create Profile" onPress={handleCreateProfile} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default Profile;
