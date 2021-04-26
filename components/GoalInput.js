import React,{useState} from 'react'
import { StyleSheet, View ,TextInput, Button,Modal} from 'react-native'

const GoalInput = (props) => {
    const [goals, setGoals] = useState('');
   

    const goalInputHandler = (text) => {
        setGoals(text);
      };
     
    const addGoalHandler= ()=>{
        if(goals){
        props.addGoal(goals)
        setGoals('')  
        }
       
    }
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
               
        <TextInput
          style={styles.input}
          value={goals}
          onChangeText={goalInputHandler}
          placeholder='Add your todo list'
        />
         <View style={styles.buttonContainer}>
            
            <View style={styles.buttons}><Button onPress={addGoalHandler} title='Enter' /></View>
            <View style={styles.buttons}><Button onPress={props.cancelHandler} title='Cancel' color="#d63031" /></View>
       
        </View>
        
      </View>
        </Modal>
        
    )
}

const styles= StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
      },
      buttonContainer:{
          width:'60%',
          flexDirection:'row',
          justifyContent:'space-around' 
      },
      buttons:{
          width:'40%'
      }
})

export default GoalInput
