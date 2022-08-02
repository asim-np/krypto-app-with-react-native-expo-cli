import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants'
import { CircleBtn, RectBtn } from './Buttons'
import { SubInfo, NFTTitle, ETHPrice } from './Subinfo'

const NFTCards = ({ data }) => {
  const navigation = useNavigation()
  return (
    <View style={{
      backgroundColor: COLORS.white,
      margin: SIZES.base,
      marginBottom: SIZES.extraLarge,
      borderRadius: SIZES.font,
      ...SHADOWS.dark,
    }}>
      <View style={{
        width: '100%',
        height: 240,
      }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
      </View>
      <CircleBtn imgUrl={assets.heart} top={10} right={10} />
      <SubInfo />
      <View style={{
        width: '100%',
        padding: SIZES.font,
      }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View style={{
          marginTop: SIZES.font,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <ETHPrice price={data.price} />
          <RectBtn handlePress={() => navigation.navigate("Details", {data})} />
        </View>
      </View>
    </View>
  )
}

export default NFTCards