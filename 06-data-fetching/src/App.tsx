import { useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";
import fetchingImg from "./assets/data-fetching.png";

interface RawBlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const App: React.FC = () => {
  const [fetchedPost, setFetchedPost] = useState<BlogPost[] | undefined>();

  useEffect(() => {
    async function fetchPosts() {
      const data: RawBlogPost[] = await get<RawBlogPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });
      setFetchedPost(blogPosts);
    }

    fetchPosts();
  });

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
      {fetchedPost && <BlogPosts posts={fetchedPost} />}
    </main>
  );
};

export default App;
