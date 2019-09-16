const tokenProvider = new Chatkit.TokenProvider({
    url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f6564c8b-612a-4605-bd88-06e0b7e86486/token"
})

const chatManager = new Chatkit.ChatManager({
    instanceLocator: 'v1:us1:f6564c8b-612a-4605-bd88-06e0b7e86486',
    userId: 'test',
    tokenProvider: tokenProvider,
})

export { tokenProvider, chatManager }