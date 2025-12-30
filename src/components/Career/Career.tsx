import React from "react";
import { Container } from "./styles";
import bachelor from "../../assets/bachelor.png";
import suitcase from "../../assets/suitcase.png";
import ScrollAnimation from "react-animate-on-scroll";
import { career } from "../../data";
import { Carousel } from "../Carousel/Carousel";
import { TileCard } from "../Card/TileCard";

interface ICareerItem {
  title: string;
  description?: string;
  type: "job" | "school";
  company?: string;
  link?: string;
  whereAndWhen?: string;
  where?: string;
  when?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}

export function Career() {
  // Combine jobs and schools into a single array with type information
  const allCareerItems: ICareerItem[] = [
    ...career.jobs.map(job => ({ ...job, type: "job" as const })),
    ...career.schools.map(school => ({ ...school, type: "school" as const }))
  ];

  return (
    <Container id="career">
      <h2>{career.title}</h2>
      <CareerItems items={allCareerItems} />
    </Container>
  );
}

const CareerItems = ({ items }: { items: ICareerItem[] }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <ScrollAnimation animateIn="flipInX" key={index}>
          <TileCard
            headerIconSrc={item.type === "job" ? suitcase : bachelor}
            headerRight={item.type === "job" && item.link && item.company ? (
              <a href={item.link}>{item.company}</a>
            ) : undefined}
            title={item.title}
            body={item.type === 'job' ? (
              <p>{item.description}</p>
            ) : (
              <>
                <p>{item.where}</p>
                {item.description && (
                  <p>
                    {item.description}
                    {item.links && item.links.map((link, i) => (
                      <a href={link.url} target="_blank" rel="noreferrer" key={i}>{link.title}</a>
                    ))}
                  </p>
                )}
              </>
            )}
            footerList={[item.type === 'job' ? (item.whereAndWhen ?? '') : (item.when ?? '')]}
          />
        </ScrollAnimation>
      ))}
    </Carousel>
  );
};
