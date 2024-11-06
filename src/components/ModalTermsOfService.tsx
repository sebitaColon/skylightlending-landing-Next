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

export const ModalTermsOfService: React.FC<ModalLoginProps> = ({
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
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ModalTermsOfService;
