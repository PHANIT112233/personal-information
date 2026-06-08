import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        gallery: 'Gallery',
        contact: 'Contact'
      },
      hero: {
        title: 'Khmer Heritage',
        subtitle: 'Discover the Ancient Wisdom of Angkor',
        description: 'Journey through Cambodia\'s timeless cultural treasures, from the majestic temples of Angkor Wat to the graceful art of Apsara dancing.',
        cta: 'Explore Now',
        scroll: 'Scroll to Discover'
      },
      about: {
        title: 'About Khmer Culture',
        subtitle: 'The Legacy of Cambodia',
        description: 'Khmer culture represents one of the world\'s greatest civilizations, with a history spanning over 2,000 years. From the architectural marvels of Angkor to the intricate arts and traditions, Khmer heritage continues to inspire and captivate the world.'
      },
      services: {
        title: 'Services',
        explore: 'Explore',
        temples: {
          name: 'Temple Tours',
          description: 'Experience the grandeur of Angkor Wat and ancient Khmer temples'
        },
        dance: {
          name: 'Apsara Dance',
          description: 'Witness the grace and elegance of traditional Khmer dance'
        },
        crafts: {
          name: 'Traditional Crafts',
          description: 'Discover authentic Cambodian artisan techniques'
        }
      },
      gallery: {
        title: 'Cambodian Heritage Gallery',
        subtitle: 'Visual Journey Through Time',
        categories: {
          temples: 'Temples',
          dance: 'Dance',
          culture: 'Culture',
          nature: 'Nature'
        }
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Connect with Khmer Heritage',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        message: 'Message',
        send: 'Send Message',
        follow: 'Follow Us'
      },
      footer: {
        copyright: '© 2026 Khmer Heritage. Celebrating Cambodian Culture.'
      }
    }
  },
  km: {
    translation: {
      nav: {
        home: 'ទំព័រដើម',
        about: 'អំពីយើងខ្ញុំ',
        services: 'សេវាកម្ម',
        gallery: 'រូបថតសិល្បៈ',
        contact: 'ទាក់ទងមកយើងខ្ញុំ'
      },
      hero: {
        title: 'ឈានុស្សាសន៍ខ្មែរ',
        subtitle: 'រកឃើញប្រាជ្ញាបុរាណនៃអង្គរ',
        description: 'ធ្វើដំណើរកាត់កាត់មរតកវប្បធម៌កម្ពុជាដ៏ពិសេស ចាប់ពីវិហារដ៏អស្ចារ្យរបស់អង្គរវត្ត ដល់សិល្បៈរាំងាប់របស់អប្សរា',
        cta: 'ស្វាគមន៍ដោះស្រាយ',
        scroll: 'រំកិលដើម្បីស្វាគមន៍'
      },
      about: {
        title: 'អំពីវប្បធម៌ខ្មែរ',
        subtitle: 'ដpatrimineនៃកម្ពុជា',
        description: 'វប្បធម៌ខ្មែរតំណាងឱ្យមួយក្នុងចំណោមអរិយធម៌ដ៏ឆ្នើមបំផុតរបស់ពិភពលោក ដែលមានប្រវត្តិសាស្ត្របង្វល់រយៈពេលលើសពី ២០០០ ឆ្នាំ។'
      },
      services: {
        title: 'សេវាកម្ម',
        explore: 'ស្វាគមន៍រក',
        temples: {
          name: 'ដំណើរលោកមន',
          description: 'ឆ្លងកាត់ភាពមហិមារបស់អង្គរវត្ត និងវិហារខ្មែរបុរាណ'
        },
        dance: {
          name: 'ការរាំងាប់របស់អប្សរា',
          description: 'សង្វាក់ក្រមក និងការងាយស្រួលនៃការរាំងាប់ខ្មែរប្រពៃណ័ត្ន'
        },
        crafts: {
          name: 'សិល្បៈប្រពៃណ័ត្ន',
          description: 'រកឃើញបច្ចេកទេសជាងដើមរបស់កម្ពុជាដ៏ពិតប្រាកដ'
        }
      },
      gallery: {
        title: 'រូបថតសិល្បៈនៃមរតកកម្ពុជា',
        subtitle: 'ដំណើរលោកមនដែលមើលឃើញរយៈពេល',
        categories: {
          temples: 'វិហារ',
          dance: 'ការរាំងាប់',
          culture: 'វប្បធម៌',
          nature: 'ធម្មជាតិ'
        }
      },
      contact: {
        title: 'ទាក់ទងមកយើងខ្ញុំ',
        subtitle: 'ដំនើរសេដ្ឋឯកទាក់ទងឈានុស្សាសន៍ខ្មែរ',
        email: 'អ៊ីមែល',
        phone: 'ទូរស័ព្ទ',
        address: 'អាសយដ្ឋាន',
        message: 'សារលេខ',
        send: 'ផ្ញើសារ',
        follow: 'តាមដានយើងខ្ញុំ'
      },
      footer: {
        copyright: '© ២០២៦ ឈានុស្សាសន៍ខ្មែរ។ ប្រារព្ធឲ្យកែងកម្ពុជា។'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'km',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
