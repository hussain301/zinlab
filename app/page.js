import Bookmarks from "@/components/Bookmarks";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { pdfTiles,bookmarkTiles } from "@/components/Data/tilesData";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <>
      <Header />
      <Bookmarks tiles={bookmarkTiles} title='Your bookmarks'/>
      <Slide tiles={pdfTiles} heading='Convert from PDF' />
      <Bookmarks tiles={pdfTiles.slice(0,5)} title='Convert from PDF'/>
      <Bookmarks tiles={pdfTiles.slice(0, 5)} title='Convert to PDF' />
      {/* <div className="mt-16" /> */}
      <Footer />

    </>
  );
  
}
