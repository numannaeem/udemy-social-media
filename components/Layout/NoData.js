import { Message, Button } from 'semantic-ui-react'

export const NoProfilePosts = () => (
  <>
    <Message info icon="meh" header="Sorry" content="User has not posted anything yet!" />
    <Button icon="long arrow alternate left" content="Go Back" as="a" href="/" />
  </>
)

export const PrivateBanner = () => (
  <>
    <Message
      warning
      icon="spy"
      header="Private Account"
      content="Follow them to view their posts"
    />
    <Button icon="long arrow alternate left" content="Go Back" as="a" href="/" />
  </>
)

export const NoFollowData = ({ followersComponent, followingComponent }) => (
  <>
    {followersComponent && (
      <Message icon="user outline" info content={`User does not have any followers`} />
    )}

    {followingComponent && (
      <Message icon="user outline" info content={`User does not follow anyone`} />
    )}
  </>
)

export const NoMessages = () => (
  <Message
    info
    icon="telegram plane"
    header="Whoops!"
    content="You haven't messaged anyone yet. Search below to find someone!"
  />
)

export const NoPosts = () => (
  <Message
    info
    icon="meh"
    header="It's lonely in here..."
    content="Follow someone to see what they're up to!"
  />
)

export const NoProfile = () => (
  <Message info icon="meh" header="Hey!" content="No Profile Found." />
)

export const NoNotifications = () => (
  <Message content="No Notifications" icon="smile" info />
)

export const NoPostFound = () => (
  <Message info icon="meh" header="Hey!" content="No Post Found." />
)
