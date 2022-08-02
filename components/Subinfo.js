import { View, Text, Image } from 'react-native'
import { SIZES, SHADOWS, COLORS, FONTS, assets } from '../constants'

export const SubInfo = () => {
  return (
      <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.font,
          marginTop: -SIZES.extraLarge
      }}>
          <People />
          <EndDate />
      </View>
  )
}

export const People = () => {
  return (
    <View style={{
      flexDirection: 'row',
    }}>
      {[assets.person02, assets.person03, assets.person04].map((person, index) => (
        <ImageCmp person={person} index={index} key={`person-${index}`} />
      ))}
    </View>
  )
}

export const ETHPrice = ({price}) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Image source={assets.eth} resizeMode='contain' style={{
        width: 24,
        height: 24,
        marginRight: SIZES.base,
      }} />
      <Text>{ price }</Text>
    </View>
  )
}

export const ImageCmp = ({person, index}) => {
  return (
    <Image
      source={person}
      resizeMode='contain'
      style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        marginLeft: index === 0 ? 0 : -SIZES.font
      }}
    />
  )
}

export const EndDate = () => {
  return (
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: SIZES.font,
      paddingHorizontal: SIZES.font,
      paddingVertical: SIZES.base,
      maxWidth: '50%',
      backgroundColor: COLORS.white,
      elevation: 1,
      ...SHADOWS.light,
    }}>
      <Text style={{
        fontSize: SIZES.small,
        color: COLORS.primary,
      }}>Ending In</Text>
      <Text style={{
        fontSize: SIZES.medium,
        color: COLORS.primary,
      }}>12hr 30min</Text>
    </View>
  )
}


export const NFTTitle = ({title, subtitle, titleSize, subTitleSize}) => {
  return (
    <View>
      <Text style={{
        fontSize: titleSize,
        color: COLORS.primary,
      }}>{title}</Text>
      <Text style={{
        fontSize: subTitleSize,
        color: COLORS.primary,
      }}>by { subtitle }</Text>
    </View>
  )
}



