import 'dotenv/config'

export const envVariableGetter = (variableName: string): string | number => {
  const variable = process.env[variableName]

  if (!variable) {
    throw new Error(`Environment variable ${variableName} not found.`)
  }

  return variable
}
