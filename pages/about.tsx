import { GetStaticProps, GetStaticPropsContext } from "next"
import { useRouter } from "next/router"

export interface staticPostProps {
    postsData: any[]
}

const About = ({ postsData }: any) => {
    const router = useRouter()

    return (
        <div className="h-screen">
            {router.query.title}
        </div>
    )
}
About.layout = 'null'

export const getDataPosts:GetStaticProps<staticPostProps> = async (context: GetStaticPropsContext) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props: {
            postsData: data
        }
    }
}

export default About