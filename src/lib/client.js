import {createClient} from '@sanity/client';

 export const client = createClient({
        projectId:  'c5pe4cbh',
        dataset :'production',
        useCdn : true,
        apiVersion : '2023-07-01',
        token : process.env.SANITY_API_TOKEN
    });

    export const getPosts = async () => {
        const posts = await client.fetch('*[_type == "product"]')
        return posts
    }
    
    

//    const image = imageUrlBuilder(client);
//   export const imgUrl =(source)=> imageUrlBuilder.image(source)