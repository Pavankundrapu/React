import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

//here we get id as '$id' from the props and featuredImage is the id for the image.
//for img preview we have a method in service which is getPreviewUrl which takes the image id and returns the url of the image.so we use that to get the image url.
function PostCard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl ps-4'>
        <div className='w-full justify-center mb-4'>
          <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl'/>
        </div>
        <h2 className='text-xl font-bold'>
          {title}
          </h2>
      </div>
    </Link>
  )
}

export default PostCard