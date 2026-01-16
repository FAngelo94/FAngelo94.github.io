import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll";
import softwareEngineer from "../../assets/software-engineer.png";
import { useI18n } from "../../i18n/I18nProvider"
import { openCalendarPopup } from "../../utils/calendar"
import { trackEvent } from "../../utils/analytics"

export function Home() {
  const { t } = useI18n();

  return (
    <Container id="home">
      <div className="home-title">
        <h1>
          {t.home.title[0]} <span className="highlight">{t.home.title[1]}</span> {t.home.title[2]}
        </h1>
      </div>

      <div className="home-body">
        <div className="home-text">
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>{t.home.subtitle}</h3>
          </ScrollAnimation>

          <div className="bullet-list">
            {t.home.paragraphs.map((p, index) => (
              <ScrollAnimation
                key={index}
                animateIn="fadeInLeft"
                delay={(0.4 + index / 5) * 1000}
              >
                <p>{p}</p>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation
            animateIn="fadeInLeft"
            delay={(0.7) * 1000}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            <p className="center highlight">
              {t.home.footerText}
            </p>
          </ScrollAnimation>

        </div>
        <div className="home-image">
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <figure className="image-figure">
              <img src={softwareEngineer} alt="Ilustração" />
              <figcaption className="center">
                <em>{t.home.caption}</em>
              </figcaption>
            </figure>
          </ScrollAnimation>
        </div>
      </div>

      <div className="home-actions">
        <button
          className="button"
          onClick={() => {
            document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' });
            void trackEvent('home_cta_click', { label: 'look_plans' });
          }}
        >
          {t.home.ctas.lookPlans}
        </button>
        <button
          className="button button-secondary"
          onClick={() => {
            openCalendarPopup(t.contacts.calendarLink);
            void trackEvent('home_cta_click', { label: 'speak_goals' });
          }}
        >
          {t.home.ctas.speakGoals}
        </button>
      </div>
    </Container>
  )
}
