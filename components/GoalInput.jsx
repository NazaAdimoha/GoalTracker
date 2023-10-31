import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({
    onAddGoalInput,
    setGoals,
}) => {
  const [enteredtext, setEnteredText] = useState("");
  const handleTextDisplay = (enteredText) => {
    setEnteredText(enteredText);
  };

  return (
  
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your Goal"
          onChangeText={handleTextDisplay}
          // value={text}
        />
        <Button title="Add Goal" onPress={onAddGoalInput} />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoalInput;
