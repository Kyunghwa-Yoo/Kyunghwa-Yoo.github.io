/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"

type PostsProps = {
    posts: {
        slug: string
        title: string
        date: string
        excerpt: string
        description: string
        timeToRead?: number
        tags?: {
            name: string
            slug: string
        }[]
    }[]
}

const Blog = ({ posts }: PostsProps) => {
    const { tagsPath, basePath } = useMinimalBlogConfig()

    return (
        <Layout>
            <SEO title="Blog" />
            <Title text="Blog">
                <Link to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
                    모든 태그 보기
                </Link>
            </Title>
            <Listing posts={posts} sx={{ mt: [4, 5] }} />
        </Layout>
    )
}

export default Blog
