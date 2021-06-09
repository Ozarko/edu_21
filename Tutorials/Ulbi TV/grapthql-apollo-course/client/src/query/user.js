import {gql} from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    getAllUser {
      id
      age
      username
    }
  }
`;
export const GET_ONE = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;