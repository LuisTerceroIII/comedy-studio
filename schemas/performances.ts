import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'performances',
    title: 'performances',
    type: 'object',
    description: 'performances of show',
    fields: [
        defineField({
            name: 'date',
            title: 'Date of performance',
            type: 'datetime',
            description: 'Select start date and time',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
            }
        }),
    ]

})