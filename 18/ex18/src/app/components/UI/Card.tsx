import { ReactNode } from 'react';
import './Card.css';

function Card({ className, children } : {className: string, children: ReactNode}) {
    return <div className={`card ${className}`}>{children}</div>;
}

export default Card;