import {defineField, defineType} from 'sanity'
import {MdShowChart as icon} from 'react-icons/md'

export default defineType({
    name: 'show',
    title: 'Show',
    type: 'document',
    icon,
    fields: [
        defineField({
            name: 'placeName',
            title: 'Place Name',
            type: 'string',
            description: 'Name of the place'
        }),
        defineField({
            name:"id",
            title:"Identification-slug",
            type: 'slug',
            description: "Used to generate the url of the show"
        }),
        defineField({
            name:"description",
            title:"description",
            type: 'blockContent',
            description: "Show description"
        }),
        defineField({
            name: 'locationAddress',
            title: "Address",
            type: 'string'
        }),
        defineField({
            name: 'performances',
            title: 'Performances',
            type: 'array',
            of: [{type: 'performances',}],
          }),
        defineField({
            name: 'salesLink',
            title: "Sales link",
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        })
    ]

})