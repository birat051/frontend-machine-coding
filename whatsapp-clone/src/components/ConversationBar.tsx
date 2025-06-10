import { memo, useCallback, useMemo } from "react";
import type { IConversation, IUser } from "../types";
import { mockData } from "../constants";
import useMessagingContext from "../hooks/useMessagingContext";

interface ConversationBarProps {
  conversation: IConversation;
}
function ConversationBar(props: ConversationBarProps) {
  const { conversation } = props;
  const context = useMessagingContext();
  const { activeConversation, setActiveConversation, setLastMessage } = context;
  const conversationUserId: string = useMemo(
    () =>
      conversation.users.find((value) => value !== mockData.primaryUserId) ||
      "",
    [conversation]
  );
  const conversationUser: IUser | undefined = useMemo(
    () =>
      mockData.users.find((value) => value.id === parseInt(conversationUserId)),
    [conversationUserId]
  );
  const renderLastMessage = useCallback(() => {
    switch (conversation.lastMessage.contentType) {
      case "image":
        return "Photo 📸";
      case "video":
        return "Video 🎥";
      default:
        return conversation.lastMessage.content;
    }
  }, [conversation]);
  const onConversationClick = useCallback(() => {
    setActiveConversation(conversation);
    setLastMessage(conversation.lastMessage.id);
  }, [conversation]);
  return (
    <div
      onClick={onConversationClick}
      className={`${
        activeConversation?.id === conversation.id
          ? "bg-green-300"
          : "bg-gray-800"
      } text-white p-1.5 flex gap-1.5 items-start w-full border-1 border-white cursor-pointer overflow-x-hidden`}
    >
      {conversationUser && (
        <img
          src={conversationUser.profilePhoto}
          alt={conversationUser.name}
          className="w-[30px] h-[30px] rounded-full min-w-[30px] min-h-[30px] border-1 border-white object-cover"
        />
      )}
      <div className="w-full">
        {conversationUser && (
          <h4 className=" font-bold ">{conversationUser.name}</h4>
        )}
        {renderLastMessage()}
      </div>
    </div>
  );
}

export default memo(ConversationBar);
