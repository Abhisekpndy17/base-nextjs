import style from '../../styles/Home.module.css'
import Link from 'next/link'

const article = ({article}) => {
    return (
        <div className={style.main}>
            <div className={style.card}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            </div>
            <Link href='/article'><div className="more">Go to Blogs</div></Link>
        </div>
    )
}


export const getServerSideProps = async (context) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );
    const article = await res.json();
  
    return {
      props: {
        article,
      },
    }
  }
  

export default article