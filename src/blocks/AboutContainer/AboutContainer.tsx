import Link from 'next/link';
import { Container, DescriptionBlock, NavButton } from './AboutContainer.styled';

export const MainContent = () => {

    return (
        <Container>
            <h1>Test webvisor 32</h1>
            <h2>Main page</h2>
            <div>
                <NavButton><Link href={'/'}>Main page</Link></NavButton>
                <NavButton><Link href={'/about'}>About page</Link></NavButton>
            </div>
            <DescriptionBlock>Главная!!!</DescriptionBlock>
            <img src="./img/YaMetrika.png" alt={"Picture"}></img>
        </Container>
    );
}