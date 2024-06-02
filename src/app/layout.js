import { Inter, Source_Code_Pro, Sora} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const inter = Inter({
  subsets: ["latin"], variable: "--font-inter" 
});
const sora = Sora({
  subsets: ["latin"], variable: "--font-sora" 
});
const sc = Source_Code_Pro({
  subsets: ["latin"], variable: "--font-code-pro"  
});

export const metadata = {
  title: "Brainwave",
  description: "Explore the Possibilities of AI Chatting with Brainwave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sc.variable} ${inter.variable} ${sora.variable}`}>
        <div className="w-full">
          <Header/>
        </div>
        {children}
      </body>
    </html>
  );
}
