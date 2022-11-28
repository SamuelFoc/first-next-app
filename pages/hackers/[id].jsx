export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((hacker) => {
    return {
      params: { id: hacker.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/`
  );
  const data = await response.json();

  return {
    props: { hacker: data },
  };
};

const Details = ({ hacker }) => {
  return (
    <div>
      <h1>{hacker.name}</h1>
      <p>{hacker.email}</p>
      <p>{hacker.website}</p>
      <p>{hacker.address?.city}</p>
    </div>
  );
};

export default Details;
