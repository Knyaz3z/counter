import Link from 'next/link';

export default function HomePage() {
    return (
        <div style={{ textAlign: 'center', marginTop: 100 }}>
            <h1>QR Counter</h1>

            <div style={{ marginTop: 40 }}>
                <p>
                    <Link href="/screen">Открыть экран</Link>
                </p>

                <p>
                    <Link href="/vote">Открыть страницу с кнопкой</Link>
                </p>
            </div>
        </div>
    );
}
