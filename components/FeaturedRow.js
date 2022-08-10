import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#00CCBB"/>
        </View>

        <Text className="text-xs text-gray px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/* RestaurantCards... */}
            <RestaurantCard
                id={123}
                imgUrl="http://links.papareact.com/gn7"
                title="Gozen Sushi"
                rating={4.5}
                genre="Japanese"
                address="675 Hyde Park Rd"
                short_description="Tasty Sushi with a Twist!"
                dishes={[]}
                long={230}
                lat={450}
            />
            <RestaurantCard
                id={123}
                imgUrl="http://links.papareact.com/gn7"
                title="Gozen Sushi"
                rating={4.5}
                genre="Japanese"
                address="675 Hyde Park Rd"
                short_description="Tasty Sushi with a Twist!"
                dishes={[]}
                long={230}
                lat={450}
            />
            <RestaurantCard
                id={123}
                imgUrl="http://links.papareact.com/gn7"
                title="Gozen Sushi"
                rating={4.5}
                genre="Japanese"
                address="675 Hyde Park Rd"
                short_description="Tasty Sushi with a Twist!"
                dishes={[]}
                long={230}
                lat={450}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow