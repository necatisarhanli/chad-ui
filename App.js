import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Bootstrap from './src/bootstrap'
import Test from './src/pages/test'
// import './styles.css'

export default function App() {
  useEffect(() => {
    new Bootstrap()
  }, [])

  return (
    <View className='flex-1 items-center justify-center '>
      <Test />
    </View>
  )
}
