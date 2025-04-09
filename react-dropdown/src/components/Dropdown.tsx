import React, { useCallback, useEffect, useRef, useState } from "react";
import { IDropdownProps } from "../types";

interface DropdownProps<T> {
  dropdownProps: IDropdownProps<T>;
}

function Dropdown<T>(props: DropdownProps<T>) {
  const { dropdownProps } = props;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const openDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  useEffect(() => {
    const checkOutsideClick = (e: MouseEvent) => {
      if (!dropdownRef?.current) return;
      if (
        e.target instanceof Node &&
        !dropdownRef.current.contains(e.target) &&
        isOpen
      )
        setIsOpen(false);
    };
    window.addEventListener("click", checkOutsideClick);
    return () => {
      window.removeEventListener("click", checkOutsideClick);
    };
  }, [isOpen]);
  const onSelectDropdown = (value: T) => {
    dropdownProps.setDropdownValue(value);
    setIsOpen(false);
  };
  const onButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    e.preventDefault();
    switch (e.key) {
      case "Enter":
        setIsOpen((prev) => !prev);
        setFocusedIndex(0);
        setTimeout(() => {
          const documentEl = document.getElementById(`dropdownitem-0`);
          documentEl?.focus();
        }, 200);
        break;
    }
  };
  const onOptionKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    e.preventDefault();
    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prev) => (prev + 1) % dropdownProps.options.length);
        break;
      case "ArrowUp":
        setFocusedIndex(
          (prev) =>
            (prev - 1 + dropdownProps.options.length) %
            dropdownProps.options.length
        );
        break;
      case "Enter":
        dropdownProps.setDropdownValue(dropdownProps.options[focusedIndex]);
        setIsOpen(false);
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div
      className="dropdown-container"
      ref={dropdownRef}
      aria-haspopup="true"
      aria-expanded={isOpen}
    >
      <button
        onClick={openDropdown}
        onKeyDown={onButtonKeyDown}
      >{`${dropdownProps.value}`}</button>
      {isOpen && (
        <ul role="menu">
          {dropdownProps.options.map((value, index) => {
            return (
              <li
                onKeyDown={onOptionKeyDown}
                role="menuitem"
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    value === dropdownProps.value
                      ? "paleturquoise"
                      : focusedIndex === index
                      ? "pink"
                      : "white",
                  border: focusedIndex === index ? "1px solid black" : "none",
                }}
                id={`dropdownitem-${index}`}
                tabIndex={index === focusedIndex ? 0 : -1}
                key={`${value}`}
                onClick={() => onSelectDropdown(value)}
              >{`${value}`}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
