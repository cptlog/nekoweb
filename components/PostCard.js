import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    const excerpt = post.description.slice(0,70) + ` ...`
    return (
        <Link className="unstyled" href={`/blog/${post.slug}`}>
            <div className="postCard mb-4">
                <div className="flex items-center text-right border-b-4 border-accent p-1">
                    <div>
                        <h3 className="font-bold">{post.title}</h3>
                    </div>
                    <div className="grow">
                        <p>{post.date}</p>
                    </div>
                </div>
                <p className="p-1">{excerpt}</p>
            </div>
        </Link>
    )
}