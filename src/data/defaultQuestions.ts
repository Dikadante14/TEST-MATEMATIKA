import { Question } from '../types';
import imgSawah from '../assets/images/ekosistem_sawah_1795665066935.jpg';
import imgKolam from '../assets/images/ekosistem_kolam_1795665067347.jpg';
import imgKebun from '../assets/images/ekosistem_kebun_1795665068503.jpg';
import imgPantai from '../assets/images/ekosistem_pantai_1795665069032.jpg';
import imgTaman from '../assets/images/ekosistem_taman_1795665069392.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // --- PILIHAN GANDA (18 SOAL) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Komponen Biotik',
    difficulty: 'Mudah',
    text: 'Dalam suatu ekosistem terdapat berbagai penyusun lingkungan. Yang dimaksud dengan komponen biotik adalah komponen ekosistem yang terdiri atas...',
    options: [
      { id: 'A', text: 'Benda-benda tak hidup seperti batu, air, dan udara' },
      { id: 'B', text: 'Seluruh makhluk hidup seperti manusia, hewan, tumbuhan, dan mikroorganisme' },
      { id: 'C', text: 'Sumber energi panas yang berasal dari cahaya matahari' },
      { id: 'D', text: 'Kondisi cuaca, suhu, dan kelembapan di suatu wilayah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Komponen biotik berasal dari kata "bios" yang berarti hidup. Komponen biotik mencakup seluruh makhluk hidup dalam ekosistem, meliputi manusia, hewan, tumbuhan, jamur, serta mikroorganisme seperti bakteri.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Identifikasi Komponen Biotik (Gambar Sawah)',
    difficulty: 'Mudah',
    imageUrl: imgSawah,
    imageCaption: 'Ilustrasi Ekosistem Sawah',
    text: 'Perhatikan gambar ekosistem sawah di atas! Kelompok komponen biotik yang tampak secara jelas pada gambar tersebut adalah...',
    options: [
      { id: 'A', text: 'Air irigasi, batu sungai, dan awan putih' },
      { id: 'B', text: 'Tanaman padi, katak, dan burung bangau putih' },
      { id: 'C', text: 'Tanah pematang, sinar matahari, dan tanaman padi' },
      { id: 'D', text: 'Batu besar, air sawah, dan tanah lumpur' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pada gambar ekosistem sawah, yang termasuk makhluk hidup (komponen biotik) adalah tanaman padi, katak yang berada di atas batu, dan burung bangau putih. Air, batu, tanah, awan, dan sinar matahari merupakan komponen abiotik.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Pengertian Komponen Abiotik',
    difficulty: 'Mudah',
    text: 'Komponen abiotik merupakan bagian penting dalam ekosistem yang mendukung kehidupan makhluk hidup. Manakah pernyataan yang paling tepat menjelaskan komponen abiotik?',
    options: [
      { id: 'A', text: 'Makhluk hidup yang dapat membuat makanannya sendiri' },
      { id: 'B', text: 'Organisme pengurai yang memecah sisa makhluk hidup' },
      { id: 'C', text: 'Komponen benda tak hidup atau fisik dan kimiawi yang memengaruhi makhluk hidup' },
      { id: 'D', text: 'Hewan pemakan tumbuhan dan pemakan daging di alam' },
    ],
    correctAnswer: 'C',
    explanation:
      'Komponen abiotik ("a" = tidak, "bios" = hidup) adalah komponen benda tak hidup secara fisik maupun kimiawi dalam lingkungan, misalnya cahaya matahari, air, udara, tanah, suhu, dan batu.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pengelompokan Komponen Abiotik',
    difficulty: 'Mudah',
    text: 'Perhatikan kelompok benda dan unsur lingkungan berikut ini! Manakah kelompok yang SELURUHNYA terdiri atas komponen abiotik?',
    options: [
      { id: 'A', text: 'Rumput, tanah, belalang, dan air' },
      { id: 'B', text: 'Cahaya matahari, udara, tanah, dan air' },
      { id: 'C', text: 'Batu kerikil, cacing tanah, pasir, dan suhu' },
      { id: 'D', text: 'Pohon kelapa, angin, air laut, dan kepiting' },
    ],
    correctAnswer: 'B',
    explanation:
      'Cahaya matahari, udara, tanah, dan air seluruhnya adalah benda/unsur tak hidup (abiotik). Rumput, belalang, cacing tanah, pohon kelapa, dan kepiting merupakan makhluk hidup (biotik).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Membedakan Biotik & Abiotik (Gambar Kolam)',
    difficulty: 'Sedang',
    imageUrl: imgKolam,
    imageCaption: 'Ilustrasi Ekosistem Kolam Air Tawar',
    text: 'Amati gambar ekosistem kolam air tawar di atas dengan saksama! Pasangan pengelompokan komponen biotik dan abiotik yang BENAR sesuai gambar adalah...',
    options: [
      { id: 'A', text: 'Biotik: ikan mas dan teratai; Abiotik: air, batu, dan pasir dasar kolam' },
      { id: 'B', text: 'Biotik: air kolam dan gelembung udara; Abiotik: siput air dan ikan mas' },
      { id: 'C', text: 'Biotik: batu besar dan pasir; Abiotik: bunga teratai dan tanaman air' },
      { id: 'D', text: 'Biotik: cahaya matahari dan siput; Abiotik: tanaman air dan ikan mas' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada gambar kolam: ikan mas, siput air, bunga teratai, dan tanaman air adalah makhluk hidup (komponen biotik). Sementara air, batu, kerikil, pasir, gelembung udara, dan cahaya matahari adalah komponen tak hidup (komponen abiotik).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Komponen Biotik Pengurai (Dekomposer)',
    difficulty: 'Sedang',
    text: 'Di halaman sekolah SDN 2 Cupel terdapat tumpukan daun kering yang lama-kelamaan membusuk dan hancur bercampur dengan tanah berkat bantuan jamur dan bakteri. Berdasarkan sifatnya, jamur dan bakteri tersebut termasuk komponen...',
    options: [
      { id: 'A', text: 'Abiotik karena ukurannya sangat kecil' },
      { id: 'B', text: 'Abiotik karena hidup di dalam tanah yang mati' },
      { id: 'C', text: 'Biotik karena merupakan makhluk hidup yang berperan sebagai pengurai' },
      { id: 'D', text: 'Biotik karena berbentuk batu dan mineral tanah' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jamur dan bakteri merupakan makhluk hidup mikroskopis/sederhana yang bernapas, tumbuh, dan berkembang biak. Oleh karena itu, keduanya termasuk komponen biotik dengan peran sebagai pengurai (dekomposer).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Klasifikasi Komponen Halaman Sekolah',
    difficulty: 'Sedang',
    text: 'Siswa kelas VI mengamati komponen di sekitar halaman sekolah dan mencatat hasil sebagai berikut:\n(1) Pohon mangga\n(2) Batu koral\n(3) Kupu-kupu\n(4) Sinar matahari\n(5) Rumput teki\n(6) Air hujan\n\nBerdasarkan daftar tersebut, nomor yang menunjukkan komponen ABIOTIK adalah...',
    options: [
      { id: 'A', text: '(1), (3), dan (5)' },
      { id: 'B', text: '(2), (4), dan (6)' },
      { id: 'C', text: '(1), (2), dan (4)' },
      { id: 'D', text: '(3), (5), dan (6)' },
    ],
    correctAnswer: 'B',
    explanation:
      'Komponen abiotik adalah benda tak hidup: (2) batu koral, (4) sinar matahari, dan (6) air hujan. Sedangkan (1) pohon mangga, (3) kupu-kupu, dan (5) rumput teki adalah makhluk hidup (komponen biotik).',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Peran Komponen Abiotik bagi Tumbuhan',
    difficulty: 'Mudah',
    text: 'Tumbuhan hijau sebagai komponen biotik (produsen) tidak dapat melakukan proses fotosintesis tanpa bantuan komponen abiotik. Komponen abiotik utama yang dibutuhkan tumbuhan untuk fotosintesis adalah...',
    options: [
      { id: 'A', text: 'Batu kerikil, pasir, dan angin kencang' },
      { id: 'B', text: 'Cahaya matahari, air, dan gas karbon dioksida' },
      { id: 'C', text: 'Cacing tanah, lebah, dan kupu-kupu' },
      { id: 'D', text: 'Logam, plastik, dan suara guntur' },
    ],
    correctAnswer: 'B',
    explanation:
      'Untuk membuat makanan melalui fotosintesis, tumbuhan membutuhkan cahaya matahari sebagai sumber energi, air yang diserap akar dari tanah, serta gas karbon dioksida (CO₂) dari udara. Ketiganya adalah komponen abiotik.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Interaksi Biotik dan Abiotik (Gambar Kebun)',
    difficulty: 'Sedang',
    imageUrl: imgKebun,
    imageCaption: 'Ilustrasi Ekosistem Kebun Sayur dan Tanah',
    text: 'Perhatikan gambar ekosistem kebun sayur di atas! Di dalam lapisan tanah terlihat cacing tanah (komponen biotik). Bagaimanakah pengaruh aktivitas cacing tanah tersebut terhadap komponen abiotik tanah di sekitarnya?',
    options: [
      { id: 'A', text: 'Membuat tanah menjadi keras dan kedap air sehingga akar tidak bisa tumbuh' },
      { id: 'B', text: 'Menggemburkan tanah dan membuat rongga udara sehingga tanah menjadi subur' },
      { id: 'C', text: 'Menghilangkan seluruh kandungan air hujan dari permukaan tanah' },
      { id: 'D', text: 'Mengubah tanah kebun menjadi batu koral yang kering' },
    ],
    correctAnswer: 'B',
    explanation:
      'Cacing tanah membuat terowongan/lubang kecil di dalam tanah sehingga udara dan air hujan mudah masuk. Kotoran cacing juga menambah kesuburan tanah. Ini adalah contoh komponen biotik memengaruhi komponen abiotik.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Ciri Pembeda Biotik dan Abiotik',
    difficulty: 'Mudah',
    text: 'Mengapa seekor kambing termasuk komponen biotik, sedangkan sebongkah batu di padang rumput termasuk komponen abiotik?',
    options: [
      { id: 'A', text: 'Karena kambing memiliki ukuran tubuh yang lebih besar daripada batu' },
      { id: 'B', text: 'Karena batu berwarna abu-abu sedangkan kambing berwarna putih' },
      { id: 'C', text: 'Karena kambing bernapas, tumbuh, memerlukan makan, dan berkembang biak, sedangkan batu tidak' },
      { id: 'D', text: 'Karena kambing hanya hidup di darat sedangkan batu hanya ada di sungai' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ciri utama komponen biotik (makhluk hidup) adalah melakukan proses kehidupan seperti bernapas, tumbuh dan berkembang, memerlukan nutrisi/makanan, peka terhadap rangsang, serta berkembang biak. Benda tak hidup (abiotik) seperti batu tidak memiliki ciri-ciri tersebut.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Ketergantungan Biotik pada Abiotik',
    difficulty: 'Sedang',
    text: 'Ikan yang hidup di sungai sangat bergantung pada keberadaan komponen abiotik air dan oksigen terlarut. Apabila air sungai tersebut mengering total saat kemarau panjang, peristiwa yang akan terjadi pada populasi ikan adalah...',
    options: [
      { id: 'A', text: 'Ikan akan berkembang biak lebih cepat di atas batu kering' },
      { id: 'B', text: 'Ikan akan mengalami kesulitan bernapas dan akhirnya mati karena kehilangan habitat air' },
      { id: 'C', text: 'Ikan berubah sifat menjadi komponen abiotik secara permanen' },
      { id: 'D', text: 'Ikan akan melakukan fotosintesis untuk menggantikan kebutuhan air' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ikan bernapas menggunakan insang yang memerlukan oksigen terlarut di dalam air. Jika komponen abiotik berupa air hilang atau mengering, kelangsungan hidup komponen biotik (ikan) terancam dan dapat menyebabkan kematian.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Analisis Perubahan Komponen Abiotik',
    difficulty: 'Sukar',
    text: 'Di sebuah kebun, petani memasang paranet (jaring peneduh hitam) yang terlalu rapat sehingga intensitas cahaya matahari yang masuk ke tanaman tomat berkurang drastis, sementara suhu di bawahnya menjadi terlalu lembap. Dampak perubahan komponen abiotik tersebut terhadap komponen biotik tanaman tomat adalah...',
    options: [
      { id: 'A', text: 'Pertumbuhan tanaman tomat terhambat, batang lemah, dan rentan terserang jamur' },
      { id: 'B', text: 'Buah tomat berbuah dua kali lebih lebat dan manis karena tidak terkena cahaya' },
      { id: 'C', text: 'Tanaman tomat tidak lagi memerlukan air tanah dan udara untuk hidup' },
      { id: 'D', text: 'Tanaman tomat berubah menjadi komponen abiotik yang tidak butuh nutrisi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Cahaya matahari dan kelembapan adalah komponen abiotik. Jika cahaya matahari sangat kurang, proses fotosintesis tanaman tomat terganggu sehingga pertumbuhan terhambat, sementara kelembapan berlebih memicu pertumbuhan jamur (komponen biotik parasit).',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Identifikasi Komponen Abiotik (Gambar Pantai)',
    difficulty: 'Mudah',
    imageUrl: imgPantai,
    imageCaption: 'Ilustrasi Ekosistem Pantai',
    text: 'Perhatikan gambar ekosistem pantai di atas! Manakah daftar komponen ABIOTIK yang dapat kamu temukan pada gambar ekosistem pantai tersebut?',
    options: [
      { id: 'A', text: 'Pohon kelapa, kepiting merah, dan bintang laut' },
      { id: 'B', text: 'Pasir pantai, air laut, batu karang, dan cahaya matahari' },
      { id: 'C', text: 'Ikan kecil di laut, kepiting merah, dan rumput pantai' },
      { id: 'D', text: 'Pohon kelapa, pasir pantai, dan bintang laut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Pasir pantai, air laut, batu karang, angin/udara, dan cahaya matahari merupakan unsur tak hidup (komponen abiotik) pada ekosistem pantai. Adapun pohon kelapa, kepiting merah, bintang laut, dan ikan kecil merupakan komponen biotik.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Peran Komponen Biotik dalam Ekosistem',
    difficulty: 'Sedang',
    text: 'Dalam ekosistem padang rumput terdapat rumput hijau, rusa, singa, tanah, dan udara. Manakah pernyataan yang TEPAT mengenai peran masing-masing komponen tersebut?',
    options: [
      { id: 'A', text: 'Tanah dan udara berperan sebagai produsen karena menyediakan tempat hidup' },
      { id: 'B', text: 'Rumput hijau berperan sebagai komponen biotik produsen, sedangkan rusa dan singa sebagai konsumen' },
      { id: 'C', text: 'Singa berperan sebagai komponen abiotik karena berada di puncak rantai makanan' },
      { id: 'D', text: 'Rusa berperan sebagai pengurai karena memakan rumput hijau' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rumput hijau adalah komponen biotik yang mampu membuat makanan sendiri (produsen). Rusa dan singa adalah komponen biotik yang memakan organisme lain (konsumen). Tanah dan udara adalah komponen abiotik.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Pengaruh Suhu dan Kelembapan (Abiotik)',
    difficulty: 'Sedang',
    text: 'Tumbuhan lumut sering ditemukan tumbuh subur pada permukaan batu atau tembok yang teduh dan basah, tetapi jarang tumbuh di tempat yang sangat panas dan kering. Hal ini membuktikan bahwa pertumbuhan lumut (komponen biotik) sangat dipengaruhi oleh komponen abiotik berupa...',
    options: [
      { id: 'A', text: 'Kecepatan angin dan warna batu' },
      { id: 'B', text: 'Kelembapan air dan suhu lingkungan' },
      { id: 'C', text: 'Jumlah semut dan cacing di sekitar tembok' },
      { id: 'D', text: 'Ketinggian awan dan bentuk daun pohon' },
    ],
    correctAnswer: 'B',
    explanation:
      'Lumut membutuhkan lingkungan dengan kelembapan tinggi (cukup air) dan suhu yang tidak terlalu panas agar tidak kering. Kelembapan dan suhu merupakan komponen abiotik.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Ekosistem Taman Sekolah (Gambar Taman)',
    difficulty: 'Sedang',
    imageUrl: imgTaman,
    imageCaption: 'Ilustrasi Ekosistem Taman Sekolah',
    text: 'Amati gambar ekosistem taman sekolah di atas! Pernyataan manakah yang paling tepat menjelaskan interaksi antara komponen biotik dan abiotik pada gambar tersebut?',
    options: [
      { id: 'A', text: 'Batu jalan setapak berkembang biak di atas tanah agar rumput semakin pendek' },
      { id: 'B', text: 'Bunga kembang sepatu dan pohon membutuhkan sinar matahari serta tanah kebun untuk tumbuh subur' },
      { id: 'C', text: 'Burung di dahan dan lebah merupakan komponen abiotik yang menghiasi taman' },
      { id: 'D', text: 'Sinar matahari merupakan makhluk hidup yang menerangi bunga kembang sepatu' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bunga kembang sepatu dan pohon (komponen biotik) menyerap air dan mineral dari tanah kebun serta memanfaatkan energi sinar matahari (keduanya komponen abiotik) untuk tumbuh. Burung dan lebah juga komponen biotik.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Studi Kasus Pencemaran Komponen Abiotik',
    difficulty: 'Sukar',
    text: 'Air limbah deterjen dari pencucian rumah tangga dibuang langsung ke sebuah kolam ikan tanpa disaring. Beberapa hari kemudian, air kolam berbusa, berbau, dan banyak ikan mengambang mati. Kesimpulan yang paling tepat dari peristiwa tersebut adalah...',
    options: [
      { id: 'A', text: 'Kerusakan kualitas komponen abiotik (air) menyebabkan terganggunya kehidupan komponen biotik (ikan)' },
      { id: 'B', text: 'Ikan merupakan komponen abiotik yang tidak tahan terhadap perubahan warna air' },
      { id: 'C', text: 'Air deterjen menambah kadar oksigen terlarut sehingga ikan terlalu banyak bernapas' },
      { id: 'D', text: 'Komponen biotik tidak memiliki hubungan apa pun dengan kondisi komponen abiotik' },
    ],
    correctAnswer: 'A',
    explanation:
      'Limbah deterjen merusak kualitas air (komponen abiotik) dan menurunkan kadar oksigen serta meracuni insang ikan. Akibatnya, komponen biotik seperti ikan mengalami kematian.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Pengelompokan Hasil Pengamatan Sungai',
    difficulty: 'Sukar',
    text: 'Kelompok belajar kelas VI SDN 2 Cupel mengamati ekosistem sungai dan mencatat beberapa temuan: udang, lumut, pasir sungai, ikan wader, kerikil, air mengalir, capung, dan suhu air sejuk. Kelompok data yang seluruhnya merupakan komponen BIOTIK adalah...',
    options: [
      { id: 'A', text: 'Udang, pasir sungai, ikan wader, dan capung' },
      { id: 'B', text: 'Udang, lumut, ikan wader, dan capung' },
      { id: 'C', text: 'Lumut, kerikil, air mengalir, dan suhu air' },
      { id: 'D', text: 'Pasir sungai, kerikil, air mengalir, dan suhu air' },
    ],
    correctAnswer: 'B',
    explanation:
      'Udang, lumut (tumbuhan perintis), ikan wader, dan capung seluruhnya adalah makhluk hidup (komponen biotik). Sedangkan pasir sungai, kerikil, air mengalir, dan suhu air termasuk komponen abiotik.',
  },

  // --- PILIHAN GANDA KOMPLEKS (3 SOAL) ---
  // Ketentuan: Kemungkinan lebih dari 1 pilihan jawaban benar, setiap soal memiliki tepat 3 pilihan jawaban
  {
    id: 19,
    type: 'pgk',
    topic: 'Identifikasi Komponen Kolam (Gambar Kolam)',
    difficulty: 'Sedang',
    imageUrl: imgKolam,
    imageCaption: 'Ilustrasi Ekosistem Kolam Air Tawar',
    text: 'Perhatikan gambar ekosistem kolam di atas! Pilihlah SEMUA pernyataan yang BENAR dalam membedakan komponen biotik dan abiotik pada gambar tersebut! (Pilihan benar bisa lebih dari satu)',
    options: [
      {
        id: 'A',
        text: 'Ikan mas, bunga teratai, tanaman air, dan siput termasuk komponen biotik karena merupakan makhluk hidup',
      },
      {
        id: 'B',
        text: 'Air kolam, batu dasar, pasir, gelembung udara, dan sinar matahari termasuk komponen abiotik',
      },
      {
        id: 'C',
        text: 'Batu besar di dasar kolam termasuk komponen biotik karena menjadi tempat menempelnya siput air',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '- Pernyataan A BENAR: ikan, teratai, tanaman air, dan siput adalah makhluk hidup (biotik).\n- Pernyataan B BENAR: air, batu, pasir, udara, dan cahaya matahari adalah benda/unsur tak hidup (abiotik).\n- Pernyataan C SALAH: batu tetap merupakan benda mati (komponen abiotik), meskipun dihinggapi makhluk hidup seperti siput.',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Pembedaan Komponen Kebun Sekolah',
    difficulty: 'Sedang',
    text: 'Di kebun belakang SDN 2 Cupel ditemukan pohon jambu, cacing tanah, batu kerikil, air siraman, belalang, dan sinar matahari. Manakah dari pernyataan berikut yang bernilai BENAR? (Pilihan benar bisa lebih dari satu)',
    options: [
      {
        id: 'A',
        text: 'Pohon jambu, cacing tanah, dan belalang digolongkan sebagai komponen biotik',
      },
      {
        id: 'B',
        text: 'Batu kerikil dan sinar matahari merupakan komponen abiotik karena tidak bernapas dan tidak berkembang biak',
      },
      {
        id: 'C',
        text: 'Air siraman termasuk komponen biotik karena sangat dibutuhkan tanaman jambu agar tidak layu',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '- Pernyataan A BENAR: pohon jambu (tumbuhan), cacing tanah, dan belalang (hewan) adalah komponen biotik.\n- Pernyataan B BENAR: batu kerikil dan sinar matahari adalah komponen abiotik (tak hidup).\n- Pernyataan C SALAH: air merupakan komponen abiotik (benda tak hidup), walaupun sangat dibutuhkan oleh makhluk hidup.',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Interaksi Timbal Balik Biotik & Abiotik',
    difficulty: 'Sukar',
    text: 'Komponen biotik dan komponen abiotik dalam ekosistem saling berinteraksi dan memengaruhi satu sama lain. Pilihlah SEMUA pernyataan yang BENAR mengenai interaksi tersebut! (Pilihan jawaban benar bisa lebih dari satu)',
    options: [
      {
        id: 'A',
        text: 'Tumbuhan hijau (biotik) menyerap air dan mineral dari tanah serta memanfaatkan cahaya matahari (abiotik) untuk berfotosintesis',
      },
      {
        id: 'B',
        text: 'Cacing tanah (biotik) membantu menggemburkan tanah (abiotik) sehingga sirkulasi udara dan resapan air meningkat',
      },
      {
        id: 'C',
        text: 'Pelapukan batuan (abiotik) oleh akar lumut (biotik) menunjukkan bahwa makhluk hidup juga dapat mengubah kondisi benda tak hidup',
      },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'Ketiga pernyataan bernilai BENAR:\n- A menunjukkan ketergantungan komponen biotik pada komponen abiotik.\n- B dan C menunjukkan bahwa komponen biotik (cacing dan lumut) juga mampu mengubah serta memengaruhi sifat komponen abiotik (tanah dan batuan).',
  },

  // --- PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL) ---
  // Ketentuan: Setiap soal memiliki tepat 3 deskripsi/pernyataan yang harus direspons Benar / Salah
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Analisis Ekosistem Sawah (Gambar Sawah)',
    difficulty: 'Mudah',
    imageUrl: imgSawah,
    imageCaption: 'Ilustrasi Ekosistem Sawah',
    text: 'Amati gambar ekosistem sawah di atas! Tentukan kebenaran dari masing-masing pernyataan mengenai pengelompokan komponen ekosistem pada gambar tersebut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Tanaman padi dan dua ekor burung bangau putih pada gambar termasuk komponen biotik.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Air irigasi, tanah pematang, dan batu tempat katak bertengger termasuk komponen abiotik.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Katak pada gambar termasuk komponen abiotik karena sedang diam di atas batu.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Tanaman padi dan burung bangau adalah makhluk hidup sehingga termasuk komponen biotik (BENAR).\n2. Air irigasi, tanah pematang, dan batu adalah benda tak hidup sehingga termasuk komponen abiotik (BENAR).\n3. Katak adalah hewan (makhluk hidup) yang bernapas dan berkembang biak, sehingga tetap komponen biotik meskipun sedang diam di atas batu (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Pengelompokan Komponen Lingkungan Sekolah',
    difficulty: 'Mudah',
    text: 'Siswa kelas VI melakukan pengamatan di sekitar sekolah dan menemukan rumput hijau, semut, pohon mangga, udara, cahaya matahari, tanah, serta jamur pada batang kayu yang lapuk. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Rumput hijau, semut, dan pohon mangga merupakan contoh komponen biotik di halaman sekolah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Udara, cahaya matahari, dan tanah merupakan contoh komponen abiotik.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jamur yang tumbuh pada batang kayu lapuk merupakan komponen abiotik karena tidak dapat berpindah tempat.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Rumput, semut, dan pohon mangga adalah makhluk hidup atau komponen biotik (BENAR).\n2. Udara, cahaya matahari, dan tanah adalah komponen tak hidup atau abiotik (BENAR).\n3. Jamur adalah makhluk hidup (organisme pengurai) yang tumbuh dan berkembang biak sehingga termasuk komponen biotik, bukan abiotik (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Analisis Ekosistem Kebun Sayur (Gambar Kebun)',
    difficulty: 'Sedang',
    imageUrl: imgKebun,
    imageCaption: 'Ilustrasi Ekosistem Kebun Sayur',
    text: 'Perhatikan gambar ekosistem kebun sayur di atas! Tentukan kebenaran dari masing-masing pernyataan berikut berdasarkan pengamatan pada gambar (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kupu-kupu, tanaman sayuran hijau, dan cacing tanah adalah contoh komponen biotik yang ada di kebun.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Genangan air hujan dan tanah humus berwarna cokelat pada gambar adalah contoh komponen abiotik.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Cacing tanah tidak memerlukan udara maupun kelembapan tanah karena hidup di bawah permukaan tanah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kupu-kupu, tanaman sayur, dan cacing tanah adalah makhluk hidup/biotik (BENAR).\n2. Genangan air hujan dan tanah humus adalah unsur tak hidup/abiotik (BENAR).\n3. Cacing tanah bernapas melalui kulitnya yang lembap sehingga sangat bergantung pada udara dan air/kelembapan di dalam tanah (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Karakteristik Pembeda Biotik dan Abiotik',
    difficulty: 'Sedang',
    text: 'Untuk membedakan komponen biotik dan abiotik dengan tepat, kita perlu memahami sifat-sifatnya. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Komponen biotik memiliki ciri bernapas, tumbuh, menanggapi rangsang, membutuhkan nutrisi, dan berkembang biak.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Komponen abiotik seperti batu dan pasir dapat berkembang biak menghasilkan keturunan seperti makhluk hidup.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Cahaya matahari, suhu udara, dan ketersediaan air merupakan komponen abiotik yang menentukan jenis tumbuhan yang dapat hidup di suatu tempat.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Bernapas, tumbuh, peka terhadap rangsang, butuh nutrisi, dan berkembang biak adalah ciri khas makhluk hidup/biotik (BENAR).\n2. Benda abiotik tidak memiliki kemampuan berkembang biak atau tumbuh secara biologis (SALAH).\n3. Faktor abiotik seperti cahaya, suhu, dan air memengaruhi jenis tumbuhan yang mampu beradaptasi di suatu habitat (BENAR).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Analisis Ekosistem Pantai (Gambar Pantai)',
    difficulty: 'Sedang',
    imageUrl: imgPantai,
    imageCaption: 'Ilustrasi Ekosistem Pantai Tropis',
    text: 'Amati gambar ekosistem pantai di atas dengan teliti! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pohon kelapa, kepiting merah, dan bintang laut pada gambar termasuk komponen biotik ekosistem pantai.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pasir pantai, gelombang air laut, batu karang, dan angin merupakan komponen abiotik ekosistem pantai.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Air laut tergolong komponen biotik karena di dalamnya terdapat ikan-ikan kecil yang berenang.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Pohon kelapa, kepiting merah, dan bintang laut adalah makhluk hidup atau biotik (BENAR).\n2. Pasir, air laut, batu karang, dan angin adalah komponen tak hidup atau abiotik (BENAR).\n3. Air laut tetap merupakan komponen abiotik; yang merupakan komponen biotik adalah ikan-ikan kecil yang hidup di dalamnya (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Hubungan Gas Udara, Suhu, dan Makhluk Hidup',
    difficulty: 'Sedang',
    text: 'Di alam terjadi pertukaran zat dan pengaruh suhu antara komponen biotik dan abiotik. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Oksigen yang dihasilkan tumbuhan (biotik) saat fotosintesis dilepaskan ke udara (abiotik) untuk pernapasan hewan dan manusia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kekurangan air (abiotik) saat musim kemarau panjang tidak akan memengaruhi pertumbuhan tanaman padi (biotik).',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Perubahan suhu lingkungan yang terlalu ekstrem dapat memengaruhi aktivitas dan kelangsungan hidup hewan.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Tumbuhan melepaskan oksigen ke udara yang kemudian dihirup hewan dan manusia untuk bernapas (BENAR).\n2. Tanaman padi membutuhkan banyak air; kekurangan air saat kemarau menyebabkan padi layu hingga gagal panen (SALAH).\n3. Suhu merupakan komponen abiotik yang sangat memengaruhi metabolisme dan perilaku hewan (BENAR).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Interaksi di Taman Sekolah (Gambar Taman)',
    difficulty: 'Sedang',
    imageUrl: imgTaman,
    imageCaption: 'Ilustrasi Ekosistem Taman Sekolah',
    text: 'Perhatikan gambar ekosistem taman sekolah di atas! Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Burung di dahan, lebah, bunga kembang sepatu, dan rumput hijau merupakan komponen biotik yang ada di taman.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Jalan setapak berbatu, tanah kebun, angin, dan sinar matahari merupakan komponen abiotik di taman tersebut.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Lebah membantu penyerbukan bunga kembang sepatu sehingga terjadi interaksi antarkomponen biotik di taman.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Burung, lebah, bunga kembang sepatu, dan rumput adalah seluruhnya makhluk hidup atau biotik (BENAR).\n2. Batu jalan setapak, tanah, angin, dan cahaya matahari adalah komponen tak hidup atau abiotik (BENAR).\n3. Hubungan lebah dan bunga merupakan simbiosis mutualisme antarkomponen biotik (BENAR).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Peran Dekomposer terhadap Unsur Hara Tanah',
    difficulty: 'Sukar',
    text: 'Di lantai hutan atau kebun yang teduh, guguran daun dan ranting perlahan lapuk menjadi humus berkat peran pengurai (dekomposer). Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Bakteri dan jamur pengurai termasuk komponen biotik meskipun sebagian berukuran mikroskopis.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hasil penguraian sisa makhluk hidup oleh dekomposer menambah mineral/unsur hara (abiotik) yang menyuburkan tanah.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Tanpa adanya dekomposer di alam, seluruh sisa daun kering akan langsung berubah menjadi batu dalam sehari.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Bakteri dan jamur pengurai adalah makhluk hidup sehingga termasuk komponen biotik (BENAR).\n2. Proses dekomposisi mengembalikan zat hara/mineral ke dalam tanah sebagai komponen abiotik penyubur tumbuhan (BENAR).\n3. Tanpa dekomposer, sampah organik akan menumpuk dan tidak terurai kembali menjadi unsur hara tanah, bukan berubah menjadi batu dalam sehari (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Studi Kasus Akuarium Kelas VI',
    difficulty: 'Sukar',
    text: 'Siswa kelas VI SDN 2 Cupel membuat ekosistem buatan berupa akuarium di kelas yang berisi ikan guppy, tanaman air hidrila, air bersih, batu kerikil, dan lampu penerang akuarium. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Komponen biotik di dalam akuarium kelas tersebut adalah ikan guppy dan tanaman air hidrila.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Air bersih, batu kerikil, dan cahaya lampu di dalam akuarium berperan sebagai komponen abiotik.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika air akuarium tidak pernah dibersihkan hingga sangat keruh dan beracun, kualitas komponen abiotik menurun sehingga ikan dapat mati.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Ikan guppy (hewan) dan tanaman hidrila (tumbuhan) adalah makhluk hidup/komponen biotik (BENAR).\n2. Air, batu kerikil, dan cahaya lampu adalah komponen tak hidup/abiotik yang menunjang kehidupan akuarium (BENAR).\n3. Kualitas air (abiotik) sangat menentukan kelangsungan hidup ikan (biotik) di dalamnya (BENAR).',
  },
];
