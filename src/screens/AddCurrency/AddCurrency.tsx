import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { addCurrencyAction } from "../../Redux/actions/Types/addCurrencyAction";
import { useDispatch, useSelector } from "react-redux";

// Add Currency
const AddCurrency = ({ navigation }) => {
  const data = useSelector((state) => state.getAllCurrencyReducer.success);
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState("");


  const addAction = () => {
    var temp;
    for (var i in data) {
      if (currency == data[i].symbol) {
        temp = data[i];
        console.log(temp); 
      }
    }
    dispatch(addCurrencyAction(temp));
    navigation.navigate("HomeScreen");
    console.log("added Currancy is ok from addCurrancy File");
  };
// Add
  return (
    <View style={styles.screenContainer}>
      <View style={styles.backButtonContainer}>
        <Text
          onPress={() => navigation.goBack()}
          style={styles.backButtomTitle}
        >
          {"< Back to List"}
        </Text>
      </View>

      <Text style={styles.title}>{"Add a CryptoCurrency"}</Text>
      <View style={styles.spacer} />
      <TextInput
        placeholder="Use a name or ticker symbol..."
        style={styles.inputStyle}
        value={currency}
        onChangeText={setCurrency}
      />
      <View style={styles.spacer} />
      <TouchableOpacity style={styles.buttonContainer} onPress={addAction}>
        <Text style={styles.buttonTitle}>Add</Text>
      </TouchableOpacity>
      <View style={styles.spacer} />
    </View>
  );
};

export default AddCurrency;
