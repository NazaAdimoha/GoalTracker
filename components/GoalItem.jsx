import { StyleSheet, Text, View } from "react-native"



const GoalItem = ({
    text,
    id,
    onDelete,

}) => {
  return (

        <View style={styles.goalItems}>
          <Text style={styles.goalItem}>{text}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    goalItems: {
        margin: 10,
        borderWidth: 1,
        borderColor: "#fa8072",
        backgroundColor: "#5e0acc",
        color: "#fff",
        padding: 16,
        borderRadius: 10,
      },
      goalItem: {
        color: "#fff",
      },
})
export default GoalItem