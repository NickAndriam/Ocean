import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../sanityClient/client'

// image builder
const imageBuilder = imageUrlBuilder(sanityClient)
const imageUrl = (source)=>{
  if(!source) return
  return imageBuilder.image(source)
}


export default imageUrl