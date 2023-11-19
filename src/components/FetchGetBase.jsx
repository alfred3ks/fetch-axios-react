const posts = [
  {
    id: 1,
    title: 'Este es el primer post',
    body: 'Este es el contenido del primer post...',
  },
  {
    id: 2,
    title: 'Este es el segundo post',
    body: 'Este es el contenido del segundo post...',
  },
];

const FetchGetBase = () => {
  return (
    <section>
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

export default FetchGetBase;
