import CommentSection from '@/components/CommentSection'
import BlogSection from '@/components/BlogSection'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: BlogSection,
            name: 'blog-section'
        },
        {
            path: '/comment/:id',
            component: CommentSection,
            name: 'comment'
        },
        // {
        //     path: '*',
        //     redirect: '/'
        // }
    ]
}