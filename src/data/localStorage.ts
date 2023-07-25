export const setAccessToken = (value: string): void => {
  localStorage.setItem('acccessToken', value)
}

export const getAccessToken = (): string | null => {
  return localStorage.getItem('acccessToken')
}

export const removeAccessToken = (value: string): void => {
  localStorage.removeItem('acccessToken')
}

export const getCurrentUser = (): string | null => {
  return JSON.stringify(localStorage.getItem('currentUser'))
}

export const removeCurrentUser = (value: string): void => {
  localStorage.removeItem('currentUser')
}
