import { Inter } from 'next/font/google';

 const interFontClass = Inter({
    subsets: ['latin'],
});

export const interFont = interFontClass.className;