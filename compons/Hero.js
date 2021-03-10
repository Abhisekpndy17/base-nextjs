import style from '../styles/Hero.module.css';
import Parallax from 'react-rellax';
import Img from 'next/image'
import Intro from './Intro';

const Hero = () => {
    return (
        <>
        <div className={style.hero}>
            <div>
            <Parallax speed={2}>
                <Intro />
            </Parallax>
            </div>
            <div>
            <Parallax speed={-1}>
                <div className={style.card}>
                    <Img src='/img1.svg' height={900} width={900} alt='images'/>
                    </div>
            </Parallax>
            </div>
        </div>
        <div className={style.hero2}>
            <Parallax speed={-1}>
            <h1>Hello from Hero 2 </h1>
            </Parallax>
        </div>
        <div className={style.hero2}>
            <Parallax speed={1}>
            <h1>Hello from Hero 33333 </h1>
            </Parallax>
        </div>
        </>
    )
}

export default Hero