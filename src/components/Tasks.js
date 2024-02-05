import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import TaskItems from "./TaskItems";
import AddTask from "./AddTask";

const Tasks = () => {
  const [taskList, setTaskList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Show Modal
  const showModalHandler = () => {
    setShowModal(true);
  };

  // Hide Modal
  const hideModalHandler = () => {
    setShowModal(false);
  };

  // Add Task
  const addTaskHandler = (task) => {
    setTaskList((prevTask) => [
      ...prevTask,
      { task, id: Math.random().toString() },
    ]);
    hideModalHandler();
  };

  // Delete Task
  const taskDeleteHandler = (id) => {
    setTaskList((currList) => currList.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddTask
        hideModalHandler={hideModalHandler}
        addTaskHandler={addTaskHandler}
        visible={showModal}
      />

      <Button title="Add Task" onPress={showModalHandler} />
      <View>
        <Text style={styles.border}> </Text>
        {taskList.length > 0 ? (
          <Text style={styles.textTitle}>Your Tasks : </Text>
        ) : (
          <Text style={styles.textTitle}>No Tasks : </Text>
        )}

        <View style={styles.taskWrapper}>
          {/* <FlatList
            data={taskList}
            renderItem={({ item, index }) => {
              return (
                <Text style={styles.taskItem} key={index}>
                  {item}
                </Text>
              );
            }}
            keyExtractor={(item, index) => {
              return index;
            }}
          /> */}
          <ScrollView>
            {taskList?.map((item, index) => (
              <TaskItems
                key={index}
                item={item}
                taskDeleteHandler={taskDeleteHandler}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },

  textTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
    color: "#5da9e9",
  },
  border: {
    borderBottomWidth: 1,
    borderColor: "#6c757d",
  },
  taskWrapper: {
    backgroundColor: "#f7f7ff",
    height: "auto",
    padding: 20,
    borderRadius: 2,
    marginTop: 10,
  },
});

export default Tasks;
