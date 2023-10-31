import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  //dimension of the screen
  // const { width, height } = Dimensions.get("window");
  const [goals, setGoals] = useState([]);
  
  // const handleTextDisplay = (enteredText) => {
  //   setEnteredText(enteredText);
  // };
  const addGoalHandler = (enteredtext) => {
    console.log(enteredtext);
    setGoals((currentGoal) => [...currentGoal, {text: enteredtext, id: Math.random().toString()}]);
    setEnteredText("");
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoalInput={addGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList 
        data={goals}
        renderItem={
          (itemData) => {
            return <GoalItem text={itemData.item.text} />
          }
        }
        keyExtractor={(item, index) => item.id}
        
        />
      </View>
      {/* display an image */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 2,
    borderBottomColor: "#fff1ea",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#fff1ea",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  listContainer: {
    flex: 5,
  },
});
