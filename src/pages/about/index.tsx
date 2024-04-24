import { Container, NavButton, DescriptionBlock } from '@/blocks/AboutContainer/AboutContainer.styled';
import Link from 'next/link';

import styles from "@/styles/Home.module.css";

export default function About() {

  return (
    <main className={`${styles.main}`}>
      <Container>
        <h1>Test webvisor 31</h1>
        <h2>About page</h2>
        <div>
          <NavButton><Link href={'/'}>Main page</Link></NavButton>
          <NavButton><Link href={'/about'}>About page</Link></NavButton>
        </div>
        <DescriptionBlock>Описание!!!</DescriptionBlock>
        <img src="./img/YaMetrika.png" alt={"Picture"}></img>
      </Container>
    </main>
  );
}