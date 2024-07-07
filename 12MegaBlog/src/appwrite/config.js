import conf from '../config.js';
import { Client,ID,Databases,Storage,Query} from 'appwrite';

export class Service{
   
    client = new Client();
    databases;
    bucket;

    constructor()
    {
        this.client
            .setEndpoint(conf.appwriteurl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId})
    {
        try {
           return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId
            })
        } 
        catch(error) {
           console.log("Appwrite service error :: createPost :: error",error);
        }
    }

    //here we are taking slug directly as parameter to delete the post.which would help in easy deletion of post.as we are keeping document id as slug.

    //if we had not taken slug as seperate paramenter then we at database it we would have to do .slug form the object and we didnt take userid as we are not going to edit the post of other user.
    async updatePost(slug,{title,content,featuredImage,status}){
      try {
        return await this.databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug,
          {
          title,
          content,
          featuredImage,
          status,
        })
        
      } catch (error) {
        console.log("Appwrite service error :: updatePost :: error",error);
      }
    }
   //we are taking slug as parameter to delete the post as we are keeping document id as slug.
    async deletePost(slug){
      try {
          await this.databases.deleteDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug
        ) 
        return true; 
      } catch (error) {
        console.log("Appwrite service error :: deletePost :: error",error);
      }
        return false;
    }
    //if return true and false on basis of which we handle them in frontend to show success and error message.

    async getPost(slug){
      try {
        return await this.databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          slug
        )
      } catch (error) {
        console.log("Appwrite service error :: getPost :: error",error);
        return false
      }
    }

    async getPosts(queries = [Query.equal("status","active")])
    {
       try {
        return await this.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionId,
          queries
        )
        
       } catch (error) {
        console.log("Appwrite service error :: getPosts :: error",error);
       }
    }
    
    //file upload service

    async uploadFile(file)
    {
       try {
         return await this.bucket.createFile(
          conf.appwriteBucketId,
          ID.unique(),
          file
         ) 
       } catch (error) {
        console.log("Appwrite service error :: uploadFile :: error",error);
        return false;
       }
    }
    
    async deleteFile(fileID)
    {
      try {
        await this.bucket.deleteFile(
          conf.appwriteBucketId,
          fileID
        )
        return true;

      } catch (error) {
        console.log("Appwrite service error :: uploadFile :: error",error)
      }
    }

    async getFilePreview(fileID)
    {
      try {
          return await this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileID
          ) 
      } catch (error) {
        console.log("Appwrite service error :: getFilePreview :: error",error)
      }
    }
}

const service = new Service();

export default Service;
