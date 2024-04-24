import Link from 'next/link';
import { Container, DescriptionBlock, NavButton } from './MainContent.styled';
import { MainMenu } from '../MainMenu/MainMenu';

export const MainContent = () => {

    return (
        <Container>
            <h1>Test webvisor 30</h1>
            <h2>Main page</h2>
            <div>
                <NavButton><Link href={'/'}>Main page</Link></NavButton>
                <NavButton><Link href={'/about'}>About page</Link></NavButton>
            </div>
            <DescriptionBlock>Главная!!!</DescriptionBlock>
            <img src="https://api.webstr.ru/files/img/competence/YaMetrika.png" alt={"Picture"}></img>
            <MainMenu />
        </Container>
    );
}