import React from "react";
import { useForm } from "react-hook-form";
import { jsPDF } from "jspdf";
import Header from "components/Header";
import Button from "components/Button";

import imgData from "static/images/pdf.jpg";

import TextArea1 from "components/TextArea1";
import TextArea2 from "components/TextArea2";
import TextArea3 from "components/TextArea3";
import TextArea4 from "components/TextArea4";

const Home = () => {
  const { register, handleSubmit } = useForm();

  var doc = new jsPDF({
    orientation: "landscape",
  });

  doc.setFontSize(8);

  const onSubmit = (responses) => {
    doc.addImage(imgData, "JPEG", 0, 0, 297, 210);

    doc.text(12, 59, doc.splitTextToSize(responses.question1, 45));

    doc.text(12, 144, doc.splitTextToSize(responses.question2, 45));

    doc.text(72, 61, doc.splitTextToSize(responses.question3, 60));

    doc.text(72, 115, doc.splitTextToSize(responses.question4, 60));

    doc.text(72, 171, doc.splitTextToSize(responses.question5, 60));

    doc.text(153, 61, doc.splitTextToSize(responses.question6, 78));

    doc.text(153, 93, doc.splitTextToSize(responses.question7, 78));

    doc.text(153, 124, doc.splitTextToSize(responses.question8, 78));

    doc.text(153, 156, doc.splitTextToSize(responses.question9, 78));

    doc.text(153, 185, doc.splitTextToSize(responses.question10, 78));

    doc.text(243, 61, doc.splitTextToSize(responses.question11, 46));

    doc.save("canvas.pdf");
  };

  return (
    <div className="flex justify-center min-h-screen bg-primary">
      <div className="container max-w-7xl shadow-2xl">
        <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center py-16">
            <TextArea1
              title="Propósito"
              question="Para que existimos?"
              name="question1"
              useRef={register}
            />
            <TextArea1
              title="Valores"
              question="No que acreditamos?"
              name="question2"
              useRef={register}
            />
          </div>
          <div className="flex justify-center py-14 bg-secondary">
            <TextArea2
              title="Regras de Ouro"
              question="Como definimos e disseminamos o que é inegociável?"
              name="question3"
              useRef={register}
            />
            <TextArea2
              className="mt-32"
              height="39%"
              title="Falhas Responsabilizadas"
              question="Que falhas responsabilizamos e como responsabilizamos?"
              name="question4"
              useRef={register}
            />
            <TextArea2
              className="mt-32"
              height="39%"
              title="Falhas Não Responsabilizadas"
              question="Que falhas não responsabilizamos e como não responsabilizamos?"
              name="question5"
              useRef={register}
            />
          </div>
          <div className="flex py-14">
            <div className="flex flex-col items-center w-7/12">
              <TextArea3
                title="Como nos reunimos"
                question="Qual a frequência, a dinâmica, quem participa efetivamente?"
                name="question6"
                useRef={register}
              />
              <TextArea3
                title="Como tomamos decisões"
                question="Como distribuímos poder, quem decide e como decide?"
                name="question7"
                useRef={register}
              />
              <TextArea3
                title="Como recebemos novas ideas"
                question="Como estimulamos a participação e as novas ideias?"
                name="question8"
                useRef={register}
              />
              <TextArea3
                title="Como fornecemos feedback"
                question="como apoiamos o crescimento a partir do feedback?"
                name="question9"
                useRef={register}
              />
              <TextArea3
                title="Como celebramos"
                question="...as pessoas, a cultura e os resultados?"
                name="question10"
                useRef={register}
              />
            </div>
            <div className="flex w-5/12">
              <TextArea4
                title="Novos ritos"
                question="O que podemos experimentar?"
                name="question11"
                useRef={register}
              />
            </div>
          </div>
          <div className="flex justify-center py-14 bg-secondary">
            <Button
              className="bg-white active:bg-primary-light text-2xl font-bold text-primary rounded-md outline-none border-none py-4 px-5 shadow-2xl"
              type="submit"
            >
              Salvar como PDF
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
