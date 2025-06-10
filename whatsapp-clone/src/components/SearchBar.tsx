import { useEffect, useRef, useState } from "react";
import useMessagingContext from "../hooks/useMessagingContext";

function SearchBar() {
  const context = useMessagingContext();
  const { setSearch } = context;
  const [searchValue, setSearchValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setSearch(searchValue);
    }, 300);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [searchValue]);
  return (
    <div className="p-2 bg-gray-600 border-1 border-white">
      <input
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Search for number or user name"
        className="rounded-md w-full p-1.5 text-md text-white border-white bg-gray-800 "
      />
    </div>
  );
}

export default SearchBar;
