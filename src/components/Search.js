import React, { useContext, useState } from "react";
import {
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Keyboard,
} from "react-native";
import { NewsContext } from "../context/Context";
import SingleNews from "./SingleNews";
import { Entypo } from "@expo/vector-icons";

const Search = () => {
    const {
        darkTheme,
        news: { articles },
    } = useContext(NewsContext);

    const [searchResults, setSearchResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentNews, setCurrentNews] = useState();
    const [searchText, setSearchText] = useState("");

    const handleSearch = (text) => {
        setSearchText(text);
        if (!text) {
            setSearchResults([]);
            return;
        }
        setSearchResults(articles.filter((query) => query.title.includes(text)));
    };

    const handleModal = (n) => {
        setModalVisible(true);
        setCurrentNews(n);
    };

    const clearSearch = () => {
        setSearchText("");
        setSearchResults([]);
        Keyboard.dismiss();
    };

    return (
        <View style={{ width: "110%", position: "relative" }}>
            <View style={styles.searchContainer}>
                <Entypo name="magnifying-glass" size={24} color={darkTheme ? "#6495ED" : "#000"} style={styles.searchIcon} />
                <TextInput
                    style={{
                        ...styles.search,
                        backgroundColor: darkTheme ? "white" : "white", // Light background color when darkTheme is false
                        color: darkTheme ? "white" : "black",
                    }}
                    onChangeText={(text) => handleSearch(text)}
                    placeholder="Search for news"
                    placeholderTextColor={darkTheme ? "black" : "black"}
                    value={searchText}
                />
                {searchText !== "" && (
                    <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
                        <Entypo name="circle-with-cross" size={20} color="#000" />
                    </TouchableOpacity>
                )}
            </View>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={styles.searchResultsContainer}
            >
                {searchResults.slice(0, 10).map((n) => (
                    <TouchableOpacity
                        key={n.title}
                        activeOpacity={0.7}
                        onPress={() => handleModal(n)}
                    >
                        <Text
                            style={{
                                ...styles.singleResult,
                                backgroundColor: darkTheme ? "black" : "white",
                                color: darkTheme ? "white" : "black",
                            }}
                        >
                            {n.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableOpacity
                    onPress={() => setModalVisible(false)}
                    style={styles.closeButton}
                >
                    <Entypo name="circle-with-cross" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ height: "100%", transform: [{ scaleY: -1 }] }}>
                    <SingleNews item={currentNews} darkTheme={darkTheme} />
                </View>
            </Modal>
        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        marginHorizontal: 15,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    search: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
    },
    clearButton: {
        padding: 5,
    },
    searchResultsContainer: {
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    singleResult: {
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        shadowColor: "black",
        elevation: 5,
    },
    closeButton: {
        position: "absolute",
        zIndex: 1,
        top: 20,
        right: 20,
    },
});
