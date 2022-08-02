import { View, Text } from 'react-native'
import { useState } from 'react'
import { NFTTitle, ETHPrice } from './Subinfo'
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <NFTTitle title={data.name} subtitle={data.creator} titleSize={SIZES.extraLarge} subTitleSize={SIZES.small} />
        <ETHPrice price={data.price} />
      </View>
      <View style={{
        marginTop: SIZES.extraLarge * 2,
      }}>
        <Text style={{
          fontSize: SIZES.medium,
          marginBottom: SIZES.base,
        }}>Description</Text>
        <Text style={{
          fontSize: SIZES.small,
          lineHeight: SIZES.medium,
          textAlign: 'justify',
        }}>{showMore ? data.description : data.description.slice(0, 100) + '...'}
          <Text onPress={handleShowMore}>{showMore ? '' : 'More'}</Text>
        </Text>
      </View>
    </>
  )
}

export default DetailsDesc