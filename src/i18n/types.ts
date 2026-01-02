import { hero, whoIam, home, prices, header, footer, contacts, form, career, projects } from "../data";

// Use typeof existing exports to avoid redefining shapes
export type Hero = typeof hero;
export type WhoIam = typeof whoIam;
export type Home = typeof home;
export type Prices = typeof prices;
export type Header = typeof header;
export type Footer = typeof footer;
export type Contacts = typeof contacts;
export type Form = typeof form;
export type Career = typeof career;
export type Projects = typeof projects;

export interface Translations {
  hero: Hero;
  whoIam: WhoIam;
  home: Home;
  prices: Prices;
  header: Header;
  footer: Footer;
  contacts: Contacts;
  form: Form;
  career: Career;
  projects: Projects;
}
