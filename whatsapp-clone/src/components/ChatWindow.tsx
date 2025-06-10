import { useMemo } from "react";
import useMessagingContext from "../hooks/useMessagingContext";
import MessageView from "./MessageView";

function ChatWindow() {
  const { activeConversation, messageData } = useMessagingContext();
  const messages = useMemo(
    () =>
      messageData.filter(
        (message) => message.conversationId === activeConversation?.id
      ),
    [activeConversation, messageData]
  );
  return (
    <div className="grow-2 overflow-y-scroll flex flex-col gap-1.5 px-2 py-1 bg-green-200 w-full">
      {messages?.map((message) => (
        <MessageView message={message} key={message.id} />
      ))}
    </div>
  );
}

export default ChatWindow;
