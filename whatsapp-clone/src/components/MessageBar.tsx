import { memo, useCallback, useState } from "react";
import useMessagingContext from "../hooks/useMessagingContext";
import type { IMessage } from "../types";
import { generateNewUUID, toCustomISOString } from "../assets/utils";
import { mockData } from "../constants";

function MessageBar() {
  const [messageValue, setMessageValue] = useState("");
  const {
    setMessageData,
    activeConversation,
    setConversationData,
    setLastMessage,
  } = useMessagingContext();
  const onMessageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessageValue(e.target.value);
    },
    []
  );
  const onClickSend = useCallback(() => {
    if (!activeConversation) return;
    if (!messageValue) return;
    const reciever = activeConversation.users.filter(
      (user) => user !== mockData.primaryUserId
    )[0];
    const newMessage: IMessage = {
      content: messageValue,
      contentType: "text",
      conversationId: activeConversation?.id || "",
      createdAt: toCustomISOString(new Date()),
      id: generateNewUUID(),
      sender: mockData.primaryUserId,
      reciever,
    };
    setMessageData((prev) => [...prev, newMessage]);
    setConversationData((prev) => {
      const conversationIndex = prev.findIndex(
        (value) => value.id === activeConversation.id
      );
      if (conversationIndex === -1) return prev;
      else {
        prev[conversationIndex] = {
          ...prev[conversationIndex],
          lastMessage: newMessage,
        };
        return [...prev];
      }
    });
    setMessageValue("");
    setLastMessage(newMessage.id);
  }, [activeConversation, messageValue]);
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onClickSend();
      }
    },
    [onClickSend]
  );
  return (
    <div className="w-full flex gap-1.5 px-2 py-1 bg-gray-500">
      <input
        value={messageValue}
        onChange={onMessageChange}
        className="border-1 border-green-700 rounded-md w-full px-2 py-1 bg-gray-700 text-white"
        onKeyDown={onKeyDown}
      />
      <button
        className="py-1 px-2 flex justify-center items-center text-white font-medium text-lg bg-green-700"
        onClick={onClickSend}
      >
        Send
      </button>
    </div>
  );
}

export default memo(MessageBar);
