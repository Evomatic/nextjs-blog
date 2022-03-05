import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import UtilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
   <Layout home>
     <Head>
      <title>{siteTitle}</title>
     </Head>
     <section className={UtilStyles.headingMd}>
       <p>[Hi! I am Evan a software engineer based in Tokyo. I specialized in front-end development]</p>
       <p>
        (This is a sample website. You will be building more like this {' '}
        <a href="https://nextjs.org/learn"> Our next.js tutorial</a>)
       </p>
     </section>
   </Layout>   
  )
}
