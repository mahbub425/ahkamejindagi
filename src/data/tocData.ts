import { TOCItem } from '@/components/TableOfContents';

// আহকামে যিন্দেগী - বিস্তারিত সুচিপত্র
// নির্দেশনা: বইয়ের আসল সুচিপত্র দেখে প্রতিটি টপিকের সঠিক পেজ নম্বর দিন
export const tocData: TOCItem[] = [
  {
    title: "ভূমিকা ও মুখবন্ধ",
    page: 1,
  },
  {
    title: "প্রথম অধ্যায়: ঈমান ও আকীদা",
    page: 5,
    children: [
      {
        title: "ঈমান",
        page: 6,
        children: [
          { title: "ঈমানের সংজ্ঞা", page: 6 },
          { title: "ঈমানের রুকনসমূহ", page: 7 },
          { title: "ঈমানের শাখাসমূহ", page: 8 },
        ],
      },
      {
        title: "আকীদা",
        page: 10,
        children: [
          { title: "সহীহ আকীদার গুরুত্ব", page: 10 },
          { title: "আকীদায় বিচ্যুতি", page: 11 },
          { title: "আকীদা সংশোধন", page: 12 },
        ],
      },
      {
        title: "তাওহীদ",
        page: 14,
        children: [
          { title: "তাওহীদে রুবূবিয়্যাহ", page: 14 },
          { title: "তাওহীদে উলূহিয়্যাহ", page: 15 },
          { title: "তাওহীদে আসমা ওয়াস সিফাত", page: 16 },
        ],
      },
      {
        title: "শিরক",
        page: 18,
        children: [
          { title: "শিরকে আকবর", page: 18 },
          { title: "শিরকে আসগর", page: 19 },
          { title: "শিরক থেকে বাঁচার উপায়", page: 20 },
        ],
      },
      {
        title: "কুফর",
        page: 22,
        children: [
          { title: "কুফরের প্রকারভেদ", page: 22 },
          { title: "কুফরের পরিণতি", page: 23 },
        ],
      },
      {
        title: "নিফাক (মুনাফিকী)",
        page: 25,
        children: [
          { title: "নিফাকের আলামত", page: 25 },
          { title: "নিফাক থেকে মুক্তির উপায়", page: 26 },
        ],
      },
    ],
  },
  {
    title: "দ্বিতীয় অধ্যায়: ইবাদত ও নামাজ",
    page: 30,
    children: [
      {
        title: "ইবাদতের মূলনীতি",
        page: 31,
        children: [
          { title: "ইবাদতের সংজ্ঞা", page: 31 },
          { title: "ইবাদতের শর্তাবলী", page: 32 },
          { title: "ইবাদতে ইখলাস", page: 33 },
        ],
      },
      {
        title: "পবিত্রতা (তাহারাত)",
        page: 35,
        children: [
          { title: "অজুর বিধান", page: 35 },
          { title: "গোসলের মাসায়েল", page: 37 },
          { title: "তায়াম্মুম", page: 39 },
          { title: "নাপাকী দূরীকরণ", page: 40 },
        ],
      },
      {
        title: "নামাজ",
        page: 42,
        children: [
          { title: "নামাজের ফরজসমূহ", page: 42 },
          { title: "নামাজের ওয়াজিবসমূহ", page: 44 },
          { title: "নামাজের সুন্নাতসমূহ", page: 45 },
          { title: "পাঁচ ওয়াক্ত নামাজ", page: 47 },
          { title: "জামাতে নামাজ", page: 49 },
          { title: "জুমআর নামাজ", page: 51 },
          { title: "ঈদের নামাজ", page: 53 },
          { title: "তারাবীহর নামাজ", page: 55 },
          { title: "তাহাজ্জুদ", page: 57 },
          { title: "নফল নামাজসমূহ", page: 59 },
        ],
      },
    ],
  },
  {
    title: "তৃতীয় অধ্যায়: রোজা ও যাকাত",
    page: 65,
    children: [
      {
        title: "রোজা",
        page: 66,
        children: [
          { title: "রোজার ফরজ", page: 66 },
          { title: "রোজার মাকরূহ", page: 67 },
          { title: "রোজা ভাঙ্গার কারণসমূহ", page: 68 },
          { title: "কাযা ও কাফফারা", page: 70 },
          { title: "নফল রোজা", page: 72 },
          { title: "ইতিকাফ", page: 74 },
        ],
      },
      {
        title: "যাকাত",
        page: 76,
        children: [
          { title: "যাকাতের নিসাব", page: 76 },
          { title: "যাকাতযোগ্য সম্পদ", page: 78 },
          { title: "যাকাতের হিসাব", page: 80 },
          { title: "যাকাত বিতরণের খাত", page: 82 },
          { title: "সাদকাতুল ফিতর", page: 84 },
        ],
      },
    ],
  },
  {
    title: "চতুর্থ অধ্যায়: হজ্জ ও উমরা",
    page: 90,
    children: [
      {
        title: "হজ্জের বিধান",
        page: 91,
        children: [
          { title: "হজ্জের ফরজ", page: 91 },
          { title: "হজ্জের ওয়াজিব", page: 93 },
          { title: "হজ্জের সুন্নাত", page: 95 },
        ],
      },
      {
        title: "ইহরাম",
        page: 97,
        children: [
          { title: "ইহরামের নিয়ম", page: 97 },
          { title: "ইহরামের নিষেধাজ্ঞা", page: 98 },
        ],
      },
      {
        title: "হজ্জের আরকান",
        page: 100,
        children: [
          { title: "তাওয়াফ", page: 100 },
          { title: "সাঈ", page: 102 },
          { title: "আরাফাতে অবস্থান", page: 104 },
          { title: "মুযদালিফা", page: 106 },
          { title: "কুরবানী ও মাথা মুণ্ডন", page: 108 },
        ],
      },
      {
        title: "উমরা",
        page: 110,
        children: [
          { title: "উমরার পদ্ধতি", page: 110 },
          { title: "উমরার ফজিলত", page: 112 },
        ],
      },
    ],
  },
  {
    title: "পঞ্চম অধ্যায়: মুআমালাত (লেনদেন)",
    page: 115,
    children: [
      {
        title: "ক্রয়-বিক্রয়",
        page: 116,
        children: [
          { title: "বেচা-কেনার শর্তাবলী", page: 116 },
          { title: "হালাল ব্যবসা", page: 118 },
          { title: "হারাম ব্যবসা", page: 120 },
        ],
      },
      {
        title: "সুদ (রিবা)",
        page: 122,
        children: [
          { title: "সুদের প্রকারভেদ", page: 122 },
          { title: "সুদের ভয়াবহতা", page: 124 },
          { title: "সুদমুক্ত লেনদেন", page: 126 },
        ],
      },
      {
        title: "হালাল রুজি",
        page: 128,
        children: [
          { title: "রুজির উপায়", page: 128 },
          { title: "হারাম উপার্জন", page: 130 },
          { title: "সম্পদের যাকাত", page: 132 },
        ],
      },
    ],
  },
  {
    title: "ষষ্ঠ অধ্যায়: পারিবারিক জীবন",
    page: 135,
    children: [
      {
        title: "বিবাহ",
        page: 136,
        children: [
          { title: "বিবাহের গুরুত্ব", page: 136 },
          { title: "পাত্র-পাত্রী নির্বাচন", page: 138 },
          { title: "মোহরানা", page: 140 },
          { title: "বিবাহের শর্তাবলী", page: 142 },
        ],
      },
      {
        title: "স্বামী-স্ত্রীর অধিকার",
        page: 144,
        children: [
          { title: "স্বামীর অধিকার", page: 144 },
          { title: "স্ত্রীর অধিকার", page: 146 },
          { title: "দাম্পত্য জীবনের শিষ্টাচার", page: 148 },
        ],
      },
      {
        title: "সন্তান লালন-পালন",
        page: 150,
        children: [
          { title: "সন্তানের হক", page: 150 },
          { title: "তারবিয়াত (প্রশিক্ষণ)", page: 152 },
          { title: "দ্বীনী শিক্ষা", page: 154 },
        ],
      },
      {
        title: "তালাক",
        page: 156,
        children: [
          { title: "তালাকের প্রকারভেদ", page: 156 },
          { title: "তালাকের পরবর্তী করণীয়", page: 158 },
          { title: "খুলা", page: 160 },
          { title: "ইদ্দত", page: 162 },
        ],
      },
    ],
  },
  {
    title: "সপ্তম অধ্যায়: সামাজিক জীবন",
    page: 165,
    children: [
      {
        title: "পিতা-মাতার অধিকার",
        page: 166,
        children: [
          { title: "পিতা-মাতার খেদমত", page: 166 },
          { title: "তাদের অবাধ্য হওয়ার পরিণাম", page: 168 },
        ],
      },
      {
        title: "আত্মীয়তার সম্পর্ক",
        page: 170,
        children: [
          { title: "আত্মীয়তা রক্ষা", page: 170 },
          { title: "আত্মীয়তা ছিন্ন করার শাস্তি", page: 172 },
        ],
      },
      {
        title: "প্রতিবেশীর অধিকার",
        page: 174,
        children: [
          { title: "প্রতিবেশীর প্রতি সদাচরণ", page: 174 },
          { title: "প্রতিবেশীকে কষ্ট দেওয়ার পরিণাম", page: 176 },
        ],
      },
      {
        title: "মেহমানদারি",
        page: 178,
        children: [
          { title: "মেহমানের অধিকার", page: 178 },
          { title: "মেহমানের দায়িত্ব", page: 180 },
        ],
      },
      {
        title: "সামাজিক শিষ্টাচার",
        page: 182,
        children: [
          { title: "সালাম ও মুসাফাহা", page: 182 },
          { title: "খাওয়া-দাওয়ার আদব", page: 184 },
          { title: "কথাবার্তার আদব", page: 186 },
        ],
      },
    ],
  },
  {
    title: "অষ্টম অধ্যায়: আধ্যাত্মিক জীবন",
    page: 190,
    children: [
      {
        title: "তাযকিয়া (আত্মশুদ্ধি)",
        page: 191,
        children: [
          { title: "তাযকিয়ার গুরুত্ব", page: 191 },
          { title: "আত্মশুদ্ধির পদ্ধতি", page: 193 },
        ],
      },
      {
        title: "যিকির",
        page: 195,
        children: [
          { title: "যিকিরের ফজিলত", page: 195 },
          { title: "বিভিন্ন যিকির", page: 197 },
          { title: "সকাল-সন্ধ্যার যিকির", page: 199 },
        ],
      },
      {
        title: "দুআ",
        page: 201,
        children: [
          { title: "দুআর আদব", page: 201 },
          { title: "কবুলের শর্তাবলী", page: 203 },
          { title: "মাসনূন দুআসমূহ", page: 205 },
        ],
      },
      {
        title: "তাওবা",
        page: 208,
        children: [
          { title: "তাওবার শর্ত", page: 208 },
          { title: "তাওবা কবুলের আশা", page: 210 },
        ],
      },
    ],
  },
  {
    title: "নবম অধ্যায়: নৈতিকতা ও চরিত্র",
    page: 215,
    children: [
      {
        title: "সৎ গুণাবলী",
        page: 216,
        children: [
          { title: "সত্যবাদিতা", page: 216 },
          { title: "আমানতদারি", page: 218 },
          { title: "বিনয়", page: 220 },
          { title: "ধৈর্য", page: 222 },
          { title: "কৃতজ্ঞতা", page: 224 },
        ],
      },
      {
        title: "অসৎ গুণাবলী থেকে বাঁচা",
        page: 226,
        children: [
          { title: "মিথ্যা", page: 226 },
          { title: "গীবত (পরনিন্দা)", page: 228 },
          { title: "চোগলখোরী", page: 230 },
          { title: "অহংকার", page: 232 },
          { title: "হিংসা", page: 234 },
          { title: "রাগ", page: 236 },
        ],
      },
    ],
  },
  {
    title: "দশম অধ্যায়: জীবন ও মৃত্যু",
    page: 240,
    children: [
      {
        title: "মৃত্যুর প্রস্তুতি",
        page: 241,
        children: [
          { title: "মৃত্যু স্মরণ", page: 241 },
          { title: "মৃত্যুর আগে করণীয়", page: 243 },
        ],
      },
      {
        title: "জানাজা",
        page: 245,
        children: [
          { title: "মৃতের গোসল", page: 245 },
          { title: "কাফন", page: 247 },
          { title: "জানাজার নামাজ", page: 249 },
          { title: "দাফন", page: 251 },
        ],
      },
      {
        title: "কবর ও আখেরাত",
        page: 253,
        children: [
          { title: "কবরের আজাব", page: 253 },
          { title: "কবর যিয়ারত", page: 255 },
          { title: "কিয়ামত", page: 257 },
          { title: "হাশর ও মিযান", page: 259 },
          { title: "জান্নাত ও জাহান্নাম", page: 261 },
        ],
      },
    ],
  },
  {
    title: "উপসংহার",
    page: 265,
  },
];
