import { envVariableGetter } from '/utils/envVariableGetter'
import { app } from '/app'

const port = envVariableGetter('API_PORT')

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
