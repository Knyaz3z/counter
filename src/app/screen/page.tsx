'use client';

import {useEffect, useState} from 'react';

export default function ScreenPage() {
    const [counter, setCounter] = useState<number | null>(null);

    async function load() {
        const res = await fetch('/api/get-counter');
        const data = await res.json();
        setCounter(data.counter);
    }

    useEffect(() => {
        load();
        const id = setInterval(load, 2000);
        return () => clearInterval(id);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: 80 }}>
            <h1>Осталось:</h1>
            <div style={{ fontSize: 120 }}>{counter ?? '...'}</div>

            <p style={{ marginTop: 40 }}>
                Отсканируйте QR и нажмите кнопку
            </p>

            {/* QR можно сгенерировать любым сервисом */}
            <img
                src="/qr-code.png"
                alt="QR"
                style={{ width: 200, marginTop: 20 }}
            />
        </div>
    );
}
