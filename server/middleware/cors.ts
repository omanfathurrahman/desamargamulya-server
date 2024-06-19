export default eventHandler(async (event) => {
  handleCors(event, {
    origin: '*',
    credentials: true,
    methods: '*',
    allowHeaders: '*',
  })
  if (event.node.req.method === 'OPTIONS') {
    return null
  }
})
