import React from 'react'
// CSS
import styles from './Container.module.css'

const Container = ({ children }) => {
    return (
        <div className={`${styles.container} ${styles.full}`}>
            {children}
        </div>
    )
}

export default Container