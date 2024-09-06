import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/app/components/layout/header";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: {
        default: "My Blog",
        template: "%s | My Blog"
    },
    description: "Unlock affordable travel secrets! Our blog shares money-saving hacks, destination guides, and expert advice to help you plan your dream trip.",
    twitter: {
        card: "summary_large_image"
    },
    keywords: "Blog, Articles, Photos, Content, Writing, Photography, Creativity, Inspiration, Lifestyle, Fashion, Travel, Food, Health, Wellness, Beauty, Art, Culture, Entertainment, Reviews",
}
export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${inter.className} p-10 bg-gray-100 rounded-lg`}>
                <header>
                    <Header/>
                </header>
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
