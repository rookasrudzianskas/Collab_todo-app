import React from 'react';
import {TouchableOpacity, View} from "react-native";
import tw from "tailwind-react-native-classnames";
import {AntDesign, Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {Text} from "../Themed";

const ProjectItem = () => {
    return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={tw``}>
                {/*  tasklist */}
                <View style={tw`flex flex-col`}>
                    <View style={tw`flex flex-row items-center p-2`}>
                        <View style={tw`bg-gray-700 p-2 rounded-xl`}>
                            <MaterialCommunityIcons name="file-outline" size={40} color="gray" />
                        </View>
                        <View style={tw`flex flex-col`}>
                            <View style={tw`flex flex-row`}>
                                <Text style={tw`text-2xl font-medium ml-2`}>Title lorem ipsum</Text>
                                <Text style={tw`ml-2 text-xl text-gray-500`}>2 h ago</Text>
                            </View>

                            <View style={tw`flex flex-row ml-3 mt-1 items-center`}>
                                <View style={tw`flex flex-row items-center bg-gray-600 px-2 py-1 rounded-full border border-gray-400`}>
                                    <Entypo name="browser" size={22} color="lightgray" />
                                    <Text style={tw`ml-2`}>Date</Text>
                                </View>

                                <View style={tw`flex flex-row items-center mx-3 bg-gray-600 px-2 py-1 rounded-full border border-gray-400`}>
                                    <Ionicons name="person" size={22} color="lightgray" />
                                    <Text style={tw`ml-2`}>Assign</Text>
                                </View>

                                <View style={tw`flex flex-row items-center ml-0 bg-gray-600 px-2 py-1 rounded-full border border-gray-400`}>
                                    <AntDesign name="tag" size={22} color="lightgray" />
                                    <Text style={tw`ml-2`}>Tag</Text>
                                </View>
                            </View>
                        </View>



                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProjectItem;
