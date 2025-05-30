import React from "react";
import { View, Text, StyleSheet, Dimensions, ActivityIndicator } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { fetchCategories, PlantCategory } from "../../redux/Slice/categoriesSlice";
import { fetchQuestions, Question } from "../../redux/Slice/questionsSlice";

import Header from "./components/header";
import Notification from "./components/notification";
import Questions from "./components/questions";
import Categories from "./components/categories";

import { fonts, useTheme } from "../../theme";

const { width, height } = Dimensions.get("screen");

const Home = (props) => {
    const dispatch = useDispatch()
    const { colors } = useTheme();
    const styles = getStyles(colors);
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
            setCategoriesState(sortedCategories)
        }
    }, [categories])

    return (
        <View style={styles.container}>
            <Header />
            <View>
                <Notification />
                <Text style={styles.title}>Get Started</Text>
                <Questions questions={questionsState} />
                <Categories categories={categoriesState} />
            </View>
            {
                (loading || categoriesLoading) &&
                <View style={{ flex: 1, width: width, height: height, position: 'absolute', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                    <ActivityIndicator color={colors.secondary} size={"small"} />
                </View>
            }
        </View>
    )
}

const getStyles = (colors: any) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    title: {
        fontFamily: fonts.semibold,
        color: colors.secondary,
        fontSize: 15,
        marginBottom: 16,
        paddingHorizontal: 24
    }
})

export default Home;