import React, { useContext } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { categories, sources } from "../utils/api";
import { NewsContext } from "../context/Context";
import Search from "../components/Search";

const DiscoverScreen = () => {
    const windowWidth = Dimensions.get("window").width;
    const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

    const { setCategory, setSource, darkTheme } = useContext(NewsContext);

    // Define the background color based on darkTheme
    const backgroundColor = darkTheme ? "#282C35" : "white";

    return (
        <View style={[styles.discover, { backgroundColor }]}>
            <Search />
            <Text style={[styles.subtitle, { color: darkTheme ? "white" : "black" }]}>
                Categories
            </Text>
            <Carousel
                layout={"default"}
                data={categories}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setCategory(item.name)}
                            style={styles.category}
                        >
                            <Image source={{ uri: item.pic }} style={styles.categoryImage} />
                            <Text style={[styles.name, { color: darkTheme ? "white" : "black" }]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={"start"}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />
            <Text style={[styles.subtitle, { color: darkTheme ? "white" : "black" }]}>
                Sources
            </Text>
            <View style={styles.sources}>
                {sources.map((s) => (
                    <TouchableOpacity
                        onPress={() => setSource(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}
                    >
                        <Image source={{ uri: s.pic }} style={styles.sourceImage} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
    discover: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 5,
        alignSelf: "flex-start",
        borderRadius: 10,
    },
    category: {
        height: 130,
        margin: 20,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    categoryImage: {
        height: "70%",
        width: "100%",
        resizeMode: "contain",
    },
    name: {
        fontSize: 14,
        textTransform: "capitalize",
    },
    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 45,
    },
    sourceContainer: {
        height: 150,
        width: "40%",
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#cc313d",
    },
    sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    },
});
