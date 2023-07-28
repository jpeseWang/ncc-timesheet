/* eslint-disable multiline-ternary */
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
export const Example = (): JSX.Element => {
  const { currentUser, getCurrentUser } = useContext(UserContext)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      await getCurrentUser()
    }
    void fetchData()
  }, [])

  return (
    <div>
      {currentUser != null ? (
        <>
          <p>Name: {currentUser.name}</p>
          <p>Surname: {currentUser.surname}</p>
          <p>Username: {currentUser.userName}</p>
          <p>Email: {currentUser.emailAddress}</p>
          <p>Level: {currentUser.level}</p>
          <p>Sex: {currentUser.sex}</p>
          <p>ID: {currentUser.id}</p>
          <img src={currentUser.avatarFullPath}></img>
        </>
      ) : (
        <p>You must login to access this...</p>
      )}
    </div>
  )
}
