import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

// read file
function getPostContent(id) {
    const folder = 'updates/'
    const file = folder + `${id}`
    const content = fs.readFileSync(file, 'utf8')

    const matterResult = matter(content)
    return matterResult
}

function updateCard(update) {
    return (
        <div key={update.data.date} className='mb-4'>
            <p className='font-bold'>{update.data.date}</p>
            <Markdown options={{overrides: {
                ul: {
                    props: {
                        className: 'list-disc list-inside'
                    }
                }
            }}}>{update.content}</Markdown>
        </div>
    )
}

export default function Updates() {
    // read directory
    const folder = 'updates/'
    const files = fs.readdirSync(folder)

    // ensure only markdown files are read
    const markdownPosts = files.filter(file => file.endsWith('.md'))
    const sortedPosts = markdownPosts.map(string => string.slice(0, -3))

    // arrange chronologically
    sortedPosts.sort(function(a,b){
        return new Date(b) - new Date(a);
    })

    let markdownContent = []
    // for each file, get post content, and add to array
    for (let i = 0; i < sortedPosts.length; i++) {
        markdownContent.push(getPostContent(sortedPosts[i] + '.md'))
    }

        return (
            <div className='updateCard text-left text-sm pl-4 pr-2 text-accent overflow-y-auto max-h-64'>
                {
                    markdownContent.map((update) =>
                        updateCard(update)
                    )
                }
            </div>
        )
}
