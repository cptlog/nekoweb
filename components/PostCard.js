import Link from "next/link";

export default function PostCard(props) {
    const { post } = props
    return (
        <Link className="unstyled" href={`/post/${post.slug}`}>
            <div className="postCard">
                <h3>{post.title}</h3>
                <p>{post.date}</p>
            </div>
        </Link>
    )
}