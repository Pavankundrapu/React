import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config'
import {Button,Input,RTE,Select} from '../index'
import {useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {
  const {register,handleSubmit,watch,setValue,
      control,getValues} = useForm(
        {
          defaultValues : {
            title : post?.title || '',
            slug : post?.slug || '',
            content : post?.content || '',
            status : post?.status || 'active'
          }
        }
      )

      const navigate = useNavigate()
      const userData = useSelector(state => state.auth.userData)

      const submit = async (data) => {
        if (data) {
            // Upload file if image exists in data
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null;
    
            // Delete the existing file if a new one was uploaded
            if (file) {
                await service.deleteFile(post.featuredImage);
            }
    
            // Prepare the updated post data
            const updatedData = {
                ...data,
                featuredImage: file ? file.$id : undefined // Use existing image if no new file is uploaded
            };
    
            // Update the post with the new data
            const dbPost = await service.updatePost(post.$id, updatedData);
    
            // Optionally, handle the result of the update operation
            // For example, navigate to the updated post, show a success message, etc.

            if(dbPost)
            {
              navigate(`/posts/${dbPost.$id}`)
            }
        }
        else
        {  
          //here we have uploaded the file
           const file = await service.uploadFile(data.image[0]);

           if(file)
           {
              //we are setting the featured image to the file id
               data.featuredImage = file.$id

               const dbPost = await service.createPost({...data,userId : userData.$id})

               if(dbPost)
               {
                navigate(`/posts/${dbPost.$id}`)
                }
          }  
        }
    };

    // Slug transform function makes the slug lowercase and replaces spaces with hyphens
    const slugTransform = useCallback((value) => {
      if(value && typeof value === 'string')
        return value
          .trim()
          .toLowerCase()
          .replace(/^[a-zA-Z\d\s]+/g,'-')
          .replace(/\s/g,'-')

          //if the above condition is not met then return empty string
        return ''  
    },[])

    React.useEffect(() => {
      const subscription = watch((value, { name }) => {
          if (name === "title") {
              setValue("slug", slugTransform(value.title), { shouldValidate: true });
          }
      });

      return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

    
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
    <div className="w-2/3 px-2">
        <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
        />
        <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
    </div>
    <div className="w-1/3 px-2">
        <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
        />
        {post && (
            <div className="w-full mb-4">
                <img
                    src={appwriteService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                />
            </div>
        )}
        <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-4"
            {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
            {post ? "Update" : "Submit"}
        </Button>
    </div>
</form>
  )
}

export default PostForm