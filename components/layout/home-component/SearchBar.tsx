"use client";

import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  placeholder = "Search for courses, topics, instructors",
  value = "",
  onChange,
}: SearchBarProps) {
  const [query, setQuery] = useState<string>(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (onChange) onChange(e);
  };

  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-[600px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />

        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          className="
            w-full
            pl-9 sm:pl-10 pr-4
            py-2 sm:py-3 md:py-4
            text-sm sm:text-base
            rounded-lg border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            transition-all duration-200
          "
        />
      </div>
    </div>
  );
}
