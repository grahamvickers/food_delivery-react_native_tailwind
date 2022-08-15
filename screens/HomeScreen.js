import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [featuredCategories, setFeaturedCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    },[]);

    useEffect(() => {
        sanityClient
            .fetch(
                `
                *[_type == "featured"] {
                    ...,
                    restaurants[]->{
                        ...,
                        dishes[]->
                    }
                }`
            )
            .then((data) => {
                setFeaturedCategories(data);
            });
    }, []);

    console.log(featuredCategories);
    
    return (
        <SafeAreaView className="bg-white pt-5">
            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                <Image 
                    source={{
                        uri: 'http://links.papareact.com/wru'
                    }}
                    className="h-7 w-7 bh-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} color="#00CCBB"/>
                    </Text>
                </View>
                <UserIcon size={35} color="#00CCBB"/>
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4" >
                <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
                    <SearchIcon color="gray" size={20}/>
                    <TextInput
                        placeholder="Restaurants and cuisines"
                        keyboardType="default"
                    />
                </View>

                <AdjustmentsIcon color="#00CCBB"/>
            </View>
            
            {/* body */}
            <ScrollView 
                className="bg-gray-100 flex-1"
                contentContainerStyle={{
                    paddingBottom: 100,
                }}
            >
                {/* catagories */}
                <Categories/>

                {/* featured  */}

                {featuredCategories?.map(category => (
                    <FeaturedRow 
                        key={category._id}
                        id={category._id}
                        title={category.name}
                        description={category.short_description}
                    />
                ))}


                {/* <FeaturedRow 
                    id="123"
                    title="Featured"
                    description="Paid placements from our partners"
                /> */}
                {/* discounts  */}
                {/* <FeaturedRow 
                    id="1234"
                    title="Tasty Discounts"
                    description="Take advantage of todays deals!"
                /> */}
                {/* offers  */}
                {/* <FeaturedRow 
                    id="12345"
                    title="Offers near you!"
                    description="Support your local restaurant tonight!"
                /> */}




            </ScrollView>
        </SafeAreaView>
  )
};

export default HomeScreen