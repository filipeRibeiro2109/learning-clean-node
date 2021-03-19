class AuthUseCase {
  async auth (email) {
    if (!email) {
      throw new Error()
    }
  }
}

const makeSut = () => {
  return new AuthUseCase()
}

describe('Auth UseCase', () => {
  test('Should throw if no email is provided', async () => {
    const sut = makeSut()
    const promise = sut.auth()
    expect(promise).rejects.toThrow()
  })
})
