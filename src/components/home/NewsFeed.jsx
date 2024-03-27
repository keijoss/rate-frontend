import React from 'react'
import Post from '../NewsFeed/Post'
import AllPost from '../NewsFeed/AllPost';
import useQueryAllPosts from '@/hooks/Queries/useQueryAllPosts';
import useAllPosts from '@/hooks/Store/useAllPosts';

export default function NewsFeed() {
  const queryAllPosts = useQueryAllPosts();
  const allPosts = useAllPosts((state) => state.allposts);


  console.log(allPosts)
  return (
    <div>
      <Post />
      <hr className=" border-[#1B2730] my-4 " />
      <div className="space-y-3">
        {allPosts?.map((post, index) => {
          return <AllPost key={index}
          attitude={post.attitude}
comment={post.comment}
communication={post.communication}
date={post.date}
dislikes={post.dislikes}
engagement={post.engagement}
likes={post.engagement}
organization={post.organization}
rating_id={post.rating_id}
studentName={post.studentName}
subjectName={post.subjectName}
supportiveness={post.supportiveness}
teacherName={post.teacherName}
teaching_method={post.teaching_method}
          
          />;
        })}
      </div>
    </div>
  );
}
