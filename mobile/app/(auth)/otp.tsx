import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import { SafeAreaView } from "react-native-safe-area-context";

const Otp = () => {
  const otpInput = useRef<any>(null);
  const [otpValue, setOtpValue] = useState<string>("");

  // Detect keyboard visibility
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // Countdown state
  const [countdown, setCountdown] = useState(30);
  const [isCounting, setIsCounting] = useState(true);

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

  // Countdown logic
  useEffect(() => {
    let timer: number;
    if (isCounting && countdown > 0) {
      timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);
    } else if (countdown === 0) {
      setIsCounting(false);
    }
    return () => clearTimeout(timer);
  }, [countdown, isCounting]);

  // Handlers
  const clearText = () => {
    otpInput.current?.clear();
    setOtpValue("");
  };

  const setText = () => {
    otpInput.current?.setValue("1234");
    setOtpValue("1234");
  };

  const resendCode = () => {
    // TODO: Add resend API call
    setCountdown(30);
    setIsCounting(true);
    console.log("Verification code resent");
  };

  return (
    <View className="h-screen flex flex-row justify-center">
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="w-full px-12 top-40"
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            scrollEnabled={isKeyboardVisible}
          >
            <View>
              {/* Header */}
              <View className="mb-8">
                <Text className="text-4xl font-semibold text-gray-900 text-center">
                  Email Verification
                </Text>
                <Text className="text-xl text-gray-500 text-center mt-3">
                  We’ve sent a 4-digit verification code to
                </Text>
                <Text className="text-2xl font-semibold text-center text-gray-800">
                  example@email.com
                </Text>

                {/* Resend text */}
                {isCounting ? (
                  <Text className="text-gray-500 text-lg text-center mt-3">
                    Didn’t receive the code?{" "}
                    <Text className="font-semibold text-gray-700">
                      Resend available in {countdown}s
                    </Text>
                  </Text>
                ) : (
                  <Text
                    className="text-gray-500 text-lg text-center mt-3 font-medium"
                  >
                    Didn’t receive the code?{" "}
                    <Text
                      className="text-blue-600 underline"
                      onPress={resendCode}
                    >
                      Resend code
                    </Text>
                  </Text>
                )}
              </View>

              {/* OTP Input */}
              <View className="w-full flex items-center justify-center mb-6">
                <OTPTextInput
                  ref={otpInput}
                  handleTextChange={(text: string) => setOtpValue(text)}
                  inputCount={4}
                  tintColor="#111111"
                />
              </View>

              {/* Buttons */}
              <View className="flex flex-row gap-4 justify-center items-center">
                <Text
                  onPress={clearText}
                  className="bg-gray-200 rounded px-5 py-3 font-medium text-gray-700 text-center"
                >
                  Clear
                </Text>
                <Text
                  onPress={setText}
                  className="bg-black rounded px-5 py-3 font-medium text-white text-center"
                >
                  Auto-Fill
                </Text>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Otp;
