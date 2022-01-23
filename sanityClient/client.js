import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'r0vmsivh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-08-31'
})