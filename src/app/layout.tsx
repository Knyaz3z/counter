export const metadata = {
    title: 'QR Counter',
    description: 'Простой счетчик для мероприятия',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body
            style={{
                margin: 0,
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#ffffff',
                color: '#000000',
            }}
        >
        {children}
        </body>
        </html>
    );
}
