export default function UpdateCard(props) {
    const { post } = props
    return (
            <div className="updateCard">
                <div className="font-bold border-b-4 border-t-4 border-accent p-1">
                    {post.date}
                </div>
                <div className="p-1">
                    {post.content}
                </div>
            </div>
    )
}