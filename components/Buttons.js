import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleBtn = ({imgUrl, handlePress, ...props}) => {
  return (
        <TouchableOpacity style={{
          backgroundColor: COLORS.white,
          position: 'absolute',
          width: 40,
          height: 40,
          borderRadius: SIZES.extraLarge,
          alignItems: 'center',
          justifyContent: 'center',
          ...SHADOWS.light,
          ...props,
        }}
        onPress={handlePress}
        >
          <Image source={imgUrl} resizeMode='contain' style={{
              width: 24,
              height: 24,
        }} />
        </TouchableOpacity>
    )
}

export const RectBtn = ({handlePress}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: COLORS.primary,
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            borderRadius: SIZES.large,
            fontSize: SIZES.font,
        }}
            onPress={handlePress}
        >
            <Text style={{
                color: COLORS.white,
            }}>Place a Bit</Text>
        </TouchableOpacity>
    )
}

