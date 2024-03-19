import "./events.css";
// import { useState } from "react";

// const currentEvents = [
//   {
//     id: 1,
//     name: "Feline Night",
//     descrition: "Breno tem que fazer",
//     image: require("../../assets/imgs/events/event-1.jpeg"),
//   },
//   {
//     id: 2,
//     name: "Tequila Natalina",
//     descrition: "Breno tem que fazer 2",
//     image: require("../../assets/imgs/events/event-2.jpeg"),
//   },
//   {
//     id: 3,
//     name: "Festa do Farol",
//     descrition: `Casais e solteiros(as) desfrutarem de noites empolgantes em Fortaleza.

//     Celebre a liberdade, conecte-se e aproveite a diversão intensa. Todos são bem-vindos para serem parte dessas experiências memoráveis na Boate Castello!`,
//     image: require("../../assets/imgs/events/event-3.jpeg"),
//     link: "https://linkbio.co/Castelloeventos",
//   },
// ];

export default function Events() {
  // const [title, setTitle] = useState("");
  // const [text, setText] = useState("");
  // const [link, setLink] = useState("");

  // function addTetx(title, text, link) {
  //   setTitle(title);
  //   setText(text);
  //   setLink(link);
  // }

  return (
    <section className="container-events">
      <div className="title-2">
        <h1 data-aos="fade-right">Eventos</h1>
      </div>

      {/* {title !== "" || currentEvents.length >= 1 ? (
        <div data-aos="fade-up" className="event-info">
          <h2>{currentEvents.length >= 1 ? currentEvents.title : title}</h2>
          <p>{currentEvents.length >= 1 ? currentEvents.descrition : text}</p>
          <a
            href={currentEvents.length >= 1 ? currentEvents.link : link}
            target="_blank"
          >
            Quero ir
          </a>
        </div>
      ) : (
        <div data-aos="fade-up" className="event-info">
          <h2>Clique em alguem evento</h2>
          <p>{text}</p>
        </div>
      )} */}

      {/* <div data-aos="fade-down" className="events">
        {currentEvents.map((e) => (
          <div className="event" data-aos="fade-down">
            <img
              onClick={() => addTetx(e.name, e.descrition, e.link)}
              src={e.image}
              alt="img-event"
            />
          </div>
        ))} */}
      <div className="event">
        <div data-aos="fade-down" className="event-img">
          <img src={require("../../assets/imgs/events/event-4.jpeg")} alt="" />
        </div>
        <div data-aos="fade-up" className="event-text">
          <h2>CASTELO DAS COELHINHAS</h2>
          <p>
            Casais e solteiros(as) desfrutarem de noites empolgantes em
            Fortaleza.
          </p>
          <p>
            Celebre a liberdade, conecte-se e aproveite a diversão intensa.
            Todos são bem-vindos para serem parte dessas experiências memoráveis
            na Boate Castello!
          </p>
          <a
            className="btn"
            href="https://wa.me/85992859449"
            target="_blank"
            rel="noreferrer"
          >
            COMPRE AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
