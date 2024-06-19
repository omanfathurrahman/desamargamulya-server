import jwt from 'jsonwebtoken'

/**
 * Generate JWT token
 * @param email - Email of the user
 * @returns JWT token
 */
export function useGenerateJwtToken (email: string) {
  const tokenSecret = process.env.JWT_TOKEN_SECRET
  const token = jwt.sign({ email }, tokenSecret, { expiresIn: '6h' })
  return token
}