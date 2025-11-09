import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Eye, EyeOff } from "lucide-react-native";
import { Link } from "expo-router";

const Login: React.FC = () => {
  // Input states
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Visibility toggle state
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Validation message states
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  // Animation state for the password visibility icon
  const rotation = useSharedValue<number>(0);

  // Animated rotation for password icon
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  // Toggle password visibility
  const togglePassword = (): void => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, { duration: 200 });
    setShowPassword((prev) => !prev);
  };

  // Validate email input
  const validateEmail = (value: string): string => (!value ? "Email is required" : "");

  // Validate password input
  const validatePassword = (value: string): string => (!value ? "Password is required" : "");

  // Handle login submission
  const handleLogin = (): void => {
    const emailMsg = validateEmail(email);
    const passwordMsg = validatePassword(password);

    setEmailError(emailMsg);
    setPasswordError(passwordMsg);

    if (!emailMsg && !passwordMsg) {
      console.log("Logging in with:", { email, password });
      // TODO: Connect login API here
    }
  };

  return (
    <View className="flex relative items-center justify-center w-screen h-screen bg-white px-12">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex flex-col gap-6 w-full"
      >
        <View className="flex flex-col gap-3">

          {/* Email input field */}
          <View className="flex flex-col">
            <Text className="font-semibold mb-2">Email</Text>
            <TextInput
              className="border border-gray-400 rounded-md min-w-[250px] h-[40px] pl-[12px] px-3"
              placeholder="johndoe@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError(validateEmail(text));
              }}
            />
            {emailError ? <Text className="text-red-500 mt-1">{emailError}</Text> : null}
          </View>

          {/* Password input field */}
          <View className="flex flex-col">
            <Text className="font-semibold mb-2">Password</Text>
            <View className="flex flex-row justify-between items-center border border-gray-400 rounded-md min-w-[250px] h-[40px] relative overflow-hidden">
              <TextInput
                placeholder="password"
                placeholderTextColor="gray"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="none"
                className="grow w-[90%] pl-3 pr-12"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  if (passwordError) setPasswordError(validatePassword(text));
                }}
                style={{
                  paddingVertical: Platform.OS === "ios" ? 12 : 0,
                  textAlignVertical: "center",
                }}
              />
              <Pressable onPress={togglePassword} className={'absolute right-3'}>
                <Animated.View style={animatedStyle}>
                  {showPassword ? <Eye size={18} color="gray" /> : <EyeOff size={18} color="gray" />}
                </Animated.View>
              </Pressable>
            </View>

            {/* Forgot password link */}
            <View className="flex flex-row justify-between mt-1">
              {passwordError ? <Text className="text-red-500">{passwordError}</Text> : <View />}
              <Text className="text-blue-500 underline">Forgot password?</Text>
            </View>
          </View>

          {/* Login and Google buttons */}
          <View className="flex flex-col gap-3 mt-2">
            <TouchableOpacity
              activeOpacity={0.8}
              className="flex items-center justify-center min-w-[250px] bg-black h-[40px] rounded-md"
              onPress={handleLogin}
            >
              <Text className="font-bold text-white">Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              className="flex flex-row items-center justify-center gap-3 min-w-[250px] border border-black h-[40px] rounded-md"
            >
              <Image
                source={require("../../assets/images/google.png")}
                style={{ width: 16, height: 16 }}
                resizeMode="cover"
              />
              <Text className="font-bold text-black">Continue with Google</Text>
            </TouchableOpacity>

            {/* Navigation link to Register */}
            <View className="w-full flex flex-row justify-center gap-1 mt-3 mb-6">
              <Text>Click here to</Text>
              <Link href="/register">
                <Text className="text-blue-500 underline">create new account</Text>
              </Link>
            </View>
          </View>

        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
