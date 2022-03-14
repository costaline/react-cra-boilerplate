import { FC, useEffect } from 'react'

import { useActions, useTypedSelector } from '../hooks'

export const UserList: FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user)

  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
