import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEntries } from './../../../contentful'; // Modify the fetch function as needed
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function fetchEntry(contentType, slug) {
    try {
        const entries = await fetchEntries(contentType);
        const entry = entries.items.find(item => item.fields.slug === slug);
        return entry;
    } catch (error) {
        console.error("Error fetching entry:", error);
        throw error;
    }
}

export default function BlogsMainPage() {
    const { slug } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchEntry('blogG', slug);
                setBlogPost(data || {});
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog post:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!blogPost || !blogPost.fields) {
        return <div>Blog post not found.</div>;
    }

    const title = blogPost.fields.title || {};
    const renderedTitle =
        typeof title === 'object' ? documentToReactComponents(title) : title;

    const description = blogPost.fields.description || {};
    const renderedDescription =
        typeof description === 'object' ? documentToReactComponents(description) : description;

    // Fetch the cover image URL
    const coverImage = blogPost.fields.coverImage || {};
    const coverImageUrl = coverImage.fields?.file?.url ? `https:${coverImage.fields.file.url}` : null;

    return (
        <div style={{ backgroundColor: 'white', borderRadius: '8px', textAlign: 'center', padding: '0' }}>
            {/* Display the cover image if it exists */}
            {coverImageUrl && (
                <img 
                    src={coverImageUrl} 
                    alt="Cover" 
                    style={{ width: '1000px', height: 'auto', objectFit: 'contain' }} 
                />
            )}
            <h1 style={{ margin: '2px 0' }}>{renderedTitle}</h1>
            
            {/* Wrap the description in a centered container with reduced width */}
            <div style={{ maxWidth: '800px', margin: '2px auto', textAlign: 'left' }}>
                {renderedDescription}
            </div>
        </div>
    );
}
