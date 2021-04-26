import React, { useState } from 'react';
import { StyleSheet,  View, FlatList, Button,Text } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  
  const addGoal = (goals) => {
    setCourseGoals((current) => setCourseGoals([...current,{key: Math.random().toString(), value: goals}]));
    setOpenModal(false)
  };

  const removeGoal = (goalid)=>{
     setCourseGoals((current)=>{
       return current.filter(goal=> goal.key !== goalid)
      })
  }
  return (
    <>
    <View style={styles.screen}>
      
      <GoalInput visible={openModal} addGoal={addGoal} cancelHandler={()=> setOpenModal(false)} />
     
      {courseGoals.length == 0 && <Text style={styles.heading}>
        Your To-Do list is empty
        </Text>}
        <View style={courseGoals.length ==  0 ? {marginTop:20}:{marginTop:0} }><Button title="Add New List" onPress={()=> setOpenModal(true)}/></View>
        {courseGoals.length !== 0 && <Text style={styles.heading}>
        Your To-Do list
        </Text>}
     <FlatList data={courseGoals} renderItem={itemData=>(
       <GoalItem title={itemData.item.value} id={itemData.item.key} onDelete={removeGoal}/>
     ) }/>
    {courseGoals.length !== 0 && <Text style={{fontSize:12, color:'#ccc'}}>
        Tap the list to delete
        </Text>}
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  heading:{
    marginTop:10,
    fontSize:20,
    textAlign:'center'
  }
});
