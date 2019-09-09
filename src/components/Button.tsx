import React from 'react';
import classNames from 'classnames';

/**
 * Our default flexible button base
 */
export default function Button(props: ButtonProps) {
    const {
        isDisabled = false,
        isBlock = false,
        isBorder = false,
        isBorderless = false,
        shape = 'default',
        type = 'default',
        size = 'medium',
        onClick,
        children
    } = props;

    function typeClasses(): string {
        return type === 'default' ? '' : `btn-${type}`;
    }

    function sizeClasses(): string {
        return {
            small: 'btn-s',
            medium: 'btn-m',
            large: 'btn-l',
        }[size];
    }

    function shapeClasses(): string {
        return type === 'default' ? '' : `btn-${shape}`;
    }

    const className = classNames(
        'btn',
        {'btn-block': isBlock},
        {'btn-border': isBorder},
        {'btn-borderless': isBorderless},
        typeClasses(),
        sizeClasses(),
        shapeClasses()
    );

    return (
        <button className={className} disabled={isDisabled} onClick={onClick}>
            {children}
        </button>
    );
}

interface ButtonProps {
    type?: 'default' | 'primary' | 'link' | 'danger' | 'success' | 'warning' | 'info';
    size?: 'small' | 'medium' | 'large';
    shape?: 'default' | 'circle' | 'pill' | 'square';
    isBlock?:boolean;
    isDisabled?: boolean;
    isBorder?:boolean;
    isBorderless?:boolean;
    onClick: () => void;
    children: React.ReactNode;
}