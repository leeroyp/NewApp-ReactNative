import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BookmarkScreen = () => { 
    return ( 
        <View> 
            <Text>Book mark screen </Text>
        <Button 
        title= "Click here"
        onPress={() => alert( " button Clicked")}
        />
        </View>
    );
};

export default BookmarkScreen; 

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'

    },
});