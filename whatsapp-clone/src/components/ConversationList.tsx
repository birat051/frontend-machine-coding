import ConversationBar from "./ConversationBar";
import useMessagingContext from "../hooks/useMessagingContext";
import { useCallback, useEffect, useState } from "react";
import type { IConversation } from "../types";
import { mockData } from "../constants";

function ConversationList() {
  const context = useMessagingContext();
  const { conversationData, search } = context;
  const [filteredConversation, setFilteredConversation] = useState<
    IConversation[]
  >([]);
  useEffect(() => {
    if (!search) {
      setFilteredConversation(conversationData);
    } else {
      const users = mockData.users
        .filter((value) =>
          value.name.toLowerCase().includes(search.toLowerCase().trim())
        )
        .map((value) => value.id.toString());
      const filteredConversations = conversationData.filter(
        (value) =>
          users.includes(value.users[0]) || users.includes(value.users[1])
      );
      setFilteredConversation(filteredConversations);
    }
  }, [conversationData, search]);
  const renderFilteredConversation = useCallback(() => {
    return [...filteredConversation]
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
      .map((value) => <ConversationBar conversation={value} key={value.id} />);
  }, [filteredConversation]);
  return (
    <div className="grow-2 overflow-y-scroll w-full ">
      {renderFilteredConversation()}
    </div>
  );
}

export default ConversationList;
