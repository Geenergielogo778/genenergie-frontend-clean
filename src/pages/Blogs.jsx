import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import BannerSection from 'src/sections/banner-section/banner';
import BlogsLastSection from 'src/sections/blogs-section/blogs-last-section';
import BlogsSection from 'src/sections/blogs-section/blogs-section';


// ----------------------------------------------------------------------

export default function BlogsPage() {
  
  return (
    <>
      <Helmet>
        <title> GE Energie Logo FAQs: Get Answers to Your Logo Design Questions </title>
        <link rel="canonical" href="https://www.geenergielogo.com/faqs/" />
      </Helmet>

      <Box>
        <BannerSection
          image="/assets/banner/faqs-banner.png"
          headingTitle={"Blogs"}
          heading={"This is a blog"}
          description={"Blog Description"}
          minHeight="620px"
          hideInput
        />
        <BlogsSection/>
        {/* <BlogsLastSection hasShape/> */}
        
      </Box>
    </>
  );
}
