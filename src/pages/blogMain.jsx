import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import BlogsMainSection from 'src/sections/blogs-section/blogs-main-section';
import { fetchEntries } from './../../contentful'; // Adjust path as needed

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
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchEntry('blogG', slug); // Use slug from useParams
                if (data) {
                    let fetchedTitle = data.fields.title || 'Default Title';

                    // If fetchedTitle is an object, extract the plain text
                    if (typeof fetchedTitle === 'object') {
                        // Assuming the title is a simple text object, adjust if needed
                        fetchedTitle = fetchedTitle.content[0]?.content[0]?.value || 'Default Title';
                    }

                    setTitle(fetchedTitle);
                }
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

    return (
        <>
            <Helmet>
                <title>{title}</title>
                <link rel="canonical" href={`https://www.geenergielogo.com/faqs/${slug}`} />
            </Helmet>

            <Box>
                <BannerSection
                    image="/assets/web-d.png"
                    heading={title}
                    minHeight="500px"
                    hideInput
                />
                <BlogsMainSection />
                {/* <BlogsLastSection hasShape /> */}
            </Box>
        </>
    );
}
