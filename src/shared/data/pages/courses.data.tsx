// beginner images
import tryImg from '~/assets/images/ssi/try.jpg';
import basicImg from '~/assets/images/ssi/basic.jpg';
import scubaImg from '~/assets/images/ssi/scuba.jpg';
import owdImg from '~/assets/images/ssi/owd.jpg';

// advanced images
import pbImg from '~/assets/images/ssi/pb.jpg';
import naviImg from '~/assets/images/ssi/navi.jpg';
import dryImg from '~/assets/images/ssi/dry.jpg';
import wreckImg from '~/assets/images/ssi/wreck.jpg';
import advWreckImg from '~/assets/images/ssi/wreck.jpg';
import dpvImg from '~/assets/images/ssi/dpv.jpg';
import nxImg from '~/assets/images/ssi/nx.jpg';
import nightImg from '~/assets/images/ssi/night.jpg';
import compImg from '~/assets/images/ssi/comp.jpg';
import advadvImg from '~/assets/images/ssi/advadv.jpg';

// extended range  images
import sodImg from '~/assets/images/ssi/sod.jpg';
import decoImg from '~/assets/images/ssi/deco.jpg';
import xrnxImg from '~/assets/images/ssi/xrnx.jpg';
import xrfImg from '~/assets/images/ssi/xrf.jpg';
import xrImg from '~/assets/images/ssi/xr.jpg';


import {
  ContactProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';

// Features3 data on About page *******************
export const coursesBeginner: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 4,
  header: {
    title: 'Einsteigerausbildung',
    subtitle: 'Dein Weg zum ersten Tauchschein',
  },
  items: [
    { backgroundImage: { src: tryImg, alt: 'try scuba' } },
    { backgroundImage: { src: basicImg, alt: 'try scuba' } },
    { backgroundImage: { src: scubaImg, alt: 'try scuba' } },
    { backgroundImage: { src: owdImg, alt: 'try scuba' } }
  ],
};

export const coursesAdvanced: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 4,
  header: {
    title: 'Kurse for Fortgeschrittene',
    subtitle: 'Es gibt so viele Dinge zu entdecken ... ',
  },
  items: [
    { backgroundImage: { src: advadvImg, alt: 'Perfect Buyonancy' } },
    { backgroundImage: { src: pbImg, alt: 'Perfect Buyonancy' } },
    { backgroundImage: { src: naviImg, alt: 'Perfect Buyonancy' } },
    { backgroundImage: { src: dryImg, alt: 'Trockentauchen' } },
    { backgroundImage: { src: wreckImg, alt: 'Wracktauchen' } },
    { backgroundImage: { src: nightImg, alt: 'Wracktauchen' } },
    { backgroundImage: { src: nxImg, alt: 'Wracktauchen' } },
    { backgroundImage: { src: compImg, alt: 'Wracktauchen' } },
    { backgroundImage: { src: dpvImg, alt: 'Wracktauchen' } },
    { backgroundImage: { src: sodImg, alt: 'Wracktauchen' } },
  ],
};

export const coursesXr: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 4,
  header: {
    title: 'Extended Range',
    subtitle: 'go deep, stay long',
  },
  items: [
    { backgroundImage: { src: decoImg, alt: 'asd' } },
    { backgroundImage: { src: xrfImg, alt: 'asd' } },
    { backgroundImage: { src: xrnxImg, alt: 'asd' } },
    { backgroundImage: { src: xrImg, alt: 'asd' } },
  ],
};
