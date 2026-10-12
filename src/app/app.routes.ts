import { Routes } from '@angular/router';
import { SITE } from './config/site.config';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const b = SITE.brandName;

export const routes: Routes = [
  { path: '', component: HomeComponent, title: `Professional Counselling & Mental Wellness | ${b}`,
    data: { description: 'Professional and confidential counselling services providing a safe and supportive space for personal growth, emotional wellbeing and positive change.' } },
  { path: 'about', component: AboutComponent, title: `About Your Counsellor | ${b}`,
    data: { description: 'Meet your counsellor: their approach, areas of expertise and commitment to a confidential, respectful and supportive space.' } },
  { path: 'services', component: ServicesComponent, title: `Counselling Services | ${b}`,
    data: { description: 'Individual, relationship, career and online counselling, plus stress support and personal development, in person or online.' } },
  { path: 'booking', component: BookingComponent, title: `Book a Counselling Session | ${b}`,
    data: { description: 'Request a counselling appointment online. Choose your preferred date, time and session mode and we will contact you to confirm.' } },
  { path: 'contact', component: ContactComponent, title: `Contact Us | ${b}`,
    data: { description: 'Get in touch by phone, WhatsApp or email, find our location and working hours, or send us a message.' } },
  { path: '**', component: NotFoundComponent, title: `Page Not Found | ${b}`, data: { description: 'This page could not be found.', noindex: true } },
];
