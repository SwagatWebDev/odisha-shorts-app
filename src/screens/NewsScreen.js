import React, { useContext, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../context/Context";
import SingleNews from "../components/SingleNews";

const NewsScreen = ({ navigation }) => {
    const {
        news: { articles },
        darkTheme,
    } = useContext(NewsContext);

    const [activeIndex, setActiveIndex] = useState();

    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;

    const handleSwipeRight = (item) => {
        if (item && item.url) { // Check if item and item.url are defined
            navigation.navigate("SourceNews", { url: item.url }); // Navigate to SourceNewsScreen with the url parameter
        } else {
            console.error("URL not available for this article.");
        }
    };

    return (
        <View style={styles.carousel}>
            {articles && (
                <Carousel
                    firstItem={articles.slice(0, 10).length - 1}
                    layout={"stack"}
                    data={articles.slice(0, 10)}
                    sliderWidth={windowWidth}
                    sliderHeight={300}
                    itemHeight={windowHeight}
                    vertical={true}
                    renderItem={({ item, index }) => (
                        <SingleNews
                            item={item}
                            index={index}
                            darkTheme={darkTheme}
                            onPress={() => handleSwipeRight(item)}
                        />
                    )}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
            )}
        </View>
    );
};

export default NewsScreen;

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        transform: [{ scaleY: -1 }],
        backgroundColor: "black",
    },
});
