import { useEffect, useState } from 'react';

const FetchGetJsonPlaceHolder = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('Loading');
  const [error, setError] = useState(null);
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    const loadPost = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network or server error.');
        }
        const getPosts = await response.json();
        setPosts(getPosts);
        setStatus('success');
      } catch (error) {
        setError(error.message);
        setStatus('Error');
      }
    };
    loadPost();
  }, []);

  if (status === 'Loading') {
    return <div>{status}</div>;
  }

  if (status === 'Error') {
    return <div>{error}</div>;
  }

  return (
    <section>
      <h2>Post</h2>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>
              {post.id} - {post.title}
            </h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </section>
  );
};

export default FetchGetJsonPlaceHolder;
