

export default ({env}) => ({
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 1024 * 1024 // 256mb in bytes
      }
    }
  },
})
