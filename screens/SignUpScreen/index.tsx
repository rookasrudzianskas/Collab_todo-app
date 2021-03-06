import React, {useState} from 'react';
import {
    Image,
    Text,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    TouchableOpacity, ActivityIndicator, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BlurView } from 'expo-blur';
import tw from "tailwind-react-native-classnames";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {gql, useMutation} from "@apollo/client";


const SignUpScreen = () => {

    const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';
    const text = 'Hello, my container is blurring contents underneath!';
    // ------------------------------------------ mutations --------------------------------------
    const SIGN_UP_MUTATION = gql`
        mutation signUp($email: String!, $password: String!, $name: String!) {
            signUp(input: {email: $email, password: $password, name: $name}){
                token
                user {
                    id
                    name
                    email
                }
            }
        }
    `;

    // ------------------------------------------ end of mutations --------------------------------------


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigation = useNavigation();
    // @ts-ignore
    const [signUp, { data, error, loading }] = useMutation(SIGN_UP_MUTATION);
    if(error) {
        Alert.alert("Error signing up, please try again 🔥");
    }

    if(data) {
        // save token and redirect home
        AsyncStorage.setItem('token', data.signUp.token).then(() => navigation.navigate('Home'));
    }
    // console.log(data);
    // console.log(error);
    // mutation[0] : a function to trigger the mutation
    // mutation[1] : result object
    // {data, error, loading} object


    const onSubmit = () => {
        // we will do the logic here
        // console.log("ROKAS")
        signUp({variables: { name, email, password }}).then();

    }

    return (
    // @ts-ignore
            <View>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <>
                        <View style={tw`mt-32 p-10`}>

                            <Input
                                placeholder='Your Name'
                                value={name}
                                onChangeText={setName}
                                style={{ color: 'white' }}
                                leftIcon={
                                    <Icon
                                        style={{marginRight: 10}}
                                        name='user'
                                        size={24}
                                        color='white'
                                    />

                                }
                            />

                            <Input
                                placeholder='Username or Email'
                                value={email}
                                onChangeText={setEmail}
                                style={{ color: 'white' }}
                                autoCapitalize='none'
                                leftIcon={
                                    <Icon
                                        style={{marginRight: 10}}
                                        name='user'
                                        size={24}
                                        color='white'
                                    />

                                }
                            />



                            <Input
                                placeholder='Password'
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                style={{ color: 'white' }}
                                autoCapitalize='none'
                                leftIcon={
                                    <Icon
                                        style={{marginRight: 10}}
                                        name='lock'
                                        size={24}
                                        color='white'
                                    />

                                }
                            />

                        </View>

                        <View style={tw` flex items-center justify-center`}>
                            <Text style={tw`text-white`}>Forgot password? Reset it <Text style={tw`text-red-400`}>here</Text></Text>
                        </View>

                        <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
                            <View style={tw`flex items-center mt-5 flex-row justify-center bg-red-400 m-12 py-2 rounded-xl`}>
                                <AntDesign name="login" size={24} style={tw`text-white mr-2`} color="white" />
                                {loading ? (
                                    <ActivityIndicator color="#00ff00" />
                                ) : (
                                    <Text style={tw`text-white font-bold`}>Sign Up!</Text>
                                )}
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity   onPress={() => navigation.navigate('SignInScreen')} activeOpacity={0.8} >
                            <View style={tw`flex items-center -mt-8 flex-row justify-center bg-red-600 mx-12 py-2 rounded-xl`}>
                                <AntDesign name="login" size={24} style={tw`text-white mr-2`} color="white" />
                                <Text style={tw`text-white font-bold`}>Already have an account? Sign In!</Text>
                            </View>
                        </TouchableOpacity>

                       <View style={tw`mt-48`}>
                           <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
                               <View style={tw`flex items-center flex-row justify-center bg-blue-400 mx-12 my-3 py-2 rounded-xl`}>
                                   <AntDesign name="google" size={24}  style={tw`text-white mr-2`} color="white" />
                                   <Text style={tw`text-white font-bold`}>Login with Google</Text>
                               </View>
                           </TouchableOpacity>

                           <TouchableOpacity onPress={onSubmit} activeOpacity={0.8}>
                               <View style={tw`flex items-center flex-row justify-center bg-gray-800 mx-12 py-2 rounded-xl`}>
                                   <AntDesign name="apple1" size={24} style={tw`text-white mr-2`} color="white" />
                                   <Text style={tw`text-white font-bold`}>Login with apple</Text>
                               </View>
                           </TouchableOpacity>
                       </View>
                    </>
                </TouchableWithoutFeedback>
            </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    blurContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '600'
    },
});
