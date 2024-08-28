import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Acordion() {
  const defaultContent =
    "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion>
      <AccordionItem
        className="text-white"
        key="1"
        aria-label="Accordion 1"
        title="Partners/Installer"
      >
        <ul>
          <li>
            <a href="">Partner with Skylight</a>
          </li>
          <li>
            <a href="">Installer Partner Portal</a>
          </li>
          <li>
            <a href="">Contractor Application Information</a>
          </li>
          <li>
            <a href="">Sales Rep Partner Portal</a>
          </li>
          <li>
            <a href="">Supply House Partner Portal</a>
          </li>
          <p>Contractor Application Information</p>
        </ul>
      </AccordionItem>
      <AccordionItem
        className="text-white"
        key="2"
        aria-label="Accordion 2"
        title="Homeowners"
      >
        <ul>
          <li>
            <a href="">Borrower Loan Servicing Portal</a>
          </li>
          <li>
            <a href="">Borrower Loan Documents Portal</a>
          </li>
          <li>
            <a href="">Register a Complaint</a>
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem
        className="text-white"
        key="3"
        aria-label="Accordion 3"
        title="Investors"
      >
        <ul>
          <li>
            <a href="">Investor Portal</a>
          </li>
          <li>
            <a href="">Become a Capital Partner</a>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  );
}
