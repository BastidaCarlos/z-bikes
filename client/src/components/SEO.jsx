import { Helmet } from "react-helmet-async";

function SEO({
    title,
    description, 
    path = '',
    image = 'https://zbikes.com.mx/og-image.webp'
}) {
    const siteUrl = 'https://zbikes.com.mx';
    const currentUrl = `${siteUrl}${path}`
    const defaultTitle = "Z-Bikes Adventure MTB Zumpango" 

    return (
        <Helmet>
            <title>{title ? `${title} | Z-Bikes` : defaultTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    )
}

export default SEO;