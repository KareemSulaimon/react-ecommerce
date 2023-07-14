export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'imageUrl',
            title: 'Image URL',
            of: [{type : 'image'}],
            type: 'url'    
        },
        {
            name: 'leftImageUrl',
            title: 'Image URL',
            of: [{type : 'image'}],
            type: 'url'    
        },
        {
            name: 'rightImageUrl',
            title: 'Image URL',
            of: [{type : 'image'}],
            type: 'url'    
        },

        {
            name: "name",
            title : "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            option: {
                source : 'name',
                maxLength: 90
            }
        },
        {
            title: 'isNew',
            name: 'isNew',
            type: 'boolean'
          },
        {
            title: 'sold out',
            name: 'issold',
            type: 'boolean'
          },
            { 
                name: 'price',
                title: 'Price',
                type: 'number',
              },
              { 
                name: 'details',
                title: 'Details',
                type: 'string',
              }
        
        
    ]
}