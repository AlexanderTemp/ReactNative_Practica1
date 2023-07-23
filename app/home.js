import { Text, SafeAreaView, ScrollView, View, Image } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import IconMaterial from "react-native-vector-icons/MaterialCommunityIcons";
import Toast from "react-native-root-toast";
import menu from "../assets/icons/menu.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const maxLength = 60;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomArray = Array(33)
  .fill()
  .map(() => getRandomInt(15, maxLength));

const foreground = "#72B393";

const HeaderLeft = () => {
  return (
    <TouchableOpacity
      onPress={() =>
        Toast.show("Hola mundo", { duration: Toast.durations.LONG })
      }
    >
      <Icon name="menu" size={32} color={foreground} />
    </TouchableOpacity>
  );
};
const HeaderRight = () => {
  return (
    <View className="flex flex-row gap-4 items-center ">
      <View className="flex flex-row gap-3 justify-center items-center">
        <Icon name="search" size={25} color={foreground} />
        <Icon name="notifications" size={23} color={foreground} />
      </View>
      <View className="bg-neutral-300" style={{ width: 2, height: 25 }} />
      <View className="flex flex-row gap-4 items-center">
        <View>
          <Text className="text-white">Nikitin</Text>
          <Text className={`color-[#72b393] text-sm `}>@nikitinteam</Text>
        </View>
        <View
          className="rounded-full relative bg-black justify-center items-center"
          style={{ width: 35, height: 35 }}
        >
          <Text className="text-white text-lg">N</Text>
          <View
            className="bg-[#28281E] justify-center items-center rounded-full absolute top-0 right-0"
            style={{ width: 13, height: 13 }}
          >
            <View
              className="bg-[#DD771C] rounded-full"
              style={{ width: 8, height: 8 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#0F1815]">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#0F1815" },
          headerShadowVisible: false,
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderRight />,
          headerTitle: "",
        }}
      />

      <Hero />
    </SafeAreaView>
  );
}

const Hero = () => {
  return (
    <View>
      <View className="flex-row px-5 justify-between items-center mt-10 mb-4">
        <View className=" items-start">
          <Text className="text-3xl font-semibold color-white ">
            Total Profit
          </Text>
          <Text className="text-sm text-neutral-400">For this quarter</Text>
        </View>
        <View className="flex-row gap-4 items-center">
          <TouchableOpacity className="bg-[#261E17]  py-2 px-3 rounded-xl">
            <Text className="text-[#DE8727] text-base">Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <IconMaterial name="dots-horizontal" size={28} color="#DB7B1F" />
          </TouchableOpacity>
        </View>
      </View>
      <View className=" my-4">
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {visualCardArray.map((elemVisual) => (
            <VisualCard
              key={elemVisual.id}
              color={elemVisual.color}
              title={elemVisual.title}
              legend={elemVisual.legend}
              value={elemVisual.value}
            />
          ))}
        </ScrollView>
      </View>
      <SectionDolars />
    </View>
  );
};

const visualCardArray = [
  {
    id: "visual_1",
    color: "#77E3AF",
    title: "$ 134,998.823",
    legend: "Total Profit",
    value: "5,62",
  },
  {
    id: "visual_2",
    color: "#C6492B",
    title: "128475",
    legend: "Active",
    value: "15,21",
  },
  {
    id: "visual_3",
    color: "#FA9C2D",
    title: "128475",
    legend: "Default",
    value: "7,84",
  },
];

const VisualCard = ({ color, title, legend, value }) => {
  return (
    <View
      className=" p-4 mx-3 justify-between relative"
      style={{
        borderWidth: 3,
        borderColor: color,
        width: 250,
        height: 160,
        borderRadius: 35,
      }}
    >
      <View className="gap-2">
        <Text className="text-2xl text-white font-semibold">{title}</Text>
        <Text className="text-sm" style={{ color: color }}>
          {legend}
        </Text>
      </View>
      <View className="flex-row justify-end">
        <View
          className="rounded-xl px-2 justify-center items-center"
          style={{
            backgroundColor: color,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View className="flex-row items-center gap-1">
            <Text className="text-base">{value}%</Text>
            <Icon name="arrow-up" size={18} />
          </View>
        </View>
      </View>

      <View className="absolute bottom-0">
        <BackgroundDesign color={color} />
      </View>
    </View>
  );
};

const BackgroundDesign = ({ color }) => {
  return (
    <View
      className="flex-row gap-1 items-end overflow-hidden"
      style={{ height: maxLength, width: 250, borderRadius: 33 }}
    >
      {randomArray.map((elemRandom, i) => {
        return (
          <View
            key={i}
            style={{
              width: 4,
              height: elemRandom,
              backgroundColor: color,
              borderRadius: 15,
              opacity: 0.2,
            }}
          />
        );
      })}
    </View>
  );
};

const SectionDolars = () => {
  return (
    <View className="gap-3 px-4">
      <View className="gap-2">
        <View className="gap-2 mx-5 flex-row justify-center">
          <View className="basis-3/5 bg-[#27201A] rounded-2xl items-end justify-center p-3 flex-row gap-2">
            <Text className="text-[#FFA12F] ">USD</Text>
            <Text className="text-[#FFA12F] text-3xl font-semibold">
              235.00
            </Text>
          </View>
          <View className="basis-2/5 justify-center items-center bg-[#FD9E2E] rounded-2xl p-4">
            <Text className="text-xl" style={{ color: "#0F1815" }}>
              Withdraw
            </Text>
          </View>
        </View>
        <View className="flex-row  gap-2 w-full">
          <SpanSectionDolars amount={"10.00"} />
          <SpanSectionDolars amount={"15.00"} />
          <SpanSectionDolars amount={"20.00"} />
          <SpanSectionDolars amount={"25.00"} />
        </View>
      </View>
      <View className="border p-5 border-[#20302D] rounded-3xl relative">
        <Text className="text-base font-light text-neutral-300">
          The minimum widhdrawal amount is 10 USD. To increase the amount, go to
          the payment settings and your amount.
        </Text>
        <View className="p-2 rounded-full bg-[#0F1815] absolute -top-3 -left-3">
          <Icon name="information-circle-outline" size={23} color="#686C6B" />
        </View>
      </View>
    </View>
  );
};

const SpanSectionDolars = ({ amount }) => {
  return (
    <View className="bg-[#221F1A] rounded-3xl p-3 text-lg text-[#FFA12F] justify-center items-center">
      <Text>$ {amount}</Text>
    </View>
  );
};
