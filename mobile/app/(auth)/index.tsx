import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image, Platform,
  KeyboardAvoidingView,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Eye, EyeOff } from "lucide-react-native";
import {Link} from "expo-router";

const Login = () => {
  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);
  const rotation = useSharedValue(0); // animation value

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const togglePassword = () => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, {
      duration: 200,
    });
    setShowPassword((prev) => !prev);
  };

  return (

      <View className="flex relative items-center justify-center w-screen h-screen bg-white px-12">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex flex-col gap-6 w-full"
        >

          <View className="flex flex-col gap-3">
            {/* Email input */}
            <View className="flex flex-col gap-3">
              <Text className="font-semibold">Email</Text>
              <TextInput
                  className="border border-gray-400 rounded-md min-w-[250px] h-[40px] pl-[12px] px-3"
                  placeholder="johndoe@example.com"
                  placeholderTextColor="gray"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
              />
            </View>

            {/* Password input */}
            <View className="flex flex-col">
              <Text className="font-semibold mb-3">Password</Text>

              <View className="flex flex-row justify-between items-center border border-gray-400 rounded-md min-w-[250px] h-[40px] px-3 mb-2">
                <TextInput
                    placeholder="password"
                    placeholderTextColor="gray"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    className={'grow'}
                    style={{
                      paddingVertical: Platform.OS === 'ios' ? 12 : 0,
                      textAlignVertical: 'center',
                      paddingLeft: 0,     // remove default left padding
                      paddingRight: 0,    // remove default right padding (optional)
                    }}
                />

                {/* Eye icon toggle */}
                <Pressable onPress={togglePassword} className={'ml-2'}>
                  <Animated.View style={animatedStyle}>
                    {showPassword ? (
                        <Eye className="text-gray-500" size={18} />
                    ) : (
                        <EyeOff className="text-gray-500" size={18} />
                    )}
                  </Animated.View>
                </Pressable>
              </View>
              <View className={"w-full flex flex-row-reverse"}>
                <Text className={"text-blue-500 underline"}>Forgot password?</Text>
              </View>

            </View>

            {/* Buttons */}
            <View className="flex flex-col gap-3 mt-2">

              <TouchableOpacity activeOpacity={0.8} className="flex items-center justify-center min-w-[250px] bg-black h-[40px] rounded-md">
                <Text className="font-bold text-white">Login</Text>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.5} className="flex flex-row items-center justify-center gap-3 min-w-[250px] border border-black h-[40px] rounded-md mb-3">
                <Image
                    source={require("../../assets/images/google.png")}
                    style={{ width: 16, height: 16 }}
                    resizeMode="cover"
                />
                <Text className="font-bold text-black">Continue with Google</Text>
              </TouchableOpacity>


              <View className={"w-full flex flex-row justify-center gap-1 mb-6"}>
                <Text className={""}>Click here to</Text>
                <Link href={"/register"}><Text className={"text-blue-500 underline"}>create new account</Text></Link>
              </View>

            </View>
          </View>

        </KeyboardAvoidingView>
      </View>
  );
};

export default Login;
