import React, {ReactNode} from 'react';
import classNames from 'classnames';

import './Alert.scss';

/**
 * The Alert component which renders children for its msg-alert div
 */
export default function Alert( props:AlertProps ) {
    const { type, dismissible, handleDismissClick, animate_open, children } = props;

    const classes = classNames(
        'wombat-alert-container',
        'platform',
        { 'animate-open': animate_open }
    );

    return (
        <div className={classes}>
            <div className={`wombat-alert alert-${type}`}>
                <div className="icon-alert">
                    <i className={`status-icon fa ${getIconFromType( type )}`} />
                </div>

                <div className="msg-alert">
                    {children}
                </div>

                {dismissible && (
                    <button className="btn-link btn-alert" onClick={handleDismissClick}>
                        <i className="fa fa-close-thin" />
                    </button>
                )}
            </div>
        </div>
    )
}

function getIconFromType( type:AlertProps['type'] ) {
    return {
        success: 'fa-check-circle',
        error: 'fa-times-circle',
        warning: 'fa-exclamation-circle',
        info: 'fa-info-circle',
        'global-info': 'fa-info-circle'
    }[type];
}


// ensure that if the user says this alert is dismissible, they provide how to dismiss it
type DismissXOR =
    { dismissible:true; handleDismissClick:() => void } |
    { dismissible:false; handleDismissClick?:never }

type AlertProps = DismissXOR & {
    type:'error' | 'global-info' | 'info' | 'warning' | 'success';
    handleDismissClick?:() => void;
    animate_open:boolean;
    children:ReactNode;
}
