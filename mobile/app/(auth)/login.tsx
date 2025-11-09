import React, { useState, useEffect } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Eye, EyeOff } from "lucide-react-native";
import { Link } from "expo-router";
import {
  useFonts,
  ImperialScript_400Regular,
} from "@expo-google-fonts/imperial-script";
import { SafeAreaView } from "react-native-safe-area-context";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");


  //  Detect keyboard visibility
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setKeyboardVisible(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const rotation = useSharedValue<number>(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const togglePassword = (): void => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, {
      duration: 200,
    });
    setShowPassword((prev) => !prev);
  };

  const validateEmail = (value: string): string =>
    !value ? "Email is required" : "";

  const validatePassword = (value: string): string =>
    !value ? "Password is required" : "";

  const handleLogin = (): void => {
    const emailMsg = validateEmail(email);
    const passwordMsg = validatePassword(password);
    setEmailError(emailMsg);
    setPasswordError(passwordMsg);
    if (!emailMsg && !passwordMsg) {
      console.log("Logging in with:", { email, password });
    }
  };

  const [fontsLoaded] = useFonts({
    ImperialScript_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex relative items-center justify-center w-screen h-screen ">
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="w-full px-12"
        >
          {/*  ScrollView is only scrollable when keyboard is visible */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyboardShouldPersistTaps={"handled"}
            scrollEnabled={isKeyboardVisible}
          >
            <View className="flex flex-col gap-3 ">
              <View className="flex flex-row justify-center mb-6">
                <Image
                  source={require("../../assets/images/branding.png")}
                  style={{ width: 156, height: 53 }}
                  resizeMode="cover"
                />
              </View>
              <View className="flex flex-row justify-center mb-3">
                <Text className="text-6xl px-3 font-bold font-imperial-script">
                  Welcome back
                </Text>
              </View>

              {/* Email */}
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
                {emailError ? (
                  <Text className="text-red-500 mt-1">{emailError}</Text>
                ) : null}
              </View>

              {/* Password */}
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
                      if (passwordError)
                        setPasswordError(validatePassword(text));
                    }}
                    style={{
                      paddingVertical: Platform.OS === "ios" ? 12 : 0,
                      textAlignVertical: "center",
                    }}
                  />
                  <Pressable onPress={togglePassword} className={"absolute right-3"}>
                    <Animated.View style={animatedStyle}>
                      {showPassword ? (
                        <Eye size={18} color="gray" />
                      ) : (
                        <EyeOff size={18} color="gray" />
                      )}
                    </Animated.View>
                  </Pressable>
                </View>

                <View className="flex flex-row justify-between mt-1">
                  {passwordError ? (
                    <Text className="text-red-500">{passwordError}</Text>
                  ) : (
                    <View />
                  )}
                  <Text className="text-blue-500 underline">
                    Forgot password?
                  </Text>
                </View>
              </View>

              {/* Buttons */}
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
                  <Text className="font-bold text-black">
                    Continue with Google
                  </Text>
                </TouchableOpacity>

                <View className="w-full flex flex-row justify-center gap-1 mt-3 mb-6">
                  <Text>Click here to</Text>
                  <Link href="/register">
                    <Text className="text-blue-500 underline">
                      create new account
                    </Text>
                  </Link>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Login;
