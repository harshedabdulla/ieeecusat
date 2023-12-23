

import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'ph1qbaes', 
  dataset: 'production',
  apiVersion: '2023-12-23', 
  useCdn: process.env.NODE_ENV === 'production', 
  
  
})
