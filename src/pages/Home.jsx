import NewsFeed from '@/components/home/NewsFeed'
import Profile from '@/components/home/Profile'
import RecentPost from '@/components/home/RecentPost'
import Subject from '@/components/home/Subject'
import TopNavigation from '@/components/navigation/TopNavigation'
import React from 'react'

export default function Home() {
  return (
    <>
    <TopNavigation/>
    <div>
        <div>
            <Profile/>
            <RecentPost/>
        </div>
        <div>
            <NewsFeed/>
        </div>
        <div>
            <Subject/>
        </div>
    </div>
    </>
  )
}
