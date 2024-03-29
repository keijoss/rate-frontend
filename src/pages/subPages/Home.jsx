import NewsFeed from '@/components/home/NewsFeed'
import useAllPosts from '@/hooks/Store/useAllPosts';
import React from 'react'

export default function Home() {
  const allPosts = useAllPosts((state) => state.allposts);
  return (
    <NewsFeed
      allPosts={
        allPosts 
      }
    />
  );
}
