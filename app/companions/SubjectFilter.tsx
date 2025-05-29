'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { subjects } from "@/constants";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const SearchFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';

    const [subject, setSubject] = useState(query);


    useEffect(() => {
        let newUrl = "";
        if(subject === "all") {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['subject'],
            });
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "subject",
                value: subject,
            });
        }
        router.push(newUrl, { scroll: false});
    }, [subject])

  return (
    <Select onValueChange={setSubject} value={subject}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectLabel>All Subjects</SelectLabel>
        {subjects.map((subject) => (
          <SelectItem value={subject} key={subject} className="capitalize">
            {subject}
          </SelectItem>
        ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SearchFilter;
// This component is a placeholder for a search filter field.
// It can be used to filter companions based on search criteria such as subject or topic.
