import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    title: "Dashboard",
    description: 'Dashboard Unscript for managing all data',
    openGraph: {
        title: "Dasboard",
        description: 'Lets start to mananing your data',
        url: '/usr'
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
    )
}