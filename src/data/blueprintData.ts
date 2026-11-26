import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran IPAS
 * Lingkup Materi: Komponen Biotik dan Abiotik
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS (Komponen Biotik dan Abiotik)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian komponen biotik penyusun ekosistem.',
    indikatorSoal:
      'Disajikan pertanyaan mengenai penyusun lingkungan, peserta didik dapat menentukan pengertian komponen biotik dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi berbagai komponen biotik pada gambar ekosistem sawah.',
    indikatorSoal:
      'Disajikan gambar ilustrasi ekosistem sawah, peserta didik dapat memilih kelompok komponen biotik yang tampak pada gambar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengertian komponen abiotik dalam ekosistem.',
    indikatorSoal:
      'Disajikan pernyataan konseptual tentang penyusun ekosistem, peserta didik dapat menentukan definisi komponen abiotik dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan contoh komponen abiotik di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan empat kelompok daftar benda/unsur lingkungan, peserta didik dapat menentukan kelompok yang seluruhnya merupakan komponen abiotik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan komponen biotik dan abiotik pada ekosistem kolam air tawar.',
    indikatorSoal:
      'Disajikan gambar ilustrasi ekosistem kolam air tawar, peserta didik dapat menentukan pasangan pengelompokan komponen biotik dan abiotik yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengklasifikasikan organisme pengurai (jamur dan bakteri) sebagai komponen biotik.',
    indikatorSoal:
      'Disajikan narasi pembusukan daun kering oleh jamur dan bakteri di halaman sekolah, peserta didik dapat menentukan klasifikasi komponen ekosistem beserta alasannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat memilih komponen abiotik dari daftar hasil pengamatan halaman sekolah.',
    indikatorSoal:
      'Disajikan enam daftar temuan komponen lingkungan di halaman sekolah, peserta didik dapat mengidentifikasi nomor yang termasuk komponen abiotik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan komponen abiotik utama yang menunjang proses fotosintesis tumbuhan hijau.',
    indikatorSoal:
      'Disajikan deskripsi peran tumbuhan hijau sebagai produsen, peserta didik dapat mengidentifikasi komponen abiotik yang diperlukan untuk fotosintesis.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengaruh komponen biotik (cacing tanah) terhadap komponen abiotik tanah.',
    indikatorSoal:
      'Disajikan gambar ilustrasi ekosistem kebun sayur beserta cacing tanah, peserta didik dapat menentukan pengaruh aktivitas cacing terhadap kondisi tanah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karakteristik makhluk hidup (biotik) dan benda tak hidup (abiotik).',
    indikatorSoal:
      'Disajikan perbandingan objek kambing dan batu di padang rumput, peserta didik dapat menentukan alasan ilmiah penggolongan komponen biotik dan abiotik.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis ketergantungan hewan air (biotik) terhadap keberadaan air (abiotik).',
    indikatorSoal:
      'Disajikan kondisi kekeringan pada ekosistem sungai, peserta didik dapat memprediksi dampak hilangnya komponen abiotik air terhadap populasi ikan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak perubahan intensitas cahaya dan kelembapan terhadap pertumbuhan tanaman.',
    indikatorSoal:
      'Disajikan kasus pemasangan paranet terlalu rapat pada kebun tomat, peserta didik dapat menganalisis dampak perubahan faktor abiotik terhadap pertumbuhan tanaman.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi komponen abiotik yang terdapat pada ekosistem pantai.',
    indikatorSoal:
      'Disajikan gambar ilustrasi ekosistem pantai tropis, peserta didik dapat menentukan daftar komponen abiotik yang tampak pada gambar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan peran komponen biotik (produsen, konsumen) dengan komponen abiotik.',
    indikatorSoal:
      'Disajikan daftar komponen ekosistem padang rumput, peserta didik dapat menentukan pernyataan yang tepat tentang peran produsen, konsumen, dan komponen abiotik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi pengaruh komponen abiotik suhu dan kelembapan terhadap habitat tumbuhan lumut.',
    indikatorSoal:
      'Disajikan fenomena tempat tumbuh tumbuhan lumut pada batu teduh dan basah, peserta didik dapat menentukan komponen abiotik yang paling memengaruhinya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi hubungan komponen biotik dan abiotik pada taman sekolah.',
    indikatorSoal:
      'Disajikan gambar ilustrasi taman sekolah, peserta didik dapat memilih pernyataan yang benar mengenai interaksi komponen biotik dan abiotik.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak pencemaran komponen abiotik air terhadap kelangsungan hidup komponen biotik.',
    indikatorSoal:
      'Disajikan kasus pembuangan limbah deterjen ke kolam ikan, peserta didik dapat menyimpulkan keterkaitan kerusakan komponen abiotik terhadap kematian ikan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat memilah seluruh komponen biotik dari hasil pengamatan ekosistem sungai.',
    indikatorSoal:
      'Disajikan catatan hasil pengamatan siswa di ekosistem sungai, peserta didik dapat mengelompokkan daftar komponen yang seluruhnya bersifat biotik.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi pengelompokan komponen biotik dan abiotik pada gambar ekosistem kolam.',
    indikatorSoal:
      'Disajikan gambar ekosistem kolam dan 3 pernyataan pembeda komponen, peserta didik dapat memilih semua pernyataan yang benar (PGK).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi penggolongan komponen biotik dan abiotik di kebun sekolah.',
    indikatorSoal:
      'Disajikan daftar komponen kebun sekolah dan 3 pernyataan klasifikasi, peserta didik dapat memilih semua pernyataan yang benar (PGK).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis hubungan timbal balik antara komponen biotik dan abiotik.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang interaksi tumbuhan, cacing tanah, lumut, dan faktor abiotik, peserta didik dapat memilih semua pernyataan yang benar (PGK).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan komponen biotik dan abiotik pada gambar ekosistem sawah.',
    indikatorSoal:
      'Disajikan gambar ekosistem sawah dan 3 deskripsi pernyataan, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan komponen biotik (termasuk jamur) dan komponen abiotik di lingkungan sekolah.',
    indikatorSoal:
      'Disajikan hasil pengamatan halaman sekolah beserta 3 pernyataan, peserta didik dapat menentukan kebenaran (Benar/Salah) klasifikasi komponen ekosistem.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan komponen biotik dan abiotik serta kebutuhan hidup cacing tanah di kebun sayur.',
    indikatorSoal:
      'Disajikan gambar ekosistem kebun sayur dan 3 pernyataan terkait komponen ekosistem, peserta didik dapat menentukan pilihan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi ciri pembeda antara komponen biotik dan komponen abiotik.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai sifat biologis biotik dan sifat fisik abiotik, peserta didik dapat menentukan kebenaran (Benar/Salah) setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Komponen Abiotik',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan komponen biotik dan abiotik pada gambar ekosistem pantai.',
    indikatorSoal:
      'Disajikan gambar ekosistem pantai tropis dan 3 pernyataan identifikasi komponen, peserta didik dapat menilai Benar atau Salah setiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menilai hubungan antara ketersediaan oksigen, air, dan suhu dengan makhluk hidup.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang peran oksigen, kekeringan, dan suhu lingkungan, peserta didik dapat menentukan kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi komponen biotik, abiotik, dan interaksi penyerbukan di taman sekolah.',
    indikatorSoal:
      'Disajikan gambar taman sekolah dan 3 pernyataan pengamatan, peserta didik dapat menentukan pilihan Benar atau Salah untuk tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Komponen Biotik',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran komponen biotik pengurai (dekomposer) terhadap kesuburan komponen abiotik tanah.',
    indikatorSoal:
      'Disajikan narasi pelapukan daun oleh dekomposer dan 3 pernyataan analisis, peserta didik dapat menentukan nilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Interaksi Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis komponen biotik, abiotik, dan ketergantungan kualitas air pada ekosistem akuarium.',
    indikatorSoal:
      'Disajikan studi kasus akuarium kelas dan 3 pernyataan pembeda komponen serta dampaknya, peserta didik dapat menentukan Benar atau Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu membedakan komponen biotik dan abiotik pada materi ${q.topic}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus mengenai ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('interaksi') || t.includes('dampak') || t.includes('ketergantungan') || t.includes('akuarium') || t.includes('taman') || t.includes('kebun')) {
    return 'Interaksi Ekosistem';
  }
  if (t.includes('abiotik') || t.includes('suhu') || t.includes('pantai')) {
    return 'Komponen Abiotik';
  }
  if (t.includes('biotik') || t.includes('pengurai') || t.includes('dekomposer')) {
    return 'Komponen Biotik';
  }
  return 'Komponen Biotik';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
