import {useUserStore} from "@/context/userContext";
import {Redirect} from "expo-router";

const Index = () => {

  const isLoggedIn = useUserStore((state) => state.loggedIn);
  if (isLoggedIn) {
    return <Redirect href="/(main)" />;
  }
  return <Redirect href="/(auth)" />;
};
export default Index;