import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { assets, COLORS, SIZES, FONTS } from '../constants'

const CardHeader = ({onSearch}) => {
  return (
    <View style={{
      paddingHorizontal: SIZES.font,
      marginBottom: SIZES.extraLarge,
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.font + 2,
      }}>
        <Image source={assets.logo} resizeMode="contain" style={{
          width: 90,
          height: 24,
          alignItems: 'center',
        }} />
        <View style={{
          width: 40,
          height: 40,
          borderRadius: SIZES.extraLarge,
        }}>
          <Image source={assets.person01} resizeMode="contain" style={{
            width: "100%",
            height: "100%",
          }} />
          <Image source={assets.badge} resizeMode="contain" style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: SIZES.font,
            height: SIZES.font,
          }} />
        </View>
      </View>
      <View style={{
        marginTop: SIZES.font,
      }}>
        <Text style={{
          color: COLORS.white,
          fontSize: SIZES.small,
        }}>Hello Victoria 🔥</Text>
        <Text style={{
          color: COLORS.white,
          fontSize: SIZES.large,
          marginTop: SIZES.base,
        }}>Let's Find Masterpiece Art</Text>
      </View>
      <View style={{
        width: "100%",
        borderRadius: SIZES.font,
        backgroundColor: COLORS.secondary,
        marginTop: SIZES.medium,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
      }}>
        <Image source={assets.search} resizeMode="contain" style={{
          width: SIZES.large,
          height: SIZES.large,
          marginRight: SIZES.base,
        }} />
        <TextInput placeholder='Search NFTs' onChangeText={onSearch} style={{
          flex: 1,
        }} />
      </View>
    </View>
  )
}


export default CardHeader