import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../context/Context";
import DiscoverScreen from "../screens/DiscoverScreen";
import NewsScreen from "../screens/NewsScreen";
import TopNavigation from "../components/TopNavigation";

export default function OdishaShortsTabs() {
    const layout = useWindowDimensions();

    const { index, setIndex } = useContext(NewsContext);

    const [routes] = useState([
        { key: "first", title: "Discover" },
        { key: "second", title: "News" },
    ]);

    const renderScene = SceneMap({
        first: DiscoverScreen,
        second: NewsScreen,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
        />
    );
}
