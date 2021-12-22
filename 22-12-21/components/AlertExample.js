import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  Button,
} from 'react-native';

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert('Hello I am Simple Alert');
};

const twoOptionHandeler =() =>{
    Alert.alert(
        //title
        'Hello',
        //body
        'i am two option alert, do you wanna cancel?',
        //text and button 
        [
            {
                text:'Yes',
                onPress:()=>console.log('[Yes] was Pressed')
            },
            {
                text:'No',
                onPress:()=>console.log('[No] was Pressed')
            }
        ],
        {cancelable:true}
    )
}

const threeOptionHandeler =() =>{
    Alert.alert(
        //title
        'Hello there',
        //body
        'i am three option alert,  do you wanna cancel?',
        //text and button 
        [
            {
                text:'maybe',
                onPress:()=>console.log('[maybe] was Pressed')
            },
            {
                text:'yes',
                onPress:()=>console.log('[yes] was Pressed')
            },
            {
                text:'no',
                onPress:()=>console.log('[no] was Pressed')
            }
        ],{cancelable:true}
    )
}

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button 
            title="simple alert" 
            onPress={simpleAlertHandler} 
        />

        <Button 
            title="alert with two option" 
            onPress={twoOptionHandeler} 
        />

        <Button 
            title="alert with three option" 
            onPress={threeOptionHandeler} 
        />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});