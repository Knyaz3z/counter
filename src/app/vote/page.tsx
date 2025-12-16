'use client';

import {useState} from 'react';

export default function VotePage() {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);

    async function vote() {
        setLoading(true);
        await fetch('/api/decrement', { method: 'POST' });
        setDone(true);
        setLoading(false);
    }

    return (
        <div style={{ textAlign: 'center', marginTop: 100 }}>
            <h1>Нажми кнопку</h1>

            <button
                onClick={vote}
                disabled={loading || done}
                style={{
                    fontSize: 24,
                    padding: '20px 40px',
                    cursor: 'pointer',
                }}
            >
                {done ? 'Спасибо!' : 'Нажать'}
            </button>
        </div>
    );
}
