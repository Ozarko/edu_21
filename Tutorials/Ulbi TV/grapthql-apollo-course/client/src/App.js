import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { CREATE_USER } from './mutation/mutation';
import { GET_ALL_USERS, GET_ONE } from "./query/user";

function App() {
  const {data, loading, error, refetch} = useQuery(GET_ALL_USERS)
  const {
    data: oneUser,
    loading: oneUserLoading,
  } = useQuery(GET_ONE, {
    variables: {
      id: 1
    }
  });

  console.log(oneUser)
  const [newUser] = useMutation(CREATE_USER)
  const [users, setUsers] = useState([])

  const [username, setUsername] = useState('')
  const [age, setAge] = useState(0)

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUser);
    }
  }, [data, loading]);

  console.log(username, age)

  const addUser = (e) => {
    e.preventDefault()
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({
      data
    }) => {
      console.log(data);
      setAge(0);
      setUsername("");
    }
    )
  };

  const getAll = e => {
    e.preventDefault()
    refetch()
  }

  return (
    <div className="App">
      <form>
        <input
          value={username}
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          value={age}
          type="number"
          onChange={(event) => setAge(Number(event.target.value))}
        />
        <div>
          <button onClick={(e) => addUser(e)}>Створити користувачів</button>
          <button onClick={(e) => getAll(e)}>Отримати користувачів</button>
        </div>
      </form>
      <ul>
        {loading ? (
          <h1>Loading ...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              id: {user.id}
              <br />
              user: {user.username}
              <br />
              age: {user.age}
              <hr />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
