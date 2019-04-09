import { gql } from "apollo-server-koa";

export const typeDef = gql`
  type Post {
    id: ID!
    title: String
    body: String
    thunmbnail: String
    is_markdown: Boolean
    is_temp: Boolean
    user: User
    url_slug: String
    likes: Int
    meta: JSON
    view: Int
    is_private: String
    released_at: String
    created_at: String
  }
`;

export const resolvers = {

};