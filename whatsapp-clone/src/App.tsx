import { createContext, useEffect, useState } from "react";
import "./App.css";
import type { IConversation, IMessagingContext, IUser } from "./types";
import SearchBar from "./components/SearchBar";
import ConversationList from "./components/ConversationList";
import MessageHeader from "./components/MessageHeader";
import ChatWindow from "./components/ChatWindow";
import { mockData } from "./constants";
import MessageBar from "./components/MessageBar";
import NoMessageSelected from "./components/NoMessageSelected";

export const MessagingContext = createContext<IMessagingContext | undefined>(
  undefined
);

function App() {
  const [messageData, setMessageData] = useState(mockData.messages);
  const [conversationData, setConversationData] = useState(
    mockData.conversations
  );
  const [lastMessage, setLastMessage] = useState("");
  const [searchData, setSearchData] = useState("");
  const [activeConversation, setActiveConversation] =
    useState<IConversation | null>(null);
  const [activeUser, setActiveUser] = useState<IUser | null>(null);
  useEffect(() => {
    if (activeConversation) {
      const activeUserId = activeConversation.users.find(
        (value) => value !== mockData.primaryUserId
      );
      if (activeUserId) {
        const activeUser = mockData.users.find(
          (value) => value.id === parseInt(activeUserId)
        );
        activeUser && setActiveUser(activeUser);
      }
    }
  }, [activeConversation]);
  return (
    <div className="h-[100vh] w-[100vw]  chat-grid ">
      <MessagingContext.Provider
        value={
          {
            search: searchData,
            activeConversation,
            setActiveConversation,
            setSearch: setSearchData,
            messageData,
            conversationData,
            setConversationData,
            setMessageData,
            setLastMessage,
            lastMessage,
          } as IMessagingContext
        }
      >
        <div className="w-full h-[100vh] overflow-y-hidden flex-col bg-gray-600 border-1 border-white">
          <SearchBar />
          <ConversationList />
        </div>
        {activeConversation && (
          <div className="w-full h-[100vh] overflow-y-hidden flex flex-col border-1 border-white">
            {activeUser && <MessageHeader user={activeUser} />}
            <ChatWindow />
            <MessageBar />
          </div>
        )}
        {!activeConversation && <NoMessageSelected />}
      </MessagingContext.Provider>
    </div>
  );
}

export default App;
