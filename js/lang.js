var arrLang = {
  'pl': {
    'about': 'About Us',
    'instructions' : 'Instructions',
    'news' : "News",
    'platforms' : 'Platforms',
    'faq' : 'FAQ',
    'contact': 'Contact Us',
    'languages': 'Languages',
    'en':'English',
    'ru': 'Russian',
    'homeMobile': 'Home',
    'aboutMobile': 'About Us',
    'instructionsMobile' : 'Instructions',
    'newsMobile' : "News",
    'platformsMobile' : 'Platforms',
    'faqMobile' : 'FAQ',
    'contactMobile': 'Contact Us',
    'languagesMobile': 'Languages',
    },





  'ru': {
    'about': 'О нас',
    'instructions' : 'Инструкции',
    'news' : "Новости",
    'platforms' : 'Платформы',
    'faq' : 'FAQ',
    'contact': 'Контакты',
    'languages': 'Языки',
    'en':'Английский',
    'ru': 'Русский',
    'homeMobile': 'Главная',
    'aboutMobile': 'О нас',
    'instructionsMobile' : 'Инструкции',
    'newsMobile' : "Новости",
    'platformsMobile' : 'Платформы',
    'faqMobile' : 'FAQ',
    'contactMobile': 'Контакты',
    'languagesMobile': 'Языки',
  },

    'du': {
        'about': 'duAbout Us',
        'instructions' : 'duInstructions',
        'news' : "duNews",
        'platforms' : 'duPlatforms',
        'faq' : 'duFAQ',
        'contact': 'duContact Us',
        'homeMobile': 'Home',
        'aboutMobile': 'About Us',
        'instructionsMobile' : 'Instructions',
        'newsMobile' : "News",
        'platformsMobile' : 'Platforms',
        'faqMobile' : 'FAQ',
        'contactMobile': 'Contact Us',
        'languagesMobile': 'Languages',
    },
};

// Process translation

jQuery(document).ready(function($){
    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');
            localStorage.setItem('selectedLanguage', lang);


            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')] ) ;
            });
        });
    });

    let selectedLang = localStorage.getItem('selectedLanguage');

    if (selectedLang) {

        $('.lang').each(function(index, item) {
            $(this).text(arrLang[selectedLang][$(this).attr('key')] );
        });
    }
});

