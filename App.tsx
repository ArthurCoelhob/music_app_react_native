import React from 'react';
import Routes from './src/router';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <Routes/>
      <Toast />
    </>
  );
}

