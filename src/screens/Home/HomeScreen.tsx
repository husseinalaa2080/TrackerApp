import React, { useEffect, useCallback, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";
import { SwipeListView } from "react-native-swipe-list-view";
import { useDispatch, useSelector } from "react-redux";
import { getAllCurrencyAction } from "../../Redux/actions/Types/getAllCurrencyAction";
import { addCurrencyAction } from "../../Redux/actions/Types/addCurrencyAction";

// List Data
const HomeScreen: React.FC = ({ navigation }: props) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    dispatch(getAllCurrencyAction());
    console.log(listData);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getAllCurrencyAction(true)).then(() => {
      dispatch(addCurrencyAction());
      setRefreshing(false);
      console.log("Im data after refreshing");
    });
  };
// Call Data All Currency Reducer
  const allCurrency = useSelector(
    (state) => state.getAllCurrencyReducer.success
  );
  const allCurrencyLoading = useSelector(
    (state) => state.getAllCurrencyReducer.loading
  );
  const allCurrencyFail = useSelector(
    (state) => state.getAllCurrencyReducer.failure
  );

  const addedItem = useSelector((state) => state.addCurrencyReducer.success);

  useEffect(() => {
    if (addedItem) {
      var temp = [...listData, addedItem];
      setListData(temp);
    }
    console.log("item added successfully in Home Screen File");
  }, [addedItem]);

  useEffect(() => {
    const onlyTwo = allCurrency.slice(0, 2);
    setListData([...onlyTwo]);
    console.log("rendered Two  Currancy at Home Screen");
  }, [allCurrencyLoading, allCurrencyFail, allCurrency]);

  const RenderItem: React.FC = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.leftSectionContainer}>
          <Image source={{ uri: item.image }} style={styles.iconImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title1}>{item.name}</Text>
            <Text style={styles.title2}>{item.id}</Text>
          </View>
        </View>
        <View style={styles.rightSectionContainer}>
          <Text style={styles.title1}>{`$${item.current_price}`}</Text>
          <Text
            style={{
              ...styles.title3,
              color: item.price_change_percentage_24h > 0 ? "green" : "red",
            }}
          >{`${item.price_change_percentage_24h}%`}</Text>
        </View>
      </View>
    );
  };

  const deleteItem = (data) => {
    console.log(data.index);
    var temp = listData.filter((item, index) => index !== data.index);
    setListData([...temp]);
  };

  // Render Hidden Item
  const renderHiddenItem = (data) => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn]}>
        <TouchableOpacity
          style={styles.swipeBtn}
          onPress={() => {
            Alert.alert("Delete ", "Are you sure delete this Item?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  deleteItem(data);
                },
              },
            ]);
          }}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <SwipeListView
        data={listData}
        renderItem={({ item }) => {
          return <RenderItem item={item} />;
        }}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-120}
        onEndReachedThreshold={0.5}
        onEndReached={async () => {}}
        useNativeDriver={false}
        disableRightSwipe
        ListFooterComponent={() => (
          <Text
            onPress={() => navigation.navigate("AddCurrency")}
            style={styles.footerTitle}
          >
            + Add a Cryptocurrency
          </Text>
        )}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

export default HomeScreen;
