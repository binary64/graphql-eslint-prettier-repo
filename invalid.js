export const quqery = /* GraphQL */ `
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      name
      isViewerFriend
      profilePicture(size: 50) {
        ...PictureFragment
      }
    }
  }

  fragment PictureFragment on Picture {
    uri
    width
    height
  }
`;
