import { Accordion, AccordionItem } from "@nextui-org/accordion";

function AccordionComponent() {
  return (
    <Accordion>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="Borrowers"
        className="text-tiny sm:text-lg"
      >
        From Solar installations to Home Improvement Projects, we help to make
        the project financing affordable and easy to manage.
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="Installers"
        className="text-tiny sm:text-lg"
      >
        Our team understands and listens to installers and their needs. Unlike
        some other financing companies, we aim to understand and be flexible
        where we can.
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="Supply Houses"
        className="text-tiny sm:text-lg"
      >
        We view supply houses as a critical aspect of the solar and home
        improvement supply chain. Our integrations with supply houses provide
        for better insight into our financed projects and give our customers a
        more seamless experience.
      </AccordionItem>
    </Accordion>
  );
}

export default AccordionComponent;
