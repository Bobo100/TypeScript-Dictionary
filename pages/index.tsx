import Head from "next/head";
import { FunctionFC } from "../components/function/FunctionFC";
import Layout from '../components/layout';


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <h1>Home</h1>
                <FunctionFC />
            </div>
        </Layout>
    )
}

export default HomePage