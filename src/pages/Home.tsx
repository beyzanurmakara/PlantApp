import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, TextInput, ActivityIndicator, FlatList, Linking, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import MessageIcon from "../assets/images/message.svg";
import SearchIcon from "../assets/images/search.svg";
import GradientText from "../components/GradientText";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, PlantCategory } from "../redux/Slice/categoriesSlice";
import { fetchQuestions, Question } from "../redux/Slice/questionsSlice";

const { width, height } = Dimensions.get("screen");


const Home = (props) => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch()
    const { categories, categoriesLoading, categoriesError } = useSelector((state: any) => state.categories)
    const { questions, loading, error } = useSelector((state: any) => state.questions)

    const [questionsState, setQuestionsState] = React.useState<Question[]>([])
    const [categoriesState, setCategoriesState] = React.useState<PlantCategory[]>([])

    React.useEffect(() => {
        dispatch(fetchCategories())
        dispatch(fetchQuestions())
    }, [dispatch])

    React.useEffect(() => {
        if (questions?.length > 0) {
            let _tmpList = [...questions]
            const sortedQuestions: any = _tmpList.sort((a, b) => a.order - b.order)
            setQuestionsState(sortedQuestions)
        }
    }, [questions])

    React.useEffect(() => {
        if (categories?.data?.length > 0) {
            let _tmpList = [...categories?.data]
            const sortedCategories: any = _tmpList.sort((a, b) => a.rank - b.rank)
            console.log('sortedCategories >> ', JSON.stringify(sortedCategories))
            setCategoriesState(sortedCategories)
        }
    }, [categories])

    return (
        <View style={styles.container}>
            <View style={{ width: width, minHeight: height * 0.2 }}>
                <Image source={require("../assets/images/homeBackground.png")} style={{ width: width, height: "100%", position: 'absolute', top: 0 }} />
                <View style={{
                    paddingHorizontal: 24,
                    paddingTop: insets.top + 3,
                    paddingBottom: 14
                }}>
                    <Text style={{
                        fontFamily: "Rubik-Light",
                        letterSpacing: 0.07,
                        color: '#13231B',
                        fontSize: 16,
                        marginBottom: 6
                    }}>Hi, plant lover!</Text>
                    <Text style={{
                        fontFamily: "Rubik-Medium",
                        letterSpacing: 0.35,
                        color: '#13231B',
                        fontSize: 24,
                        marginBottom: 14
                    }}>Good Afternoon! ⛅</Text>
                    <TouchableOpacity activeOpacity={0.9} style={{
                        width: '100%',
                        borderColor: "#3C3C4340",
                        borderWidth: 0.5,
                        borderRadius: 12,
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        backgroundColor: '#FFFFFF',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <SearchIcon width={20} height={20} style={{ marginRight: 12 }} />
                        <Text style={{
                            fontFamily: "Rubik-Light",
                            color: "#AFAFAF",
                            fontSize: 16,
                            letterSpacing: 0.07
                        }}>Search for plants</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{ padding: 14, paddingHorizontal: 24 }}>
                    <TouchableOpacity style={{
                        width: '100%',
                        padding: 13,
                        paddingLeft: 20,
                        backgroundColor: "#24201A",
                        borderRadius: 12,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{ width: 45, height: 45, marginRight: 16, justifyContent: 'center', alignItems: 'center', marginTop: 8 }}>
                            <MessageIcon width={45} height={45} fillSecondary="#F0D399" fillStroke="#D9A846" />
                            <View style={{
                                width: 15,
                                height: 15,
                                position: 'absolute',
                                top: 2,
                                right: 3,
                                backgroundColor: '#E82C13',
                                borderRadius: 100,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: "Rubik-SemiBold",
                                    color: "#FFFFFF",
                                    fontSize: 10
                                }}>1</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', width: '70%' }}>
                            <GradientText style={{
                                fontFamily: "Rubik-SemiBold",
                                fontSize: 16,
                                lineHeight: 21
                            }}>FREE Premium Available</GradientText>
                            <GradientText style={{
                                fontFamily: "Rubik-Light",
                                fontSize: 13,
                                lineHeight: 16
                            }}>Tap to upgrade your account!</GradientText>
                        </View>
                        <Icon name="chevron-right" color="#D0B070" size={24} style={{
                            position: 'absolute', right: 24
                        }} />
                    </TouchableOpacity>
                </View>
                <Text style={{
                    fontFamily: "Rubik-SemiBold",
                    color: "#13231B",
                    fontSize: 15,
                    marginBottom: 16,
                    paddingHorizontal: 24
                }}>Get Started</Text>
                <FlatList
                    horizontal
                    data={questionsState}
                    keyExtractor={(item, index) => `questions_key_${index}`}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                Linking.canOpenURL(item.uri)
                                    .then((val) => {
                                        if (val) {
                                            Linking.openURL(item.uri)
                                        }
                                    })
                                    .catch((e) => {
                                        console.log('ERROR: ', e)
                                        Alert.alert("Üzgünüm şu an yönlendiremiyorum 😔")
                                    })
                            }} style={{
                                width: width * 0.6,
                                height: (width * 0.6) * 0.66,
                                borderRadius: 12,
                                backgroundColor: '#FFFFFF',
                                marginRight: 10,
                                overflow: 'hidden',
                            }}>
                                <Image source={{ uri: item?.image_uri }} style={{ width: '100%', height: '100%' }} />
                                <View style={{
                                    width: '100%',
                                    height: (width * 0.6) * 0.25,
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    paddingHorizontal: 14,
                                    justifyContent: 'center'
                                }}>
                                    <Text numberOfLines={2} style={{
                                        width: '85%',
                                        fontFamily: "Rubik-Regular",
                                        fontSize: 16,
                                        color: '#FFFFFF'
                                    }}>{item?.title}</Text>
                                </View>

                            </TouchableOpacity>

                        )
                    }}
                    style={{
                        paddingHorizontal: 24,
                        height: (width * 0.6) * 0.66 + 60
                    }}
                    showsHorizontalScrollIndicator={false}
                />
                <FlatList
                    data={categoriesState}
                    keyExtractor={(item, index) => `categories_keys_${index}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: (width - 72) / 2,
                                height: undefined,
                                aspectRatio: 1,
                                borderRadius: 12,
                                borderColor: "#29BB892E",
                                borderWidth: 0.5,
                                overflow: "hidden",
                                backgroundColor: '#F4F6F6'
                            }}>
                                <Image source={{ uri: item.image?.url }} style={{ width: '100%', height: '100%' }} />
                                <Text style={{
                                    fontFamily: 'Rubik-SemiBold',
                                    color: "#13231B",
                                    fontSize: 16,
                                    position: 'absolute',
                                    top: 16,
                                    left: 16,
                                    width: '60%'
                                }}>{item.title}</Text>
                            </View>
                        )
                    }}
                    numColumns={2}
                    contentContainerStyle={{ padding: 24, paddingBottom: height*0.63}}
                    columnWrapperStyle={{
                        justifyContent: 'space-between',
                        marginBottom: 24,
                    }}
                />
            </View>
            {
                (loading || categoriesLoading) &&
                <View style={{ flex: 1, width: width, height: height, position: 'absolute', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                    <ActivityIndicator color={"#24201A"} size={"small"} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default Home;