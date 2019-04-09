import { gql, IResolvers } from "apollo-server-koa";

export const typeDef = gql`
  type User {
    id: ID!
    username: String
    email: String
    created_at: Date
    updated_at: Date
    is_certified: Boolean
    profile: UserProfile
  }
  type UserProfile {
    id: ID!
    display_name: String
    short_bio: String
    thumbnail: String
    created_at: Date
    updated_at: Date
    fk_user_id: String
    profile_links: JSON
    about: String
  }
`;

export const resolvers: IResolvers = {

};