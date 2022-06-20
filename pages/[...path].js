import CarTransportHomepage from "@components/CarTransport/Homepage";
import { SEO_PAGES_GENERAL } from "@utils/seo/general-pages";



export default function CarTransportService(props) {
    const path = props.path
    const title = props.title
    const pageHeading = props.pageHeading
    const description = props.description
    const keywords = props.keywords

    return (
        <>
            <CarTransportHomepage
                path={path}
                title={title}
                pageHeading={pageHeading}
                description={description}
                keywords={keywords}
            />
        </>
    )
}

export async function getStaticProps({ params }) {
    console.log('params: ', params)

    const page = SEO_PAGES_GENERAL.filter( item => item.path === params.path.join('/') )[0]

    return {
        props: page,
    }
}

export async function getStaticPaths(context) {
    console.log('context: ', context)
    // Call an external API endpoint to get posts
    const pages = SEO_PAGES_GENERAL

    // Get the paths we want to pre-render based on posts
    const paths = pages.map((page) => ({
        params: { path: page.path.split('/') },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}