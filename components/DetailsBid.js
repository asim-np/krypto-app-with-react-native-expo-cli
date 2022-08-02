import { View, Text, Image, } from 'react-native'
import { ETHPrice } from './Subinfo'
import { SIZES, FONTS, assets } from '../constants'

const DetailsBid = ({bid}) => {
  return (
    <View style={{
      marginTop: SIZES.font,
      paddingHorizontal: SIZES.font,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <View style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.extraLarge,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Image source={bid.image} resizeMode='contain' style={{
          width: '100%',
          height: '100%',
        }} />
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingLeft: SIZES.extraLarge * 2,
        
      }}>
        <Text>Bid placed by {bid.name}</Text>
        <Text style={{ fontSize: SIZES.small }}>{ bid.date}</Text>
      </View>
      <ETHPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid