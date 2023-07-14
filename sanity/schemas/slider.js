import {defineType, defineField} from "sanity";
export default defineType ({
    name : "slider",
    title: "Slider",
    type: "document",
    fields: [
        defineField({
        name: "imageUrl",
        title : 'Image URL',
        of:[{type: 'image'}],
        type: 'url'
    }),

    defineField({
        name: "description",
        title:"Description",
        type: 'string'

    }),

    defineField({
        name: "subdescription",
        title:"subDescription",
        type: 'string'

    }),

    defineField({
        name: "imageLink",
        title:"ImageLink",
        type: 'url'

    })
    ]
})