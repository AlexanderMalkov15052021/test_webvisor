import { useState } from 'react';
import { ButtonMenu, DropdownMenu } from './MainMenu.styled';

export const MainMenu = () => {

    const [menuState, setMenuState] = useState(false);

    console.log("Test webvisor 22");

    return (
        <div>
            <ButtonMenu onClick={() => setMenuState(state => !state)}>Show menu</ButtonMenu>

            {
                menuState && <DropdownMenu>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                    </ul>
                </DropdownMenu>
            }
        </div>
    );
}