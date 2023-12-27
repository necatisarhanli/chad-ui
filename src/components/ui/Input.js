import * as React from 'react'

import { cn } from '../../../lib/utils'
import { TextInput, View } from 'react-native'

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <View className='flex flex-row '>
      <TextInput
        // className={cn(
        //   'flex flex-col h-9 items-center w-full rounded-md border border-input bg-red-300  text-sm shadow-sm transition-colors',
        //   className
        // )}

        className='px-3 py-1 w-full h-9 rounded border bg-transparent shadow-sm transition-colors'
        type={type}
        ref={ref}
        {...props}
      />
    </View>
  )
})

Input.displayName = 'Input'

export { Input }
