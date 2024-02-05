import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import { useState } from "react";

const AddTask = ({ addTaskHandler, hideModalHandler, visible }) => {
  const [task, setTask] = useState("");

  const inputHandler = (val) => {
    setTask(val);
  };

  const addTask = () => {
    if (!task) {
      return Alert.alert("Please Add Task");
    }
    addTaskHandler(task);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputHandler}
          style={styles.inputBox}
          placeholder="Add Your Task..."
        />
        <View style={styles.btnGroup}>
          <View style={styles.btn}>
            <Button onPress={addTask} title="Add Task" />
          </View>
          <View style={styles.btn}>
            <Button onPress={hideModalHandler} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: "80%",
    borderWidth: 1,
    paddingLeft: 15,
    borderColor: "#6c757d",
    padding: 3,
    borderRadius: 3,
  },
  btnGroup: {
    flexDirection: "row",
    marginTop: 20,
  },
  btn: {
    width: "35%",
    marginHorizontal: 20,
  },
});

export default AddTask;
