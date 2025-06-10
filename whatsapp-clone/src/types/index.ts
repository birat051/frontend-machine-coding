import type { Dispatch, SetStateAction } from "react";

export interface IUser {
  name: string;
  profilePhoto: string;
  id: number;
  createdAt: string;
  phoneNumber: string;
}

export type E_CONTENT_TYPE = "video" | "image" | "text";

export interface IMessage {
  conversationId: string;
  id: string;
  createdAt: string;
  sender: string;
  reciever: string;
  contentType: E_CONTENT_TYPE;
  contentUrl?: string;
  content: string;
}

export interface IConversation {
  users: string[];
  id: string;
  createdAt: string;
  lastMessage: IMessage;
}

export interface IMockData {
  users: IUser[];
  conversations: IConversation[];
  messages: IMessage[];
  primaryUserId: string;
}

export interface IMessagingContext {
  setSearch: Dispatch<SetStateAction<string>>;
  search: string;
  activeConversation: IConversation | null;
  setActiveConversation: Dispatch<SetStateAction<IConversation | null>>;
  conversationData: IConversation[];
  setConversationData: Dispatch<SetStateAction<IConversation[]>>;
  messageData: IMessage[];
  setMessageData: Dispatch<SetStateAction<IMessage[]>>;
  lastMessage: string;
  setLastMessage: Dispatch<SetStateAction<string>>;
}
