# React Query
 Understanding <b>React Query</b> in detail.It is a better method  fetch data from API in React.I <b>did not focus much  on CSS</b> in this part.
 
 <b>API's </b> used : <br>
 https://catfact.ninja/fact <br>

 - Queries is just the READ from CRUD.<br>
 - Mutations is CUD from CRUD.<br>

 - useQuery is a hook that takes in an array of arguments and returns an object with the data, error, and status of the query,The empty array is the key for the query.<br>

 - We don't need any state to store the data, so we can use the useQuery hook to fetch the data from the API and store it in the data variable.<br>

 - We don't have to update the state manually, we can use the refetch function to update the data.
 <br>
Attaching some sample screen shots :

<i>Generating Random Cat Facts on Clicking <b>Update Data</b></i><br>
![image](https://user-images.githubusercontent.com/73344382/218849159-b2c204dd-1838-4e72-bd2f-1862cf856d9b.png)

[Working Link](https://reactquery.netlify.app/)

