import NewsFeed from '@/components/home/NewsFeed'
import { Button } from '@/components/ui/button';
import useUserPosts from '@/hooks/Store/useUserPosts';
import React, { useEffect, useState } from 'react'
import { set } from 'zod';

export default function Post() {
  const userPosts = useUserPosts((state) => state.posts);
  const [filter, setFilter] = useState(["all"]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  useEffect(() => {
    if (filter.includes("all")) {
      setFilteredPosts(userPosts);
    } else {
      if (filter.includes("approved") || filter.includes("pending")){
        const fil = filter.includes("approved") ? 1 : 0;
        setFilteredPosts(userPosts.filter((post) =>   post.approved === fil));
      }

      if (filter.includes("public") || filter.includes("hidden")){
        const fil = filter.includes("public") ? 0
        
        : 1;
        setFilteredPosts(userPosts.filter((post) =>   post.deleted === fil));
      }
    }
  }, [filter]);
  return (
    <>
      <div className="space-x-2">
        <Button
          className={`  rounded-full text-xs
      border border-[#24303a] text-white hover:bg-[#374855] ${
        filter.includes("all") ? "bg-[#374855] text-[#8287FE]" : ""
      }`}
          onClick={() => {
            setFilter(["all"]);
          }}
        >
          All{" "}
        </Button>
        <Button
          className={`  rounded-full text-xs
      border border-[#24303a] text-white hover:bg-[#374855] ${
        filter.includes("approved") ? "bg-[#374855] text-[#8287FE]" : ""
      }`}
          onClick={() => {
            setFilter(["approved"]);
          }}
        >
          Approved{" "}
        </Button>
        <Button
          onClick={() => {
            setFilter(["pending"]);
          }}
          className={`  rounded-full text-xs
      border border-[#24303a] text-white hover:bg-[#374855] ${
        filter.includes("pending") ? "bg-[#374855] text-[#8287FE]" : ""
      }`}
        >
          Pending{" "}
        </Button>
        <Button
          onClick={() => {
            setFilter(["public"]);
          }}
          className={`  rounded-full text-xs
      border border-[#24303a] text-white hover:bg-[#374855] ${
        filter.includes("public") ? "bg-[#374855] text-[#8287FE]" : ""
      }`}
        >
          Public{" "}
        </Button>
        <Button
          onClick={() => {
            setFilter(["hidden"]);
          }}
          className={`  rounded-full text-xs
      border border-[#24303a] text-white hover:bg-[#374855] ${
        filter.includes("hidden") ? "bg-[#374855] text-[#8287FE]" : ""
      }`}
        >
          Hidden{" "}
        </Button>
      </div>
      <NewsFeed allPosts={filteredPosts ? filteredPosts : userPosts} />;
    </>
  );
}
