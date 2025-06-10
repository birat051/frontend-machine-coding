import { useEffect, useRef } from "react";
import { mockData } from "../constants";
import useMessagingContext from "../hooks/useMessagingContext";
import type { IMessage } from "../types";

interface MessageViewProps {
  message: IMessage;
}

function MessageView(props: MessageViewProps) {
  const { message } = props;
  const { lastMessage, setLastMessage } = useMessagingContext();
  const messagingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (message.id === lastMessage && messagingRef?.current) {
      setTimeout(() => {
        messagingRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
      setLastMessage("");
    }
  }, [lastMessage, message]);
  return (
    <div
      ref={messagingRef}
      className={`w-full ${
        message.sender !== mockData.primaryUserId
          ? "justify-start"
          : "justify-end"
      } flex`}
      id={`message-${message.id}`}
    >
      <div className={`max-w-[500px] p-3 text-white bg-gray-500 rounded-md`}>
        {message.contentType === "image" && message.contentUrl && (
          <img
            src={message.contentUrl}
            alt={message.content}
            className="object-cover h-[75px] w-[50px] border-1 border-white rounded-md"
          />
        )}
        {message.contentType === "video" && message.contentUrl && (
          <video
            src={message.contentUrl}
            className="object-cover h-[75px] w-[50px] border-1 border-white rounded-md"
          />
        )}
        {message.content && <p>{message.content}</p>}
      </div>
    </div>
  );
}

export default MessageView;
