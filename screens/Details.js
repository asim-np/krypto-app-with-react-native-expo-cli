import React from "react";
import { Text, SafeAreaView, Image, View, FlatList, StatusBar } from "react-native"
import { CircleBtn, RectBtn, FocusStatusBar, DetailsBid, DetailsDesc } from "../components/Main"
import { SubInfo } from "../components/Subinfo";
import { COLORS, FONTS, SIZES, SHADOWS, assets } from "../constants"

const DetailsHeader = ({ data, navigation }) => (
  <View style={{
    width: '100%',
    height: 370,
  }}>
    <Image source={data.image} resizeMode='cover' style={{
      width: '100%',
      height: '100%',
    }} />
    <CircleBtn imgUrl={assets.left} left={10} top={StatusBar.currentHeight + 10}
      handlePress={() => navigation.goBack()}
    />
    <CircleBtn imgUrl={assets.heart} top={StatusBar.currentHeight + 10} right={10} />
  </View>
)

const Details = ({ route, navigation }) => {
  const {data} = route.params;

  return (
    <View style={{ flex: 1 }}>
      <FocusStatusBar backgroundColor= 'transparent' translucent={true} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{
          width: '100%',
          position: "absolute",
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: SIZES.base,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}>
          <RectBtn minWidth={170} {...SHADOWS.dark} />
        </View>
        <FlatList
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 5 }}
          ListHeaderComponent={() => (
            <React.Fragment>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{
                marginTop: SIZES.extraLarge + 10,
                paddingHorizontal: SIZES.font,
              }}>
                <DetailsDesc data={data} />
                {data.bids.length > 0 && (
                  <Text style={{
                    fontSize: SIZES.medium,
                    marginTop: SIZES.extraLarge,
                  }}
                  >Current Bids</Text>
                )}
              </View>
            </React.Fragment>
          )}
        />
      </SafeAreaView>
    </View>
  )
}

export default Details