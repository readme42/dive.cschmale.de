import { IconClock, IconMapPin, IconPhoneCall } from '@tabler/icons-react';
import { ContactProps } from '~/shared/types';


// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Get in touch with me',
    subtitle: (
      <>
        Bitte nimm dir einen Moment Zeit, das Formular auszufüllen.{' '}
        <span className="hidden md:inline">{`Es freut mich, dass ich dein Interesse geweckt habe.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Los gehts',
    inputs: [
      {
        type: 'text',
        label: 'Dein Name',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Name',
      },
      {
        type: 'email',
        label: 'Deine Email address',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Was kann ich für dich tun?',
      name: 'message',
      placeholder: 'Deine Nachricht an mich ...',
    },
    btn: {
      title: 'Abschicken',
      type: 'submit',
    },
  },
};

