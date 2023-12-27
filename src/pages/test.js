import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-red'>
      <StatusBar style='auto' />
      <Button variant='outline'>qwesad </Button>
      <Text>Open up App.js to s adasd a rt wor ki ng on your app!</Text>
      <Input />
    </View>
  )
}
