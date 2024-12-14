import { JetBrains_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Hero from "./Hero";
import About from "../components/About";
import StairTransition from "@/components/StairTransition";
import Projects from "@/components/Projects";
import Demo from "@/components/Demo";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});


export const metadata = {
  
  title: "Kenji's Portfolio",
  description: "Valentinus Kenji | Developer & Enthusiast",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"/>
      </head>
      <body className="overflow-x-hidden">
        <StairTransition>
        {/* Background layers */}
        <div className="fixed h-full w-full top-0 -z-10">
          <div className="absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {/* Fixed Header */}
        <Header />

        {/* Main Content with Top Padding to Prevent Overlap */}
        <div className="container mx-auto pt-16">
          <Hero />
          <About />
          <Projects/>
        </div>
        </StairTransition>
      </body>
    </html>
  );
}
