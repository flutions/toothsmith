import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor() {}
  services = [
    {
      head: 'Dental examination and consultation',
      desc: 'Depending on your age and health history, we recommend scheduling a dental cleaning and examination with us every 6 months.',
    },
    {
      head: 'Dental Implants',
      desc: 'A dental implant is a metal post that replaces the root portion of a missing tooth.',
    },
    {
      head: 'Dental X rays',
      desc: 'For a successful dental treatment requires a thorough clinical examination along with a good quality radiograph.',
    },
    {
      head: 'Cosmetic Dentistry and Smile Designing',
      desc: 'According to a study by the American Academy of Cosmetic Dentistry, nearly half of Humans believe that a person’s smile is their most memorable feature.',
    },
    {
      head: 'Scaling and Root Planing',
      desc: 'The accumulation of plaque around the teeth and under the gums can cause a cascade of dental problems like tooth decay, gingivitis, bone loss, halitosis (bad breath), and eventually, tooth loss.',
    },
    {
      head: 'Teeth Whitening',
      desc: 'Teeth whitening is a process of removing stains from the tooth surface and restoring the natural colour of the teeth.',
    },
    {
      head: 'Gum Therapy',
      desc: 'Periodontal disease, commonly known as gum disease, puts your teeth and underlying bone structure at risk.',
    },
    {
      head: 'Root Canal Treatment',
      desc: 'Our root canal therapy process was created to keep you comfortable. Patients always have a positive experience and get to go home pain free',
    },
    {
      head: 'Children Dentistry',
      desc: 'Humans start teething when they are as young as 6 months old and develop their set of primary ‘milk’ teeth.',
    },
    {
      head: 'Surgical Treatment',
      desc: 'We help you preserve your healthy, natural teeth as long as possible.',
    },
    {
      head: 'Crown and Bridge Dentistry',
      desc: 'We offer custom-made dental bridges right here in our dental office. This treatment can often be completed without surgery and finished in as few as 2-3 weeks.',
    },
    {
      head: 'Invisible Braces',
      desc: 'Do you wish you had straighter teeth? Has crowding continued to get worse as you’ve gotten older? Or do you wish you could smile without any gaps? Why wish for it when you can do something about it!',
    },
    {
      head: 'Orthodontic treatment',
      desc: 'Orthodontics is a branch of dentistry that addresses teeth that are not in alignment according to your jaw.',
    },
    {
      head: 'Full Mouth Rehabilitation',
      desc: 'A full mouth rehabilitation treats your mouth as a whole, creating a treatment plan focused on improving the dental, muscular, and skeletal functions of your mouth, as needed.',
    },
  ];
  ngOnInit(): void {}
}
