import { useContext } from "react";
import { MessagingContext } from "../App";

const useMessagingContext = () => {
  const context = useContext(MessagingContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default useMessagingContext;
