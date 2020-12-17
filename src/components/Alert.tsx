import React from 'react';
import ReactDOM from 'react-dom'
import i18next from "i18next";

const AlertBody = ({header, text, setShowAlert}:any) => {
    return (
        <div
            className={'background'}
            onClick={() => {
                setShowAlert(false)
            }}
        >
            <div className={'alert'}>
                <h3 className={'alert__header'}>{ header }</h3>
                <p className={'alert__message'}>{ text }</p>
                <input
                    type="button"
                    className={'btn'}
                    value={ i18next.t('ok') as string }
                    onClick={() => {
                        setShowAlert(false)
                    }}
                />
            </div>
        </div>
    )
}

const Alert = ({header, text, setShowAlert}:any) => {
    const root = document.querySelector('.wrapper');

    // @ts-ignore
    return ReactDOM.createPortal(<AlertBody header={header} text={text} setShowAlert={setShowAlert}/>, root)
}

export default Alert;