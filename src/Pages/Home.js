import { isError, useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () => {
  const { data : catData,isLoading,isError,refetch} = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });
  // useQuery is a hook that takes in an array of arguments and returns an object with the data, error, and status of the query,The empty array is the key for the query.
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error</h1>
  }
  return (
    <div>
      <h1>
        This is the Home Page <p>{catData?.fact}</p>
        <button onClick={refetch}>Update Data</button>
      </h1>
    </div>
  );
};

// We don't have to update the state manually, we can use the refetch function to update the data.
// We don't need any state to store the data, so we can use the useQuery hook to fetch the data from the API and store it in the data variable.
