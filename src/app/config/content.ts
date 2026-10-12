export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  { id: 'individual', icon: 'user', title: 'Individual Counselling',
    description: 'One-to-one sessions in a private, unhurried space to talk through what is on your mind and understand it better.' },
  { id: 'relationship', icon: 'heart', title: 'Relationship Counselling',
    description: 'Support for couples, families and close relationships to improve communication and understanding.' },
  { id: 'stress', icon: 'wind', title: 'Stress & Anxiety Support',
    description: 'Practical tools and a steady listener to help you manage pressure, worry and overwhelm day to day.' },
  { id: 'career', icon: 'compass', title: 'Career Counselling',
    description: 'Clarify your direction, work through transitions and build confidence in your next professional step.' },
  { id: 'growth', icon: 'sprout', title: 'Personal Development',
    description: 'Build self-awareness, healthier habits and goals that reflect what genuinely matters to you.' },
  { id: 'online', icon: 'video', title: 'Online Counselling',
    description: 'Secure video or call sessions from wherever you are, with the same care as an in-person visit.' },
];

export const COUNSELLING_TYPES = [...SERVICES.map(s => s.title), 'Not sure yet'];

export const WHY_US = [
  {
    icon: 'lock',
    title: 'Confidential',
    text: 'What you share stays private. Your comfort and trust come first.',
    image: '/assets/conf.jpg'
  },
  {
    icon: 'heart',
    title: 'Judgement-free',
    text: 'A respectful space where you can speak openly at your own pace.',
    image: '/assets/nonJudg.jpg'
  },
  {
    icon: 'user',
    title: 'Personal approach',
    text: 'Sessions are shaped around you, not a one-size-fits-all script.',
    image: '/assets/psapp.jpg'
  },
  {
    icon: 'video',
    title: 'Flexible sessions',
    text: 'Choose online or in person, at times that fit your schedule.',
    image: '/assets/therOnline.png'
  }
];

export const BENEFITS = [
  'Feel heard in a calm, supportive setting',
  'Understand patterns in your thoughts and habits',
  'Learn practical ways to handle stress',
  'Communicate more clearly in relationships',
  'Make decisions with greater confidence',
  'Build routines that support your wellbeing',
];

export const STEPS = [
  { title: 'Send a request', text: 'Choose a preferred date, time and session type. It takes about two minutes.' },
  { title: 'We confirm with you', text: 'We contact you to confirm the time and answer any questions.' },
  { title: 'Begin your session', text: 'Meet online or in person in a relaxed, private setting.' },
];

export const WHO_BENEFITS = [
  'People feeling stressed, stretched or stuck',
  'Anyone facing a major life change or decision',
  'Couples and families wanting to communicate better',
  'Students and professionals planning their next step',
  'Those who simply want a space to reflect and grow',
];

/** SAMPLE ONLY - replace with real client feedback (with permission) before launch. */
export const TESTIMONIALS = [
  { quote: 'Sample testimonial: replace this text with genuine feedback from a client who has agreed to share it.', name: 'Client initials', note: 'Sample' },
  { quote: 'Sample testimonial: keep the wording honest and avoid promising specific outcomes.', name: 'Client initials', note: 'Sample' },
  { quote: 'Sample testimonial: remove the "Sample" label once real quotes are added.', name: 'Client initials', note: 'Sample' },
];
