import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const login_cartoon = require("./assets/login_cartoon.png");

  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Image source={login_cartoon} style={{ width: 245, height: 245, alignSelf: 'center' }} />

        <Text style={{ textAlign: 'center' }}>Don't have any account?
          <Text style={{ fontWeight: '600', textDecorationLine: 'underline' }}> Sign Up </Text>
        </Text>

        <View style={{
          margin: 25,
        }}>
          <Text style={{ fontWeight: '800', fontSize: 28 }}>Login</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f97316'
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});
