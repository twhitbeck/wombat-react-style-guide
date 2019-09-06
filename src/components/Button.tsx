import React from 'react';
import classNames from 'classnames';

/**
 * Our default flexible button base
 */
export default function Button(props: ButtonProps) {
    const {
        isDisabled = false,
        shape = 'default',
        type = 'default',
        size = 'medium',
        onClick,
        children
    } = props;

    function typeClasses(): string {
        return {
            default: 'text-theme-primary border-theme-primary',
            primary: 'bg-theme-primary text-white',
            danger: 'bg-error text-white'
        }[type];
    }

    function sizeClasses(): string {
        return {
            small: classNames('text-xs leading-tight', {'px-2': shape !== 'circle'}),
            medium: classNames('text-base leading-normal', {'px-5': shape !== 'circle'}),
            large: classNames('text-lg leading-loose', {'px-8': shape !== 'circle'}),
        }[size];
    }

    function shapeClasses(): string {
        return {
            default: 'rounded-sm',
            circle: classNames(
                'rounded-100',
                {
                    small: 'h-6 w-6',
                    medium: 'h-8 w-8',
                    large: 'h-10 w-10'
                }[size]
            ),
            pill: 'rounded-full'
        }[shape];
    }

    function disabledClasses(): string {
        return classNames(
            'disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-300',
            {
                'hover:shadow-md': !isDisabled,
                'cursor-default': isDisabled
            }
        );
    }

    const className = classNames(
        'border border-solid',
        typeClasses(),
        sizeClasses(),
        shapeClasses(),
        disabledClasses()
    );

    return (
        <button className={className} disabled={isDisabled} onClick={onClick}>
            {children}
        </button>
    );
}

interface ButtonProps {
    type?: 'default' | 'primary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    shape?: 'default' | 'circle' | 'pill';
    isDisabled?: boolean;
    onClick: () => void;
    children: React.ReactNode;
}