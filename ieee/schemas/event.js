export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'poster',
      title: 'Poster',
      type: 'image',  // Use 'image' type for uploading images
      options: {
        hotspot: true, // Enables better cropping
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',  // Simple text field
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',  // Assuming the date is a simple string like '24'
    },
    {
      name: 'month',
      title: 'Month',
      type: 'string',  // Assuming the month is a simple string like 'May'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url', 
    },
    // Add more fields as needed...
  ],
};
