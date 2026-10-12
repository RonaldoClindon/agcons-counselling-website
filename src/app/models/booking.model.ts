export type SessionMode = 'Online' | 'In Person';

export interface BookingRequest {
  fullName: string;
  email: string;
  phone: string;
  whatsapp: string;
  preferredDate: string;
  preferredTime: string;
  counsellingType: string;
  sessionMode: SessionMode | '';
  message: string;
}

export interface ContactRequest {
  fullName: string;
  email: string;
  message: string;
}
