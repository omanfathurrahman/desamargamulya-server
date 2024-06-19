import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { prisma } from '~~/prisma/db'
import { useGenerateJwtToken } from '~/utils/generateJwtToken'

export default defineEventHandler(async (event) => {
  const { email, password }: { email: string; password: string } = await readBody(event)
  try {
    const admin = await prisma.admin.findFirstOrThrow({
      where: {
        email,
      },
    })
    if (admin.password !== password) {
      return setResponseStatus(event, 401, 'Password salah')
    }
    const token = useGenerateJwtToken(email)
    return token
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError) {
      if (e.name == 'NotFoundError') {
        return setResponseStatus(event, 404, 'Email tidak ditemukan')
      }
      console.log(e.name)
    }
  }
})
