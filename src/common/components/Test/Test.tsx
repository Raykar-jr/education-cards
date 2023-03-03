import React from 'react';
import SuperInputText from "./c1-SuperInputText/SuperInputText";
import SuperButton from "./c2-SuperButton/SuperButton";
import SuperCheckbox from "./c3-SuperCheckbox/SuperCheckbox";

export const Test = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>Button</SuperButton>
            <SuperButton id={'hw4-super-button-red'} xType={'red'}>
                red
            </SuperButton>
            <SuperButton
                id={'hw4-super-button-disabled'}
                xType={'red'}
                disabled
            >
                disabled
            </SuperButton>
            <SuperButton
                id={'hw4-super-button-secondary'}
                xType={'secondary'}
            >
                secondary
            </SuperButton>
            <SuperCheckbox />
        </div>
    );
};
