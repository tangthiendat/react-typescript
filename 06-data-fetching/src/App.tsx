import { type ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import { get } from "./util/http";
import fetchingImg from "./assets/data-fetching.png";
import ErrorMessage from "./components/ErrorMessage";

interface RawBlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const App: React.FC = () => {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsFetching(true);
        const data: RawBlogPost[] = (await get(
          "https://jsonplaceholder.typicode.com/posts"
        )) as RawBlogPost[];

        const blogPosts: BlogPost[] = data.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });

        setFetchedPosts(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process" />
      {isFetching && <p id="loading-fallback">Fetching posts...</p>}
      {fetchedPosts && <BlogPosts posts={fetchedPosts} />}
      {error && <ErrorMessage text={error} />}
    </main>
  );
};

export default App;
