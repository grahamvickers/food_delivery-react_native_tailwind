import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../features/restaurantSlice';
import { useSelector, useDispatch } from "react-redux";
import { selectBasketItems } from '../features/basketSlice';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [ groupedItemsInBasket, setGroupedItemsInBasket ] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});

        setGroupedItemsInBasket(groupedItems);
    }, [items]);

    console.log(groupedItemsInBasket);

    return (
        <SafeAreaView>
            <View>
                <View>
                    <View>
                        <Text>Basket</Text>
                        <Text>{restaurant.title}</Text>
                    </View>
                </View> 
            </View>
        </SafeAreaView>
    );
};

export default BasketScreen;