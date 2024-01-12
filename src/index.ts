import express from 'express'
import { envVariableGetter } from '/utils/envVariableGetter'

export const app = express()
const port = envVariableGetter('API_PORT')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})
