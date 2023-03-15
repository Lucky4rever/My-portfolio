import { useReadCypher } from "use-neo4j";

const ShowSypher = () => {
  const query = `MATCH (m:Person) RETURN m`
    const params = { title: 'The Matrix' }

    const { loading, first } = useReadCypher(query, params)

    if ( loading ) console.log("Loading...");

    let movie = first.get('m');

    console.log(movie);
    // return (
    //     <div>{movie.properties.title} was released in {movie.properties.year}</div>
    // )
};

export default ShowSypher;