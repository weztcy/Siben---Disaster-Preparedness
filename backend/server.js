const express = require("express");
const bodyParser = require("body-parser");
const { sequelize, Disaster } = require("./models");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get("/disasters", async (req, res) => {
  try {
    const disasters = await Disaster.findAll({
      order: [["tanggal_bencana", "DESC"]],
    });
    res.json(disasters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/disasters", async (req, res) => {
  try {
    const disaster = await Disaster.create(req.body);
    res.json(disaster);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/disasters/:id", async (req, res) => {
  try {
    const disaster = await Disaster.findByPk(req.params.id);
    if (disaster) {
      res.json(disaster);
    } else {
      res.status(404).json({ error: "Disaster not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.put("/disasters/:id", async (req, res) => {
  try {
    const disaster = await Disaster.findByPk(req.params.id);
    if (disaster) {
      await disaster.update(req.body);
      res.json(disaster);
    } else {
      res.status(404).json({ error: "Disaster not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.delete("/disasters/:id", async (req, res) => {
  try {
    const disaster = await Disaster.findByPk(req.params.id);
    if (disaster) {
      await disaster.destroy();
      res.json({ message: "Disaster deleted" });
    } else {
      res.status(404).json({ error: "Disaster not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Dummy News Articles API
const newsArticles = [
  {
    id: 1,
    date: "2024-07-08",
    title: "Rumah Warga di Bogor Jebol Terbawa Longsor, Penghuni Diimbau Mengungsi",
    imageUrl: "/images/Berita/rumah-warga-terbawa-longsor-di-bogor_169.jpeg",
    author: "Rizky Adha Mahendra",
    linkUrl: "https://news.detik.com/berita/d-7427769/rumah-warga-di-bogor-jebol-terbawa-longsor-penghuni-diimbau-mengungsi",
  },
  {
    id: 2,
    date: "2024-07-07",
    title: "Atap 3 Ruang Kelas di SDN Sukadana Ambruk gegara Hujan Deras",
    imageUrl: "/images/Berita/bangunan-sdn-2-sukadana-di-kecamatan-tukdana-kabupaten-indramayu-ambruk-saat-hujan-deras-disertai-angin-melanda-wilayah-kecama_169.jpeg",
    author: "Sudedi Rasmadi",
    linkUrl: "https://www.detik.com/jabar/cirebon-raya/d-7426948/atap-3-ruang-kelas-di-sdn-sukadana-ambruk-gegara-hujan-deras",
  },
  {
    id: 3,
    date: "2024-07-05",
    title: "Mengenal Tas Survival Kit untuk Hadapi Bencana Alam",
    imageUrl: "/images/Berita/449cdbec-ab8e-490b-ac50-deaf98da1c46_169.jpeg",
    author: "Kanya Anindita Mutiarasari",
    linkUrl: "https://news.detik.com/berita/d-7424045/mengenal-tas-survival-kit-untuk-hadapi-bencana-alam",
  },
  {
    id: 4,
    date: "2024-07-03",
    title: "20 Rumah di Selayar Rusak Diterjang Gelombang Pasang, Sebagian Warga Pindah",
    imageUrl: "/images/Berita/gelombang-air-laut-pasang-masuk-ke-permukiman-warga-di-kabupaten-kepulauan-selayar_169.jpeg",
    author: "Nur Hidayah Said",
    linkUrl: "https://www.detik.com/sulsel/berita/d-7420923/20-rumah-di-selayar-rusak-diterjang-gelombang-pasang-sebagian-warga-pindah",
  },
  {
    id: 5,
    date: "2024-07-01",
    title: "Longsor Terjang 9 Rumah Warga di Sigi Sulteng, 17 KK Terdampak",
    imageUrl: "/images/Berita/longsor-di-sigi_169.jpeg",
    author: "Hafis Hamdan",
    linkUrl: "https://www.detik.com/sulsel/berita/d-7417891/longsor-terjang-9-rumah-warga-di-sigi-sulteng-17-kk-terdampak",
  },
  {
    id: 6,
    date: "2024-06-29",
    title: "Banjir hingga Longsor Landa Lengkong Kabupaten Sukabumi",
    imageUrl: "/images/Berita/banjir-di-kecamatan-lengkong-kabupaten-sukabumi_169.jpeg",
    author: "Syahdan Alamsyah",
    linkUrl: "https://www.detik.com/jabar/berita/d-7415235/banjir-hingga-longsor-landa-lengkong-kabupaten-sukabumi",
  },
  {
    id: 7,
    date: "2024-06-09",
    title: "Bencana Terus Terjang Karangasem meski Intensitas Hujan Turun",
    imageUrl: "/images/Berita/tanah-longsor-di-banjar-dinas-batu-gede-desa-duda-timur-kecamatan-selat-karangasem-minggu-962024-dok-bpbd-karangasem_169.jpeg",
    author: "I Wayan Sui Suadnyana, I Wayan Selamat Juniasa",
    linkUrl: "https://www.detik.com/bali/berita/d-7382247/bencana-terus-terjang-karangasem-meski-intensitas-hujan-turun",
  },
  {
    id: 8,
    date: "2024-06-29",
    title: "27 Bencana Landa Karangasem Imbas Hujan Deras, Tanah Longsor hingga Banjir",
    imageUrl: "/images/Berita/penanganan-longsor-di-jalan-wilayah-sang-hyang-ambu-desa-bugbug-karangasem-jumat-762024-i-wayan-selamat-juniasadetikbali_169.jpeg",
    author: "I Wayan Sui Suadnyana, I Wayan Selamat Juniasa",
    linkUrl: "https://www.detik.com/bali/berita/d-7379888/27-bencana-landa-karangasem-imbas-hujan-deras-tanah-longsor-hingga-banjir",
  },
];

app.get("/news", (req, res) => {
  res.json(newsArticles);
});

app.get("/news/:id", (req, res) => {
  const article = newsArticles.find((n) => n.id === parseInt(req.params.id, 10));
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

// Proxy Weather API from BMKG (adm4 33.74.01.1001 = Semarang Tengah)
app.get("/weather", async (req, res) => {
  try {
    const fetchResponse = await fetch(
      "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=33.74.01.1001"
    );
    const json = await fetchResponse.json();

    const dataObj = Array.isArray(json.data) ? json.data[0] : json.data;
    const weatherDays = dataObj?.cuaca || [];
    const flattenedList = weatherDays.flat();

    const formattedData = flattenedList.map((item) => {
      const tempC = item.t;
      const tempF = Math.round((tempC * 9) / 5 + 32);

      return {
        jamCuaca: item.local_datetime || item.datetime,
        cuaca: item.weather_desc,
        kodeCuaca: item.weather,
        humidity: item.hu,
        tempC: tempC,
        tempF: tempF,
        imageUrl: item.image,
      };
    });

    res.json(formattedData);
  } catch (error) {
    console.error("BMKG weather fetch error:", error);
    res.status(500).json({ error: "Gagal mengambil data cuaca BMKG" });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
