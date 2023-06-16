import Head from "next/head";
import { FunctionFC } from "../components/function/FunctionFC";
import Layout from '../components/layout';
import { ForwardRef } from "../components/forwardRef/ForwardRef";
import { ForwardRef2 } from "../components/forwardRef/ForwardRef2";


function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div>
                <h1>Home</h1>
                <FunctionFC />
                <ForwardRef />
                <ForwardRef2 />
            </div>
        </Layout>
    )
}

export default HomePage