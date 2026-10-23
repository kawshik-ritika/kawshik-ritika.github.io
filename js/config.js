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

  shortNames: { bn: 'কৌশিক ও ঋতিকা', en: 'Kawshik & Ritika' },

  groom: {
    name:   { bn: 'প্রকৌশলী কৌশিক কুমার পাল', en: 'Engr. Kawshik Kumar Paul' },
    father: { bn: 'স্বর্গীয় শম্ভু নাথ পাল',     en: 'Late Shambhu Nath Paul' },
    mother: { bn: 'শম্পা রানী পাল',            en: 'Shampa Rani Paul' }
  },

  bride: {
    name:   { bn: 'ডা. ঋতিকা পাল প্রমি', en: 'Dr. Ritika Paul Prome' },
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
      // Phone number is a placeholder — replace it (add more entries for more people)
      contacts: [
        { name: { bn: 'শাশ্বত (ঋতিকার ভাই)', en: "Shashwata (Ritika's brother)" }, phone: '+880 1700-000000' }
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
      // Phone number is a placeholder — replace it
      contacts: [
        { name: { bn: 'সৌমিক (কৌশিকের ভাই)', en: "Soumik (Kawshik's brother)" }, phone: '+880 1800-000000' }
      ]
    }
  },

  // Which events each card shows (the key is the page's data-card value)
  cards: {
    'wedding': {
      events: ['wedding'],
      title:    { bn: 'শুভ বিবাহ', en: 'Wedding Invitation' },
      occasion: { bn: 'শুভ বিবাহ অনুষ্ঠানে', en: 'our wedding ceremony' }
    },
    'reception': {
      events: ['reception'],
      title:    { bn: 'শুভ বৌভাত', en: 'Reception Invitation' },
      occasion: { bn: 'শুভ বৌভাত অনুষ্ঠানে', en: 'our Bou Bhat reception' }
    },
    'wedding-reception': {
      events: ['wedding', 'reception'],
      title:    { bn: 'শুভ বিবাহ ও বৌভাত', en: 'Wedding & Reception' },
      occasion: { bn: 'শুভ বিবাহ ও বৌভাত অনুষ্ঠানে', en: 'our wedding ceremony and Bou Bhat reception' }
    }
  }
};
