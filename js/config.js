/* ==========================================================================
   INVITATION CONTENT — edit everything here.
   Every visible text has a Bangla (bn) and English (en) version.
   ========================================================================== */

window.INVITE = {
  // Default language when the guest has not chosen one (?lang=en also works)
  defaultLang: 'bn',

  // Couple avatar / Ghibli photo. Leave empty to show no photo.
  // Put the file in assets/ and write the path from the site root, e.g. 'assets/couple.png'
  couplePhoto: '',

  shortNames: { bn: 'কৌশিক ও ঋত্বিকা', en: 'Kawshik & Ritika' },

  groom: {
    name:   { bn: 'প্রকৌশলী কৌশিক কুমার পাল', en: 'Engr. Kawshik Kumar Paul' },
    father: { bn: 'স্বর্গীয় শম্ভু নাথ পাল',     en: 'Late Shambhu Nath Paul' },
    mother: { bn: 'শ্যাম্পা রাণী পাল',            en: 'Shampa Rani Paul' }
  },

  bride: {
    name:   { bn: 'ডা. ঋত্বিকা পাল প্রমি', en: 'Dr. Ritika Paul Prome' },
    father: { bn: 'তনয় কৃষ্ণ পাল',       en: 'Tanoy Krisno Paul' },
    mother: { bn: 'পূর্ণিমা পাল',         en: 'Purnima Paul' }
  },

  events: {
    wedding: {
      icon: 'topor',      // টোপর — groom's crown
      title: { bn: 'শুভ বিবাহ', en: 'Wedding Ceremony' },
      date:  { bn: '১১ ডিসেম্বর ২০২৬, শুক্রবার', en: 'Friday, 11 December 2026' },
      time:  { bn: 'রাত ৮:০০ টা থেকে · শুভ লগ্ন রাত ২:০০ টায়', en: 'From 8:00 PM · Lagna at 2:00 AM (night)' },
      // Start time used for the countdown (Bangladesh time)
      startsAt: '2026-12-11T20:00:00+06:00',
      venue:   { bn: 'পলাশপোল, সাতক্ষীরা সদর, সাতক্ষীরা', en: 'Polashpol, Satkhira Sadar, Satkhira' },
      // What Google Maps searches for. Replace with "lat,lng" for an exact pin, e.g. '22.7185,89.0705'
      mapQuery: 'Polashpol, Satkhira Sadar, Satkhira, Bangladesh',
      // Add more entries for more contact people
      contacts: [
        { name: { bn: 'শাশ্বত (ঋত্বিকার ভাই)', en: "Shashwata (Ritika's brother)" }, phone: '01705741467' }
      ]
    },
    reception: {
      icon: 'mangalGhot', // মঙ্গল ঘট
      title: { bn: 'বৌভাত', en: 'Bou Bhat (Reception)' },
      date:  { bn: '১৩ ডিসেম্বর ২০২৬, রবিবার', en: 'Sunday, 13 December 2026' },
      time:  { bn: 'সন্ধ্যা ৭:৩০ থেকে', en: '7:30 PM onwards' },
      startsAt: '2026-12-13T19:30:00+06:00',
      venue:   { bn: 'উত্তরা কমিউনিটি সেন্টার, উত্তরা, ঢাকা', en: 'Uttara Community Center, Uttara, Dhaka' },
      mapQuery: 'Uttara Community Center, Uttara, Dhaka, Bangladesh',

      contacts: [
        { name: { bn: 'সৌমিক (কৌশিকের ভাই)', en: "Soumik (Kawshik's brother)" }, phone: '01952784081' }
      ]
    }
  },

  // Which events each card shows (the key is the page's data-card value)
  cards: {
    'wedding': {
      events: ['wedding'],
      title:    { bn: 'শুভ বিবাহ', en: 'Wedding Invitation' },
      // Invitation from Ritika's parents, so the bride is listed first
      brideFirst: true,
      message: {
        bn: 'শ্রী শ্রী প্রজাপতির আশীর্বাদে আমাদের কন্যা কল্যাণীয়া ঋত্বিকার সঙ্গে কল্যাণীয় কৌশিকের শুভ বিবাহ অনুষ্ঠানে আপনাকে সপরিবারে সাদর আমন্ত্রণ জানাই। আপনার উপস্থিতি ও আশীর্বাদ নবদম্পতির নতুন জীবনের পথচলায় পরম প্রাপ্তি হয়ে থাকবে।',
        en: 'With the blessings of the Almighty, we joyfully invite you and your family to the wedding of our daughter Ritika with Kawshik. Your presence and blessings will mean the world to the couple as they begin their new journey together.'
      },
      host: { bn: 'তনয় কৃষ্ণ পাল ও পূর্ণিমা পাল', en: 'Tanoy Krisno Paul & Purnima Paul' }
    },
    'reception': {
      events: ['reception'],
      title:    { bn: 'শুভ বৌভাত', en: 'Reception Invitation' },
      // Invitation from Kawshik's parents
      message: {
        bn: 'শ্রী শ্রী প্রজাপতির আশীর্বাদে আমাদের পুত্র কল্যাণীয় কৌশিকের সঙ্গে কল্যাণীয়া ঋত্বিকার শুভ বিবাহ উপলক্ষে আয়োজিত বৌভাত অনুষ্ঠানে আপনাকে সপরিবারে সাদর আমন্ত্রণ জানাই। আপনার উপস্থিতি ও আশীর্বাদ নবদম্পতির নতুন জীবনের পথচলায় পরম প্রাপ্তি হয়ে থাকবে।',
        en: 'With the blessings of the Almighty, we joyfully invite you and your family to the Bou Bhat reception celebrating the wedding of our son Kawshik with Ritika. Your presence and blessings will mean the world to the couple as they begin their new journey together.'
      },
      host: { bn: 'শ্যাম্পা রাণী পাল ও পরিবারবর্গ', en: 'Shampa Rani Paul & Family' }
    },
    'wedding-reception': {
      events: ['wedding', 'reception'],
      title:    { bn: 'শুভ বিবাহ ও বৌভাত', en: 'Wedding & Reception' },
      // Invitation from Kawshik's parents
      message: {
        bn: 'শ্রী শ্রী প্রজাপতির আশীর্বাদে আমাদের পুত্র কল্যাণীয় কৌশিকের সঙ্গে কল্যাণীয়া ঋত্বিকার শুভ বিবাহ ও বৌভাত অনুষ্ঠানে আপনাকে সপরিবারে সাদর আমন্ত্রণ জানাই। আপনার উপস্থিতি ও আশীর্বাদ নবদম্পতির নতুন জীবনের পথচলায় পরম প্রাপ্তি হয়ে থাকবে।',
        en: 'With the blessings of the Almighty, we joyfully invite you and your family to the wedding and Bou Bhat reception of our son Kawshik with Ritika. Your presence and blessings will mean the world to the couple as they begin their new journey together.'
      },
      host: { bn: 'শ্যাম্পা রাণী পাল ও পরিবারবর্গ', en: 'Shampa Rani Paul & Family' }
    }
  }
};
