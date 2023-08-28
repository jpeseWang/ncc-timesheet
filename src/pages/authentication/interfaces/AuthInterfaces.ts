/* eslint-disable @typescript-eslint/member-delimiter-style */

export interface IAuthToken {
  accessToken: string
  encryptedAccessToken: string
  expireInSeconds: 0
  userId: number
}

export interface IUser {
  username: string
  auth: boolean
  // emailAddress: string
  // isActive: boolean
  // jobTitle: string
  // branchId: number
  // branchDisplayName: string
  // branchColor: string
}

export interface ICurrentUser {
  name: string
  surname: string
  userName: string
  emailAddress: string
  avatarFullPath: string
  morningWorking: string
  morningStartAt: string
  morningEndAt: string
  afternoonWorking: string
  afternoonStartAt: string
  afternoonEndAt: string
  type: 0 | 1 | 2
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
  id: number
}
