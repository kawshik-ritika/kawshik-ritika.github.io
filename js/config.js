/* ==========================================================================
   INVITATION CONTENT — edit everything here.
   Text is taken from the printed cards. <b>…</b> highlights a name.
   ========================================================================== */

window.INVITE = {
  // Couple avatar / Ghibli photo. Leave empty to show no photo.
  // Put the file in assets/ and write the path from the site root, e.g. 'assets/couple.png'
  couplePhoto: '',

  shortNames: 'কৌশিক ও ঋত্বিকা',

  groom: {
    name:    'ইঞ্জিঃ কৌশিক কুমার পাল',
    father:  'স্বর্গীয় ইঞ্জিঃ শম্ভু নাথ পাল',
    mother:  'শ্যামলী রাণী পাল (শম্পা)',
    address: ['উত্তরা, ঢাকা (বর্তমান)', 'পার-নওগাঁ, নওগাঁ (স্থায়ী)।']
  },

  bride: {
    name:    'ডাঃ ঋত্বিকা পাল (প্রমি)',
    father:  'ডাঃ তনয় কৃষ্ণ পাল',
    mother:  'পূর্ণিমা পাল',
    address: ['সাতক্ষীরা সদর, সাতক্ষীরা।']
  },

  events: {
    wedding: {
      icon: 'topor',      // টোপর — groom's crown
      title:     'শুভ বিবাহ',
      shortDate: '১১ ডিসেম্বর ২০২৬, শুক্রবার',
      date:  '২৪ অগ্রহায়ণ ১৪৩৩ বঙ্গাব্দ (১১ ডিসেম্বর ২০২৬ খ্রিষ্টাব্দ), শুক্রবার',
      time:  'প্রীতিভোজ: রাত ৮:০০ ঘটিকা · বিবাহ লগ্ন: রাত্রি ২:৩০ মিনিট',
      // Start time used for the countdown (Bangladesh time)
      startsAt: '2026-12-11T20:00:00+06:00',
      venue: 'নিজ বাসভবন (চৌরঙ্গী মোড়, পলাশপোল, সাতক্ষীরা)',
      // Google Maps: the embedded map pins mapQuery; the "open"/"share" buttons use mapLink.
      // Exact location from the family's Google Maps link (near Chowrangi More, Satkhira).
      mapQuery: '22.7236832,89.0729227',
      mapLink: 'https://maps.app.goo.gl/6h9NuoYi9uHbriew7',
      phones: ['01714-050570', '01746-367067']
    },
    reception: {
      icon: 'mangalGhot', // মঙ্গল ঘট
      title:     'বৌ-ভাত',
      shortDate: '১৩ ডিসেম্বর ২০২৬, রবিবার',
      date:  '২৬ শে অগ্রহায়ণ, ১৪৩৩ বাংলা (১৩ ই ডিসেম্বর, ২০২৬ ইং), রবিবার',
      time:  'প্রীতিভোজ: সন্ধ্যা ৭:০০ ঘটিকা',
      startsAt: '2026-12-13T19:00:00+06:00',
      venue: 'উত্তরা কমিউনিটি সেন্টার, প্লট-২০, রোড-১৩/ডি, সেক্টর-০৬, উত্তরা, ঢাকা',
      // Google resolves this to "Uttara Community Center, Plot-20 Road-13, Dhaka 1230" (23.86873, 90.40437),
      // the same place as the family's link
      mapQuery: 'Uttara Community Center, Plot-20, Road-13/D, Sector 6, Uttara, Dhaka',
      mapLink: 'https://maps.app.goo.gl/45fBYPM1JeZMJTX2A',
      phones: ['01710-967803', '01516-763648']
    }
  },

  // The inside spread of each printed card: the people panel on the left, the letter on the right.
  // `event` is the event whose phone numbers and icon the letter shows.
  sheets: {
    // From Ritika's parents
    wedding: {
      event: 'wedding',
      name: 'বিবাহের নিমন্ত্রণপত্র',
      people: {
        title: 'পরিচিতি',
        layout: 'columns',
        order: ['bride', 'groom'],
        headings: { bride: 'বধূসাজে :', groom: 'বরবেশে :' },
        // Details this card prints differently from the ones above
        bride: {
          name:    'ডাঃ ঋত্বিকা পাল প্রমি',
          address: ['চৌরঙ্গী মোড়,', 'পলাশপোল, সাতক্ষীরা।']
        }
      },
      letter: {
        verseTop:    '“যদিদং হৃদয়ং মম, তদস্তু হৃদয়ং তব”',
        verseBottom: '“যথাবিহিত সম্মান পুরঃসর নিবেদন মিদং”',
        salutation: 'সবিনয় নিবেদন,',
        paragraphs: [
          'শীতের স্নিগ্ধ রাত্রে শুভ লগ্নে আগামী ২৪ অগ্রহায়ণ ১৪৩৩ বঙ্গাব্দ (১১ ডিসেম্বর ২০২৬ খ্রিষ্টাব্দ) রোজঃ শুক্রবার সানাইয়ের সুরে শঙ্খের ধ্বনিতে পবিত্র বেদমন্ত্র উচ্চারণে এবং অগ্নি দেবতাকে সাক্ষী রাখিয়া আমাদের একমাত্র কন্যা <b>ডাঃ ঋত্বিকা পাল প্রমি</b> এর সহিত উত্তরা, ঢাকা নিবাসী স্বর্গীয় ইঞ্জিঃ শম্ভু নাথ পাল মহাশয়ের জ্যেষ্ঠ পুত্র <b>ইঞ্জিঃ কৌশিক কুমার পাল</b> এর শুভ পরিণয় সু-সম্পন্ন হইবে।',
          'উক্ত শুভ বিবাহ অনুষ্ঠানে আপনি/আপনারা উপস্থিত থাকিয়া শুভ কার্যাদি সু-সম্পন্ন করতঃ নব দম্পতিকে আশীর্বাদ দানে বাধিত করিবেন।'
        ],
        note: 'পত্রদ্বারা নিমন্ত্রণে ত্রুটি মার্জনীয়।'
      },
      regards: 'শুভেচ্ছান্তে–',
      host: ['ডাঃ তনয় কৃষ্ণ পাল', 'ও', 'পূর্ণিমা পাল']
    },

    // From Kawshik's mother
    reception: {
      event: 'reception',
      name: 'বৌ-ভাতের নিমন্ত্রণপত্র',
      people: {
        title: 'যাদের নিয়ে আয়োজন',
        layout: 'stacked',
        order: ['groom', 'bride']
      },
      letter: {
        salutation: 'মহাশয়/মহাশয়া,',
        indent: true,
        paragraphs: [
          'পরম করুণাময় ঈশ্বরের অশেষ কৃপায় এবং প্রজাপতি ঋষির আশীর্বাদে আসছে ২৬ শে অগ্রহায়ণ ১৪৩৩ বাংলা (১৩ ই ডিসেম্বর ২০২৬ ইং) রোজ রবিবার আমাদের জ্যেষ্ঠ পুত্র <b>ইঞ্জিঃ কৌশিক কুমার পাল</b> এর সহিত ডাঃ তনয় কৃষ্ণ পাল মহাশয়ের একমাত্র কন্যা <b>ডাঃ ঋত্বিকা পাল (প্রমি)</b> এর বিবাহোত্তর বৌ-ভাত অনুষ্ঠানের দিন ধার্য করা হয়েছে।',
          'উক্ত মাঙ্গলিক অনুষ্ঠানে আপনার/আপনাদের উপস্থিতি ও আশীর্বাদ কামনা করছি।'
        ],
        note: 'পত্রদ্বারা নিমন্ত্রণ জনিত ত্রুটি মার্জনীয়।'
      },
      regards: 'বিনীত –',
      host: ['শ্যামলী রাণী পাল (শম্পা)']
    }
  },

  // Each page (the key is the page's data-card value): its events and which printed cards it shows
  cards: {
    'wedding': {
      title: 'শুভ বিবাহ',
      events: ['wedding'],
      sheets: ['wedding']
    },
    'reception': {
      title: 'শুভ বৌ-ভাত',
      events: ['reception'],
      sheets: ['reception']
    },
    'wedding-reception': {
      title: 'শুভ বিবাহ ও বৌ-ভাত',
      events: ['wedding', 'reception'],
      // Both families' cards
      sheets: ['wedding', 'reception'],
      // Next to the groom's side card, "own residence" would be unclear
      eventOverrides: {
        wedding: { venue: 'কনের বাসভবন (চৌরঙ্গী মোড়, পলাশপোল, সাতক্ষীরা)' }
      }
    }
  }
};
