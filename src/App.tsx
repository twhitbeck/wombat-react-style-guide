import React from 'react';

import Button from './components/Button';

export default function App() {
    return (
        <div className="App">
            <Button onClick={()=>alert('hey')}>Hey</Button>
        </div>
    );
}
