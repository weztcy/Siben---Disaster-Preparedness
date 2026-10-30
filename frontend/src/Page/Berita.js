import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "../Component/NavigationBar";
import BeritaCard from "../Component/BeritaCard";
import "./Berita.css";
import Footer from "../Component/Footer";
import BannerPhoto from "../Component/BannerPhoto";
import BannerHome from "../Image/Banner/EarthDisaster.jpg";
import bgvideo from "../Video/RainWater.mp4";
import BackgroundVideo from "../Component/BackgroundVideo";
import API_BASE_URL from "../config";

function Berita() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/news`);
        setArticles(response.data);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Gagal memuat berita bencana.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const contentStyle = {
    position: "relative",
    zIndex: 0,
    color: "white",
    textAlign: "center",
  };

  return (
    <div className="Berita" style={contentStyle}>
      <BackgroundVideo src={bgvideo} />
      <BannerPhoto imageUrl={BannerHome} />
      <NavigationBar />
      <div style={{ marginBottom: "150px" }}>
        <h1>Berita Bencana</h1>
        {loading && <p style={{ fontSize: "18px" }}>Memuat berita...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && articles.map((article) => (
          <BeritaCard
            key={article.id}
            date={article.date}
            title={article.title}
            imageUrl={article.imageUrl}
            author={article.author}
            linkUrl={article.linkUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Berita;
