import {defineType, defineField, defineArrayMember} from "sanity";

 export default defineType ({
     name: "hover",
     title: 'Hover',
     type: 'document',

     fields: [
       defineField({
          name: 'dataArrayType',
          title: 'Data Array Type',
          type: "string"
        }),
          
        defineField({
                name: 'dataArray',
                title: 'Data array',
                type: "array",
                of: [
                  defineArrayMember({
                    type: 'string',  
                    title: 'Nested Array',
                  }),
              ] 
        }),
        defineField({
          name: 'subdataArray',
          title: 'Sub Data array',
          type: "array",
          of: [
            defineArrayMember({
              type: 'string',  
              title: 'Nested Array',
            }),
        ] 
  })
 
       
     ]


})