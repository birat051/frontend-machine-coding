import type { IUser } from "../types";

interface MessageHeaderProps {
  user: IUser;
}

function MessageHeader(props: MessageHeaderProps) {
  const { user } = props;
  return (
    <div className="flex flex-col gap-1 px-2 w-full py-1 bg-cyan-900 rounded-md">
      <div className="flex gap-1 w-full items-center">
        <img
          src={user.profilePhoto}
          className="rounded-full h-[30px] w-[30px] border-1 border-white object-cover"
        />
        <h2 className="text-md text-white font-bold">{user.name}</h2>
      </div>
      <h5 className="text-sm text-white font-medium">Last seen at 8:50 pm</h5>
    </div>
  );
}

export default MessageHeader;
