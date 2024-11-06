import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";
  
  interface ModalLoginProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export const ModalPrivacyPolicy: React.FC<ModalLoginProps> = ({
    isOpen,
    onClose,
  }) => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        className="max-h-screen overflow-auto"
        backdrop="opaque"
        size="5xl"
      >
        <ModalContent className="h-[90vh]">
            <ModalHeader className="flex flex-col gap-1">
                 Privacy Policy
                </ModalHeader>
                  <ModalBody>
                    <div className="gap-0 w-full">
                      <div>
                        <h2 className="sm:text-xl md:text-2xl text-center">
                          Skylight Lending, LLC Privacy Policy
                        </h2>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Policy Statement
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          Skylight Lending, LLC customers consistently rate
                          privacy as one of their most important concerns. We
                          recognize and respect this interest in privacy. It is
                          our policy to keep confidential the information we
                          believe our customers consider personal (Sensitive
                          Personal Information) and to prevent others from
                          inappropriately retrieving Sensitive Personal
                          Information. It is the duty of all Skylight Lending, LLC
                          employees to comply with this Privacy Policy and failure
                          to adhere to the requirements of the Privacy Policy may
                          lead to disciplinary action.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Consumer Choice and Preference Tracking
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          In situations where consumers are provided an
                          opportunity to opt out from or must provide affirmative
                          consent prior to certain information sharing or use
                          practices, consumers will be permitted to exercise such
                          choices and consumer choices will be honored and tracked
                          by Skylight Lending, LLC. Further, while we may use a
                          variety of companies to serve advertisements on the
                          website, you may wish to visit
                          http://www.networkadvertising.org/choices, which
                          provides information regarding this practice by Network
                          Advertising Initiative (“NAI”) members, and your choices
                          regarding having this information used by these
                          companies, including the “opt-out” procedures of NAI
                          members. Opting out of one or more NAI members only
                          means that those NAI members no longer will be allowed
                          under their own rules to deliver targeted content and/or
                          ads to you, which will affect this and other sites, but
                          does not mean you will no longer receive any targeted
                          content and/or ads. Also, if your browsers are
                          configured to reject cookies when you visit this opt-out
                          page, or you subsequently erase your cookies, use a
                          different device or change web browsers, your NAI
                          opt-out may not, or may no longer, be effective.
                          Additional information is available on the NAI’s website
                          accessible by the above link. You may also be able to
                          opt-out of receiving third-party behavioral ads by
                          visiting the DAA website at
                          http://www.aboutads.info/choices. Similar limitations
                          may apply to the DAA opt-out We are not responsible for
                          effectiveness of or compliance with any third-parties’
                          opt-out options.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Privacy Laws and Regulations
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          Several federal and state laws directly affect the
                          privacy of information relating to individuals.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          The Right to Financial Privacy Act (RFPA)
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          The RFPA requires the federal government to follow
                          specified procedures when it requests information about
                          our customers. In general, the federal government may
                          obtain customer records in one of five ways: 1. Specific
                          customer authorization. 2. Administrative subpoena or
                          summons. (This method is usually used if customer
                          authorization has not been obtained.) 3. Search warrant.
                          4. Judicial subpoena. 5. Formal written request
                          (available only to government agencies that do not have
                          the authority to issue an administrative subpoena or
                          summons). (Certain influential government agencies, such
                          as the Internal Revenue Service and the Drug Enforcement
                          Agency, have their own special means of obtaining
                          customer information. Agencies pursuing their regulatory
                          functions, such as a banking agency preparing to do an
                          examination, are not required to comply with the RFPA
                          because the RFPA focuses on requests for information
                          about specific customers.) Government requests for
                          information initially should be handled just like other
                          requests for customer information. You should
                          immediately contact the Compliance Department for
                          instructions. The Compliance Department should consult
                          with the Legal Department prior to the production of
                          customer information. As the RFPA mandates, we will then
                          require the government representative to provide a
                          certificate of compliance with the RFPA before we
                          provide any information about a specific customer.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          The Gramm- Leach-Bliley Act (GLBA)
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          The privacy protection provisions of the GLBA require us
                          to provide a privacy notice in the form of Exhibit A to
                          each of our customers. Our practice is to provide this
                          notice after an application has been taken or prior to
                          Skylight Lending, LLC sharing Sensitive Personal
                          Information with non-affiliated third parties, unless
                          one of the exemptions outlined in GLBA applies. The
                          Skylight Lending, LLC Privacy Notice is also posted on
                          our website. If two or more persons jointly apply, we
                          only need to provide one copy of the notice to one of
                          the applicants. As of the date of this policy, consumer
                          information is not shared by Skylight Lending, LLC in a
                          manner that requires a consumer opt-out offer. If
                          Skylight Lending, LLC’s sharing protocols change and an
                          opt-out is required, Skylight Lending, LLC will draft
                          the appropriate procedures. Our employees must be
                          careful not to disclose customer account numbers to
                          anyone, unless the disclosure is made by employees in
                          charge of reporting information to consumer reporting
                          agencies or by employees specifically authorized to do
                          so in connection with certain marketing programs.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          State Privacy Laws
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          GLBA permits states to enact more stringent requirements
                          for the sharing by financial institutions of nonpublic
                          personal information with unaffiliated third parties.
                          Some states have enacted such requirements. Notice of
                          such state privacy restrictions is included in the
                          Skylight Lending, LLC Privacy Notice, and such state
                          privacy restrictions are further described in
                          state-specific privacy policy addenda.
                        </p>
                        <br></br>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Fair Credit Reporting Act (FCRA)
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          We provide financial information about a consumer to
                          another entity only in circumstances in which such
                          sharing is allowed by FCRA. Circumstances under which
                          credit information may be shared include: • Transactions
                          and experiences with a consumer. Transaction and
                          experience information is not considered a “consumer
                          report,” and, therefore, may be shared with affiliated
                          and nonaffiliated third parties, subject to the
                          limitations of the privacy laws such as the federal
                          Gramm-Leach-Bliley Act and similar state laws.
                          Additional restrictions apply if an affiliate of
                          Skylight Lending LLC uses information it obtains from us
                          for marketing purposes. • Sharing to facilitate a
                          transaction. Sharing information with another party that
                          is involved in the same transaction is not viewed as
                          sharing with a “third party” within the meaning of FCRA,
                          and, therefore, we may share such information without
                          itself becoming a consumer reporting agency. Examples of
                          sharing that is generally permissible under FCRA include
                          providing information to potential portfolio purchasers,
                          current investors, and FHA or private mortgage insurance
                          companies.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">Can- Spam Act</h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          The Controlling the Assault of Non-Solicited Pornography
                          and Marketing Act of 2003 (the CAN-SPAM Act) imposes
                          requirements on the use of unsolicited commercial
                          electronic mail messages (spam). In enacting the
                          CAN-SPAM Act, Congress made the following determinations
                          of public policy: (1) there is a substantial government
                          interest in the regulation of commercial electronic mail
                          on a nationwide basis; (2) senders of commercial
                          electronic mail should not mislead recipients as to the
                          source or content of such mail; and (3) recipients of
                          commercial electronic mail have a right to decline to
                          receive additional commercial electronic mail from the
                          same source. The term “commercial electronic mail
                          message” means any electronic mail message the primary
                          purpose of which is the commercial advertisement or
                          promotion of a commercial product or service (including
                          content on an Internet Web site operated for a
                          commercial purpose). In compliance with the CAN-SPAM
                          Act, if we originate spam we: • Clearly and
                          conspicuously label the message as an advertisement or
                          solicitation • Include clear and conspicuous opt-out
                          instructions with reference to a functioning return
                          e-mail address or other Internet-based mechanism for
                          opting out of future spam • Include our postal address •
                          Do not use false or misleading header (source,
                          destination, and routing) information • Do not use
                          deceptive subject headings • Do not transmit spam after
                          objection (including transferring or releasing an email
                          address after an objection) • Take steps to ensure that
                          any person we hire to promote our services does not
                          violate the CAN-SPAM Act
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Limitations on Access to and Use of Sensitive Personal
                          Information and Data Minimization
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          As part of our compliance with applicable privacy
                          requirements, access to Sensitive Personal Information
                          will be provided only to employees requiring such
                          information for the performance of their employment
                          functions. Sensitive Personal Information must be used
                          only for purposes permitted by applicable law, company
                          policies, the Skylight Lending, LLC Privacy Notice and
                          appropriate customer choices. To the extent feasible,
                          only information required for functions performed by
                          Skylight Lending, LLC should be collected or acquired
                          and information should be retained only as long as such
                          information is needed to perform functions or to comply
                          with legal or contractual requirements.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Prohibited Storage, and Retention, and use of Company
                          Information
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          1. Employees are prohibited from transferring, retaining
                          or storing any corporate or confidential information
                          (including, but not limited to loan files or customer
                          lists), to personal email account(s), mobile devices,
                          Personal Cloud accounts (Drop Box, Microsoft Cloud,
                          Business Cloud or similarly named personal data storage
                          retention areas). 2. Employees are expressly prohibited
                          from conducting any Skylight Lending, LLC business using
                          a personal email account. All Skylight Lending, LLC
                          communications must be sent and received using a
                          Skylight Lending, LLC email account assigned by the IT
                          Department. 3. Any employee who violates the
                          prohibitions set forth in this paragraph may be subject
                          to disciplinary action up to and including termination.
                        </p>
                        <br></br>
                        <h2 className="sm:text-xl md:text-2xl">
                          Consumer Choice and Preference Tracking
                        </h2>
                        <br></br>
                        <p className="text-tiny sm:text-base md:text-xl">
                          In situations where consumers are provided an
                          opportunity to opt out from or must provide affirmative
                          consent prior to certain information sharing or use
                          practices, consumers will be permitted to exercise such
                          choices and consumer choices will be honored and tracked
                          by Skylight Lending, LLC.
                        </p>
                        <br></br>
                      </div>
                    </div>
                  </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  export default ModalPrivacyPolicy;
  