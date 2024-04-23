import { useState } from 'react';
import { ButtonMenu, DropdownMenu } from './MainMenu.styled';

export const MainMenu = () => {

    const [menuState, setMenuState] = useState(false);

    const menuClickHandler = () => {
        setMenuState(state => !state);

        // console.log(window?.asd);
    }

    return (
        <div>
            <ButtonMenu onClick={menuClickHandler}>Show menu</ButtonMenu>
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