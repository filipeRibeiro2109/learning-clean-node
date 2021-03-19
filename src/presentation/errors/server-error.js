module.exports = class UnauthorizedError extends Error {
  constructor (paramName) {
    super('Internal error')
    this.name = 'ServerError'
  }
}
