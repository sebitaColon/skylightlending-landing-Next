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
  state: boolean;
  onClose: () => void;
}

export const ModalLogin: React.FC<ModalLoginProps> = ({
  isOpen,
  onClose,
  state,
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
        {(onClose) => (
          <>
            {state === false ? (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Terms of Service
                </ModalHeader>
                <ModalBody>
                  <div className="gap-0 w-full">
                    <div>
                      <h2 className="sm:text-xl md:text-2xl text-center">
                        Terms of Use between user & Skylight Lending, LLC
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        {" "}
                        This agreement (“Agreement”) governs the use of the
                        Skylight Lending LLC website. It should be read
                        carefully before accessing or using this website
                        (“Site”).
                        <br></br>
                        <br></br>
                        By accessing or using the Site, you agree to be bound by
                        this Agreement and the Terms of Use. If you do not
                        consent, please do not utilize the Site or the materials
                        contained therein. Skylight Lending LLC provides the
                        information and services on this Site to you, the user,
                        conditioned on your acceptance without modification of
                        the terms, conditions and notices contained herein. Your
                        use of this site constitutes your agreement to all such
                        terms, conditions and notices.
                        <br></br>
                        <br></br>
                        This site is for general informational purposes. It is
                        not a substitute for actual legal, investment or
                        professional advice from a licensed competent individual
                        in their field of expertise. The information and
                        services offered on this Site are provided with the
                        understanding that Skylight Lending, LLC, is not engaged
                        in rendering legal or other professional services or
                        advice. Your use of the Site is subject to the
                        additional disclaimers and caveats that may appear
                        throughout the Site.
                        <br></br>
                        <br></br>
                        Skylight Lending, LLC and its agents assume no
                        responsibility for any consequence relating directly or
                        indirectly to any action or inaction that you take based
                        on the information, services or other material on this
                        Site. Skylight Lending, LLC strives to keep the
                        information on this Site accurate, complete and
                        up-to-date yet do not guarantee that is the most recent
                        information available, nor do we guarantee that all
                        opinions expressed or implied are accurate or reliable.
                        The law and the application of the borrower’s situation
                        is unique to every situation and your situation needs to
                        be individually analyzed. Skylight Lending, LLC and its
                        suppliers cannot guarantee, and will not be responsible
                        for any damage or loss related to, the accuracy,
                        completeness or timeliness of the information presented
                        or its application in your situation.
                        <br></br>
                        <br></br>
                      </p>
                      <h2 className="sm:text-xl md:text-2xl">
                        Personal and Noncommercial Use Limitation:
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        You may access, download and print materials on this
                        Site for your personal and non-commercial use. Use the
                        information to obtain the right loan and the best terms
                        for your particular situation from your preferred
                        provider.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        No Unlawful or Prohibited Use
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        As a condition of your use of this Site, you warrant to
                        Skylight Lending LLC, that you will not use this Site
                        for any purpose that is unlawful or prohibited by these
                        terms, conditions, and notices. If you violate any of
                        these terms, your permission to use the Site
                        automatically terminates.{" "}
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Prohibited Uses
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        You are not authorized to modify, copy, distribute,
                        transmit, display, perform, reproduce, publish, license,
                        create derivative works from, use on any other web site,
                        transfer or sell any information, software, lists of
                        users, databases or other lists, products or services
                        obtained from this Site. If and when requested by
                        Skylight Lending, LLC, you agree to provide true,
                        accurate and complete user information and to refrain
                        from impersonating or falsely representing your
                        affiliation with any person or entity. Except with the
                        written permission of Skylight Lending, LLC, you agree
                        to refrain from accessing or attempting to access
                        password protected, secure or non-public areas of this
                        Site. Unauthorized individuals attempting to access
                        prohibited areas of this Site will be held accountable
                        and may be subject to prosecution as determined by
                        appropriate police
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Proprietary Rights
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        All materials on this Site, as well as visual
                        appearance, content structure, layout and structure are
                        owned and/or licensed by Skylight Lending, LLC. No
                        unauthorized reproduction, distribution, or transmission
                        of the materials at this Site is permitted without the
                        written permission of Skylight Lending, LLC. All rights
                        reserved.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Links To Third Party Sites
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        During your use of this website or at any time in the
                        process, you may be led to other web sites operated by
                        unaffiliated parties. Inclusion of hyperlinks by
                        Skylight Lending, LLC to web sites does not imply any
                        endorsement of the material on such web sites or any
                        association with their operators, and you access and use
                        such sites, including information, material, products
                        and services therein, solely at your own risk. Skylight
                        Lending, LLC is not responsible for the quality or
                        results or any product or service provided by these
                        companies. As with all websites and all services, you
                        should review their products and services carefully.
                        Never give private information to any party or website
                        or person that you have not completely investigated and
                        established credibility. Skylight Lending LLC is not
                        responsible for the use of the information that you give
                        any third parties.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Liability Disclaimer
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        You use this Site at your own risk. If your use of this
                        Site or the materials therein, and it results in costs
                        accrued, damages to you, your computer, your property,
                        requires maintenance, requires software downloads, the
                        need for servicing or replacing property, equipment or
                        data, Skylight Lending, LLC will not be responsible for
                        those costs.
                        <br></br>
                        <br></br>
                        THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES
                        PUBLISHED ON THIS SITE MAY INCLUDE INACCURACIES OR
                        TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO
                        THE INFORMATION HEREIN. Skylight Lending, LLC, ITS
                        AFFILIATES AND/OR ITS RESPECTIVE SUPPLIERS MAY WITHOUT
                        PRIOR NOTICE MAKE IMPROVEMENTS AND/OR CHANGES IN THIS
                        SITE INCLUDING BUT NOT LIMITED TO THE INFORMATION,
                        SERVICES, PRODUCTS OR OTHER MATERIAL AT ANY TIME. ALL
                        INFORMATION, PRODUCTS, AND SERVICES ARE PROVIDED “AS IS”
                        WITHOUT WARRANTY OF ANY KIND. IN NO EVENT SHALL Skylight
                        Lending LLC, ITS AFFILIATES AND/OR ITS SUPPLIERS BE
                        LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL OR
                        CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY
                        CONNECTED WITH THE USE OF THIS SITE OR WITH THE DELAY OR
                        INABILITY TO USE THIS SITE, OR FOR ANY INFORMATION,
                        PRODUCTS, MATERIAL AND/OR SERVICES OBTAINED THROUGH THIS
                        SITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS SITE,
                        WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY OR
                        OTHERWISE, EVEN IF Skylight Lending, LLC, ITS AFFILIATES
                        OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE
                        POSSIBILITY OF DAMAGES. BECAUSE SOME
                        STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
                        LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL
                        DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Changes To Agreement
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        Skylight Lending, LLC may modify this Agreement at any
                        time, and such modifications shall be effective
                        immediately upon posting of the modified Agreement.
                        Accordingly, you agree to review the Agreement
                        periodically, and your continued access or use of this
                        Site shall be deemed your acceptance of the modified
                        Agreement.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">Miscellaneous</h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        This Agreement and the resolution of any dispute related
                        to this Agreement or this Site shall be governed by and
                        construed in accordance with the laws of California
                        without giving effect to any principles of conflicts of
                        law. Failure by Skylight Lending, LLC, to insist upon
                        strict enforcement of any provision of this Agreement
                        shall not be construed as a waiver of any provision or
                        right. You agree that regardless of any statute or law
                        to the contrary, any claim or cause of action arising
                        out of or related to use of this Site or this Agreement
                        must be filed within one (1) year after such claim or
                        cause of action arose or be forever barred. Any legal
                        action or proceeding between Skylight Lending, LLC, and
                        you related to this Agreement shall be brought
                        exclusively in federal district court.
                        <br></br>
                        <br></br>
                        Skylight Lending, LLC logos, product and service names
                        are trademarks / servicemarks owned by Skylight Lending,
                        LLC, (the “Marks”). You agree not to display or use in
                        any manner, the Marks without the prior written
                        permission of Skylight Lending, LLC.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">No Minor Use</h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        This website is applicable to and should only be used by
                        persons 18 years of age or older. Access and use of this
                        website by persons under the age of 18 is prohibited.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Use within the United States
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        This website is intended to be accessed by persons
                        located within the United States of America. Access and
                        use of this website by persons from locations other than
                        the United States is prohibited.
                      </p>
                      <br></br>
                      <h2 className="sm:text-xl md:text-2xl">
                        Indemnification
                      </h2>
                      <br></br>
                      <p className="text-tiny sm:text-base md:text-xl">
                        You agree to indemnify, defend and hold harmless
                        Skylight Lending LLC, its affiliates and suppliers from
                        any liability, loss, claim and expense (including
                        attorney’s reasonable fees) related to your violation of
                        this Agreement.
                      </p>
                      <br></br>
                    </div>
                  </div>
                </ModalBody>
              </>
            ) : (
              <>
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
              </>
            )}
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default ModalLogin;
