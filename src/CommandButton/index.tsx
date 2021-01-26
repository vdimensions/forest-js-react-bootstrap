import React, { FC } from "react";
import {Button} from "react-bootstrap";
import {ButtonVariant} from "react-bootstrap/types";
import {ButtonType} from "react-bootstrap/Button";

interface Props {
    command: any, // TODO: use ForestReactCommand type
    arg?: any,
    active?: boolean;
    block?: boolean;
    variant?: ButtonVariant;
    size?: 'sm' | 'lg';
    type?: ButtonType;
    disabled?: boolean;
}

export const CommandButton : FC<Props> = (props) => {
    const {command, arg, children} = props;
    const content = children || command.name;
    return (
        <Button
            type="button"
            {...props}
            href={command.path && `/${command.path}`}
            onClick={ (e: any) => { e.preventDefault(); command && command.invoke(arg); } }
            >
            {content}
        </Button>
    );
}
