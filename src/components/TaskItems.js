import { View, Text, StyleSheet, Pressable } from "react-native";

const TaskItems = ({ item, taskDeleteHandler }) => {
  return (
    <Pressable onPress={taskDeleteHandler.bind(this, item?.id)}>
      <View>
        <Text style={styles.taskItem}>{item?.task}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    backgroundColor: "#b6ccfe",
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "500",
    borderRadius: 25,
    color: "#212529",
  },
});

export default TaskItems;
