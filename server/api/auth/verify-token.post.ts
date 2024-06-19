import { useVerifyJwtToken } from '~/utils/verifyJwtToken'

export default eventHandler(async (event) => {
  const { token } = await readBody<{ token: string }>(event)

  const tokenStatus = useVerifyJwtToken(token)

  if (tokenStatus === 'Token invalid')
    return setResponseStatus(event, 401, 'Token invalid')
  
  return tokenStatus

})