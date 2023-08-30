"use client";

import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";

export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };
    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });
    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="Let me love you"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
