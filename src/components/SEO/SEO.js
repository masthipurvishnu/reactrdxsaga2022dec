import React from "react";
import { Helmet } from "react-helmet-async";
const SEO = ({ title, description, name, type }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />

                <meta property="fb:app_id" content="ID_APP_FACEBOCK" />
                <meta property="og:type" content={type} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />

                <meta name="twitter:creator" content={name} />
                <meta name="twitter:card" content={type} />
                <meta name="twitter:description" content={description} />

            </Helmet>
        </>
    )
}
export default SEO