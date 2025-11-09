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
import { checkPasswordStrength, getPasswordColor } from "@/utils/password";
const Register: React.FC = () => {

  // Form input states
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Visibility toggles
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  // Validation and feedback
  const [usernameError, setUsernameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmError, setConfirmError] = useState<string>("");
  const [passwordStrength, setPasswordStrength] = useState<string>("");

  // Reanimated icon rotation values
  const rotation = useSharedValue(0);
  const rotationConfirm = useSharedValue(0);

  // Animated styles for password icons
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));
  const animatedStyleConfirm = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationConfirm.value}deg` }],
  }));

  // Toggle password visibility
  const togglePassword = () => {
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, { duration: 200 });
    setShowPassword((prev) => !prev);
  };

  // Toggle confirm password visibility
  const toggleConfirmPassword = () => {
    rotationConfirm.value = withTiming(rotationConfirm.value === 0 ? 180 : 0, {
      duration: 200,
    });
    setShowConfirm((prev) => !prev);
  };

  // Field validations
  const validateUsername = (value: string) => (!value ? "Username is required" : "");
  const validateEmail = (value: string) => (!value ? "Email is required" : "");
  const validatePassword = (value: string) => (!value ? "Password is required" : "");
  const validateConfirm = (value: string) =>
    value !== password ? "Passwords do not match" : "";

  // Handle registration action
  const handleRegister = (): void => {
    const uMsg = validateUsername(username);
    const eMsg = validateEmail(email);
    const pMsg = validatePassword(password);
    const cMsg = validateConfirm(confirmPassword);

    setUsernameError(uMsg);
    setEmailError(eMsg);
    setPasswordError(pMsg);
    setConfirmError(cMsg);

    // Only check strength if the password is not empty
    setPasswordStrength(password ? checkPasswordStrength(password) : "");

    if (!uMsg && !eMsg && !pMsg && !cMsg) {
      console.log("Registering:", { username, email, password });
      // TODO: Connect to API here
    }
  };

  return (
    <View className="flex items-center justify-center w-screen h-screen bg-white px-12">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex flex-col gap-6 w-full"
      >
        <View className="flex flex-col gap-3">

          <View className={'flex flex-row justify-center mb-6'}>
            <Image
              source={require("../../assets/images/branding.png")}
              style={{ width: 156, height: 53 }}
              resizeMode="cover"
            />
          </View>
          <View className={'flex flex-row justify-center mb-6'}>
            <Text className="text-6xl px-3 font-bold font-imperial-script">Register now</Text>
          </View>

          {/* Username Field */}
          <View className="flex flex-col">
            <Text className="font-semibold mb-2">Username</Text>
            <TextInput
              className="border border-gray-400 rounded-md min-w-[250px] h-[40px] pl-[12px] px-3"
              placeholder="Enter username"
              placeholderTextColor="gray"
              value={username}
              onChangeText={(text) => {
                setUsername(text);
                if (usernameError) setUsernameError(validateUsername(text));
              }}
            />
            {usernameError ? <Text className="text-red-500 mt-1">{usernameError}</Text> : null}
          </View>

          {/* Email Field */}
          <View className="flex flex-col">
            <Text className="font-semibold mb-2">Email</Text>
            <TextInput
              className="border border-gray-400 rounded-md min-w-[250px] h-[40px] pl-[12px] px-3"
              placeholder="Enter email"
              placeholderTextColor="gray"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError(validateEmail(text));
              }}
            />
            {emailError ? <Text className="text-red-500 mt-1">{emailError}</Text> : null}
          </View>

          {/* Password Field */}
          <View className="flex flex-col">
            <Text className="font-semibold mb-2">Password</Text>
            <View className="flex flex-row justify-between items-center border border-gray-400 rounded-md min-w-[250px] h-[40px] relative overflow-hidden">
              <TextInput
                placeholder="Enter password"
                placeholderTextColor="gray"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="none"
                className="grow w-[90%] pl-3 pr-12"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);
                  setPasswordStrength(text ? checkPasswordStrength(text) : "");
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
            {passwordError ? <Text className="text-red-500 mt-1">{passwordError}</Text> : null}
            {password && passwordStrength ? (
              <Text className="mt-1" style={{ color: getPasswordColor(passwordStrength) }}>
                {passwordStrength}
              </Text>
            ) : null}
          </View>

          {/* Confirm Password Field */}
          <View className="flex flex-col">
            <Text className="font-semibold mb-2">Confirm Password</Text>
            <View className="flex flex-row justify-between items-center border border-gray-400 rounded-md min-w-[250px] h-[40px] relative overflow-hidden">
              <TextInput
                placeholder="Confirm password"
                placeholderTextColor="gray"
                secureTextEntry={!showConfirm}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="none"
                className="grow w-[90%] pl-3 pr-12"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);
                  if (confirmError) setConfirmError(validateConfirm(text));
                }}
                style={{
                  paddingVertical: Platform.OS === "ios" ? 12 : 0,
                  textAlignVertical: "center",
                }}
              />
              <Pressable onPress={toggleConfirmPassword} className={'absolute right-3'}>
                <Animated.View style={animatedStyleConfirm}>
                  {showConfirm ? <Eye size={18} color="gray" /> : <EyeOff size={18} color="gray" />}
                </Animated.View>
              </Pressable>
            </View>
            {confirmError ? <Text className="text-red-500 mt-1">{confirmError}</Text> : null}
          </View>

          {/* Register Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex items-center justify-center min-w-[250px] bg-black h-[40px] rounded-md mt-3"
            onPress={handleRegister}
          >
            <Text className="font-bold text-white">Register</Text>
          </TouchableOpacity>

          {/* Register with Google */}
          <TouchableOpacity
            activeOpacity={0.5}
            className="flex flex-row items-center justify-center gap-3 min-w-[250px] border border-black h-[40px] rounded-md mt-2"
          >
            <Image
              source={require("../../assets/images/google.png")}
              style={{ width: 16, height: 16 }}
              resizeMode="cover"
            />
            <Text className="font-bold text-black">Register with Google</Text>
          </TouchableOpacity>

          {/* Navigation to Login */}
          <View className="w-full flex flex-row justify-center gap-1 mt-3 mb-6">
            <Text>Already have an account?</Text>
            <Link href="/login">
              <Text className="text-blue-500 underline">Login</Text>
            </Link>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
