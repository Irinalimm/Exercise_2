import Header from "@/Components/Header"
import Footer from "@/Components/Footer"
import styles from '@/styles/About.module.css'
import Counter from "@/Components/Counter"


export default function About() {
    return (
        <>
            <Header/>
            <main className={styles.main}>
                <Counter/>

            </main>

            <Footer/>
        
        </>
    )
}