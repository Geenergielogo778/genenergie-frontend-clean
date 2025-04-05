import { createClient } from 'contentful';

const client = createClient({
  space: 'uuj6q1csobnv',
  accessToken: '5ibdR9FC3FMlfL8OnCYKzsNCu3i9akXTiiNB4Kh-h2I'
});

export async function fetchEntries(contentType) {
  try {
    const entries = await client.getEntries({ 
      content_type: contentType, // Specify your content model ID here
      include: 1 
    });

    if (entries.items) {
      return entries; // Return the entries object as expected
    } else {
      console.error('No items found in entries.');
      return { items: [], includes: { Asset: [] } }; // Return a default empty structure
    }
  } catch (error) {
    console.error('Error fetching entries:', error); // Log the error for debugging
    return { items: [], includes: { Asset: [] } }; // Return a default empty structure in case of an error
  }
}
