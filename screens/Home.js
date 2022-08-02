import { useState } from "react";
import { SafeAreaView, Text, FlatList, View } from "react-native"
import { COLORS, NFTData } from '../constants/index';

import { FocusStatusBar, CardHeader, NFTCards } from '../components/Main';

const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  const handleSearch = (text) => {
    if (!text) return setNftData(NFTData);

    const filteredData = NFTData.filter(item => 
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <FocusStatusBar backgroundColor = { COLORS.primary } />
        <SafeAreaView style={{ flex: 1 }}>
            <View>
            <FlatList
              data={nftData}
              renderItem={({item}) => <NFTCards data={item}/>}
                keyExtractor={(item) => item.id }
                showsVerticalScrollIndicator = {false}
                ListHeaderComponent = { <CardHeader onSearch={handleSearch} /> }
              />
            </View>
            <View style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              zIndex: -1
            }}>
              <View style={{ height: 300, backgroundColor: COLORS.primary }} />
              <View style={{ flex: 1, backgroundColor: COLORS.white }} />
            </View>
        </SafeAreaView>
      </View>
  )
}

export default Home