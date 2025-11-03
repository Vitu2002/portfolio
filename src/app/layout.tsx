import PageLoad from '@components/PageLoad';
import { Header } from '@layouts/Header';
import '@styles/global.scss';
import type { Metadata } from 'next';
import { JetBrains_Mono, Lato, Nunito, Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700', '900'],
    variable: '--font-lato',
});

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-nunito',
});

const mono = JetBrains_Mono({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-jetbrains',
});

export const metadata: Metadata = {
    title: 'Vitu2002 | Portfólio',
    description: 'Portfólio pessoal de Vitor L.',
};

const fonts = [poppins, lato, nunito, mono];

export default function RootLayout({ children }: RootProps) {
    return (
        <html className={fonts.map(f => f.variable).join(' ')} lang='pt-br'>
            <body>
                <PageLoad />
                <Header />
                {children}
            </body>
        </html>
    );
}

interface RootProps {
    children: React.ReactNode;
}
