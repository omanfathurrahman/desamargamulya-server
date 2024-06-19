import jwt from 'jsonwebtoken'

export function useVerifyJwtToken (token: string) {
  const jwtSecret = process.env.JWT_TOKEN_SECRET

  try {
    jwt.verify(token, jwtSecret) as { email: string }
    console.log('Token valid')
    return 'Token valid'
  } catch (error) {
    console.log('Token invalid')
    return 'Token invalid'
  }
}