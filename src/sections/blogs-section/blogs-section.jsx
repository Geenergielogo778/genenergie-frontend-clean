import React, { useState, useEffect } from 'react';
import { fetchEntries } from './../../../contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function BlogsSection() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const contentType = 'blogG';

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchEntries(contentType);
        setItems(data.items || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container" background="#fff">
      <div style={styles.row}>
        {items.map((item, index) => {
          const imageUrl = item.fields.coverImage?.fields?.file?.url;
          const slug = item.fields.slug;  // Assuming you have a slug field

          return (
            <div style={styles.cardContainer} key={index}>
              <div style={styles.card}>
                {imageUrl && (
                  <div style={styles.imageContainer}>
                    <img
                      src={`https:${imageUrl}`}
                      alt={item.fields.title}
                      style={styles.image}
                    />
                  </div>
                )}
                <div style={styles.content}>
                  <h5 style={styles.title}>
                    {typeof item.fields.title === 'string'
                      ? item.fields.title
                      : documentToReactComponents(item.fields.title)}
                  </h5>
                  <div style={styles.description}>
                    {/* {documentToReactComponents(item.fields.fullDescription)} */}
                  </div>
                  <a
                    style={styles.link}
                    href={`/blog-main-page/${slug}`}  // Dynamic link to blog detail page
                    className="btn btn-primary"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center', 
    overflowX: 'auto', 
    gap: '20px', // Added spacing between cards
    padding: '0', 
    flexWrap: 'nowrap', 
    marginTop: '20px', 
    marginBottom: '20px', 
  },
  cardContainer: {
    flex: '0 0 auto', 
    marginRight: '20px', 
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    width: '300px', 
    height: '450px', 
    background: '#fff',
    display: 'flex',
    flexDirection: 'column', 
  },
  imageContainer: {
    width: '100%',
    height: '200px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 8px 0',
  },
  description: {
    fontSize: '1em',
    color: '#555',
    margin: '0 0 16px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    flexGrow: 1,
  },
  link: {
    display: 'block',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    background: '#0070f3',
    borderRadius: '4px',
    textAlign: 'center',
    textDecoration: 'none',
    marginTop: '-1rem',
  },
};

