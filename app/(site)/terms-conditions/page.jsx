import Link from 'next/link';
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'

export const metadata = {
    title: "Terms & Conditions – EquiPay",
};

const TermsConditions = () => {
    return (
        <Fragment>
            <BannerSection title="Terms & Conditions" />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        This Agreement was last modified on January 01<sup>st</sup> , 2017.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        Please read these Terms of Service completely using www.Equipay (hereinafter also “Service” “Website”
                        “Site” respectively) which is owned and operated by Equipay (hereinafter also “We”, “Our”, “Company”
                        respectively). This Agreement documents the legally binding Terms and Conditions attached.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these
                        Terms. These Terms apply to all visitors, users and others who access or use the Service.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        By using or accessing the Site in any way, viewing or browsing the Site, or adding your own content to
                        the Site, you are agreeing to be bound by these Terms of Service. If you disagree with any part of
                        the terms then you may not access the Service.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Intellectual Property</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        You acknowledge and agree that we and our licensors retain ownership of all intellectual property rights
                        of any kind related to the Service, including applicable copyrights, trademarks and other proprietary
                        rights. Other product and company names that are mentioned on the Service may be trademarks of their
                        respective owners. We reserve all rights that are not expressly granted to you under this Agreement.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Privacy Policy</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        We respect the privacy of our Service users. Please refer to the Company’s Privacy Policy ( found here:{" "}
                        <Link rel="preload" href='/privacy-policy' target='_blank' className="hover:underline cursor-pointer
                           text-[#ef793c]"
                        >
                            https://www.equipay.com/privacy-policy
                        </Link>{" "})
                        which explains how we collect, use, and disclose information that pertains to your privacy. When you
                        access or use the Service, you signify your agreement to this Privacy Policy.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>About This Service</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        The service allows you to apply for third party provisioned payment related products and services.
                        www.Equipay does not directly provision products or services itself.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>
                        Registration: Rules for User Conduct and Use of the Service
                    </h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        You need to be at least 18 years old in order to use the Service. If you are a user who submits
                        Personalized Information through the service, The Company will not be responsible for any liabilities,
                        losses, or damages arising out of the unauthorized use of your Personalized Information by Third-Parties.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Use Restrictions</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Your permission to use the Site is conditioned upon the following Use Restrictions and Conduct
                        Restrictions. You agree that you will not under any circumstances:
                    </p>

                    <ul className="list-disc list-outside md:text-lg text-base md:text-justify text-left font-light 
                        pl-5 leading-[1.6] text-[#57647c] mt-5"
                    >
                        <li>Use the service for any unlawful purpose or for the promotion of illegal activities;</li>
                        <li>Use another’s Personal Information;</li>
                        <li>Provide false or inaccurate information when applying for Services;</li>
                        <li>Interfere or attempt to interfere with the proper functioning of the Service;</li>
                        <li>
                            Make any automated use of the system, or take any action that we deem to impose or to potentially
                            impose an unreasonable or disproportionately large load on our servers or network infrastructure;
                        </li>
                        <li>Bypass any robot exclusion headers or other measures we take to restrict access to the Service;</li>
                        <li>
                            Upload or attempt to upload to the Service any malicious content intended to damage or disrupt
                            another user’s browser or computer.
                        </li>
                    </ul>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Posting and Conduct Restrictions</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        When you apply for Services you will provide Personal Information. You are solely responsible for
                        the Personal Information that you submit or otherwise make available via the Service. You agree that we
                        are only acting as a conduit for your Personal Information which is being supplied to a third-party(s)
                        upon your submission. We, however, reserve the right to remove any Personal Information or applications
                        from the Service at our discretion.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        The following rules pertain to Personal Information. By transmitting and submitting any Personal
                        Information while using the Service, you agree as follows:
                    </p>

                    <ul className="list-disc list-outside md:text-lg text-base md:text-justify text-left font-light 
                        pl-5 leading-[1.6] text-[#57647c] mt-5"
                    >
                        <li>You are solely responsible for your Personal Information and/or application;</li>
                        <li>You will not submit information that is malicious, false or inaccurate;</li>
                        <li>
                            We do not exercise control over third parties to whom your Personal Information is sent, and
                            therefore we disclaim responsibility for security or data breaches that occur to those third party
                            systems;
                        </li>

                        <li>
                            You will not submit information that is copyrighted or subject to third party proprietary rights,
                            including privacy, publicity, trade secret, etc. unless you are the owner of such rights or have
                            the appropriate permission from their rightful owner to specifically submit such information;
                        </li>

                        <li>
                            You hereby affirm we have the right to determine whether any of your Submitted Information is
                            inappropriate or violates these Terms of Service, and remove any / all of your Submitted Information,
                            and terminate your access to this Service with or without prior notice.
                        </li>
                    </ul>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        You understand and agree that any liability, loss or damage that occurs as a result of the submission,
                        transmission, or use of any Personal Information thatyou make available or submit through your use of
                        the Service is solely your responsibility. The Company is not responsible for any public display or
                        misuse of your Personal Information. The Company does not, and cannot, pre-screen or monitor all
                        submitted Personal Information or applications. However, at our discretion, we, or technology that we
                        employ, may monitor and / or record your interactions with the Service.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Online Content Disclaimer</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Opinions, advice, recommendations, statements, offers or other information or content made available
                        through the Service, but not directly by the Company, are those of their respective authors, and should
                        not necessarily be relied upon. Such authors are solely responsible for such content. We do not guarantee
                        the accuracy, completeness, or usefulness of any information on the Service and neither do we adopt
                        nor endorse, nor are we responsible for, the accuracy or reliability of any opinion, advice or statement
                        made by parties other than the Company. The Company takes no responsibility and assumes no liability for
                        any Personal Information that you or any other user or third party sends over the Service. Under no
                        circumstances will we be responsible for any loss or damage resulting from anyone’s reliance on
                        information or other content posted on the Service, or transmitted to third-parties.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Although we strive to enforce these Terms of Use, you may be exposed to content that is inaccurate or
                        objectionable. The Company shall have the right to remove any material that in its sole opinion,
                        violates, or is alleged to violate, the law or this agreement or which might be offensive or that might
                        violate the rights, harm or threaten the safety of users or others. Unauthorized use may result in
                        criminal and/or civil prosecution under Federal, State and local law. If you become aware of misuse of
                        our Service, please contact us.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Services Provided to Others</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        The Company is an authorized sales office which markets payment related products and services on behalf
                        of the credit card processor(s), payment gateway provider(s), equipment providers, chargeback management
                        solutions providers, and other payment product and services providers. The Company will use commercially
                        reasonable effort to facilitate the application process for these products and services. You acknowledge
                        that these products and services are performed, managed and delivered by third-parties over whom the
                        Company exercises no control, and therefore you agree to look exclusively to those third-parties and your
                        agreements with those third-parties for resolution and remedy for any issues. On behalf of the credit
                        card processor(s) specifically, the Company’s role and responsibility is limited to facilitating the
                        application and application submission process. The Company’s responsibilities and scope do not extend
                        into the underwriting, risk analysis, or provision of debit and credit card processing services, which
                        is solely conducted and determined by the credit card processor(s) through whom you apply for merchant
                        services.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Links to Other Sites And / Or Materials</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        As part of the Service, the Company may provide you with convenient links to third party websites
                        (“Third Party Sites”) as well as content or items belonging to or originating from third parties
                        (the “Third Party Applications, Software, or Content”). These links are provided as a courtesy to Service
                        users. The Company has no control over Third Party Sites and Third Party Applications, Software or
                        Content. Such Third Party Sites or Third Party Applications, Software, or Content are not investigated,
                        monitored or checked for accuracy, appropriateness, or completeness by the Company, and the Company is
                        not responsible for any Third Party Sites accessed through the Site or any Third Party Applications,
                        Software or Content posted on, available through or installed from the Site, including the content,
                        accuracy, offensiveness, opinions, reliability, privacy practices or other policies of or contained in
                        the Third Party Sites or the Third Party Applications, Software or Content. Inclusion of, linking to or
                        permitting the use of installation of any Third Party Site or any Third Party Applications, Software or
                        Content does not imply approval or endorsement thereof by the Company. If you decide to leave the Site
                        and access the Third Party Sites or to use or install any Third Party Applications, Software or Content,
                        you do so at your own risk and you should be aware that our terms and policies no longer govern. You
                        should review the applicable terms and policies, including privacy and data gathering practices of any
                        site which you navigate from the Site to, or relating to any applications you use or install from the Site.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Copyright Complaints and Copyright Agent</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        DMCA Take-Down Notices. If you are a copyright owner or an agent thereof and believe, in good faith,
                        that any materials provided on the Service infringe upon your copyrights, you may submit a notification
                        pursuant to the Digital Millennium Copyright Act (see 17 U.S.C. 512) (“DMCA”) by sending the following
                        information in writing to the Company’s designated copyright agent at:
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Equipay<br />
                        9 Wall Street, New York,
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        New York 10005, United States
                    </p>

                    <ul className="list-disc list-outside md:text-lg text-base md:text-justify text-left font-light 
                        pl-5 leading-[1.6] text-[#57647c] mt-5"
                    >
                        <li>The date of your notification;</li>
                        <li>
                            A physical or electronic signature of a person authorized to act on behalf of the owner of an
                            exclusive right that is allegedly infringed;
                        </li>

                        <li>
                            A description of the copyrighted work claimed to have been infringed, or, if multiple copyrighted
                            works at a single online site are covered by a single notification, a representative list of such
                            works at that site;
                        </li>

                        <li>
                            A description of the material that is claimed to be infringing or to be the subject of infringing
                            activity and information sufficient to enable us to locate such work;
                        </li>

                        <li>
                            Information reasonably sufficient to permit the service provider to contact you, such as an address,
                            telephone number, and / or email address;
                        </li>

                        <li>
                            A statement that you have a good faith belief that the use of the material in the manner complained
                            of is not authorized by the copyright owner, its agent or the law;
                        </li>

                        <li>
                            A statement that the information in the notification is accurate, and under penalty of perjury, that
                            you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
                        </li>
                    </ul>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Warranty Disclaimer</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] 
                        mt-5 lowercase!'
                    >
                        THE SERVICE, IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, WITHOUT LIMITING THE FOREGOING, THE
                        COMPANY EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY REGARDING THE SERVICE
                        INCLUDING WITHOUT LIMITATION ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE,
                        SECURITY, ACCURACY AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, THE COMPANY MAKES NO WARRANTY
                        OR REPRESENTATION THAT ACCESS TO OR OPERATION OF THE SERVICE WILL BE UNINTERRUPTED OR ERROR FREE. YOU
                        ASSUME FULL RESPONSIBILITY AND RISK OF LOSS RESULTING FROM YOUR DOWNLOADING AND / OR USE OF FULES,
                        INFORMATION, CONTENT OR OTHER MATERIAL OBTAINED FROM THE SERVICE. SOME JURISDICTIONS LIMIT OR DO NOT
                        PERMIT DISCLAIMERS OF WARRANTY, SO THIS PROVISION MAY NOT APPLY TO YOU.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] 
                        mt-5 lowercase!'
                    >
                        MOREOVER, YOU ACKNOWLEDGE THAT WE HAVE PROVIDED NO WARRANTIES, EITHER EXPRESS OR IMPLIED, WRITTEN OR ORAL,
                        INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE,
                        WITH RESPECT TO ANY EQUIPMENT, SOFTWARE OR SERVICES THAT THE COMPANY MARKETS AND THAT THE COMPANY HAS
                        NO LIABILITY WITH RESPECT TO ANY EQUIPMENT, SOFTWARE OR SERVICES. THE USER AGREES TO EXCLUSIVELY LOOK
                        TO THE THIRD-PARTY PROVIDER OF SUCH EQUIPMENT, SOFTWARE OR SERVICES FOR REMEDY. IF THERE ARE ERRORS,
                        OMISSIONS, INTERRUPTIONS OR DELAYS RESULTING FROM OUR PERFORMANCE OR ANY FAILURE TO PERFORM, OUR LIABILITY
                        SHALL BE LIMITED TO CORRECTING SUCH ERRORS, IF COMMERCIALLY REASONABLE.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Limitations of Damages; Release</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] 
                        mt-5 lowercase!'
                    >
                        TO THE EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, DIRECTORS, OR
                        EMPLOYEES OR ITS LICENSORS OR PARTNERS, BE LIABLE TO YOU FOR ANY LOSS OF PROFITS, USE OR DATA OR FOR ANY
                        INCIDENTAL, INDIRECT, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, HOWEVER ARISING, THAT RESULT FROM (A)
                        THE USE, DISCLOSURE, OR DISPLAY OF YOUR USER CONTENT; (B) YOUR USE OR THE INABILITY TO USE THE SERVICE;
                        (C) THE SERVICE GEENRALLY OR THE SOFTWARE OR SYSTEMS THAT MAKE THE SERVICE AVAILABLE; OR (D) ANY OTHER
                        INTERACTIONS WITH THE COMPANY OR ANY OTHER USER OF THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT
                        (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY HAS BEEN INFORMED OF THE
                        POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS FOUND TO HAVE FAILED OF ITS ESSENTIAL
                        PURPOSE. SOME JURISDICTIONS LIMIT OR DO NOT PERMIT DISCLAIMERS OF LIABILITY, SO THIS PROVISION MAY NOT
                        APPLY TO YOU.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        If you have a dispute with a third-party service provider that you were referred to, or to whom your
                        application was submitted through use of the Service, you release us (and our officers, directors,
                        agents, subsidiaries, joint ventures and employees) from claims, demands and damages (actual and
                        consequential) of every kind and nature, known and unknown, arising out of or in any way connected with
                        such disputes. If you are a California resident, you waive California Civil Code subsection 1542, which
                        says: “A general release does not extend to claims which the creditor does not know or suspect to exist
                        in his favor at the time of executing the release, which if known by him must have materially affected
                        his settlement with the debtor.”
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Termination</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for
                        any reason whatsoever, including without limitation if you breach the Terms.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        All provisions of the Terms which by their nature should survive termination shall survive termination,
                        including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
                        liability.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Modification of Terms of Use</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        We can amend these Terms of Use at any time and will update these Terms of Use in the event of any such
                        amendments. It is your sole responsibility to check the Site from time to time to view any such changes
                        in the Agreement. If you continue to use the Site, you signify your agreement to our revisions to these
                        Terms of Use. However, we will notify you of material changes to the Terms of Use by posting a notice on
                        our homepage and / or sending an email to the email address you provided to us upon registration. For
                        this additional reason, you should keep your contact information current.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Any changes to these Terms (other than as set forth in this paragraph) or waiver of the Company’s rights
                        hereunder shall not be valid or effective except in a written agreement bearing the physical signature of
                        an officer of the Company. No purported waiver or modification of this Agreement by the Company via
                        telephonic or email communications shall be valid.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Governing Law</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        These Terms of Use and your use of the Site are governed by the federal laws of the United States of
                        America and the laws of the State of Texas and Harris County Texas, without regard to conflict of law
                        provisions.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>General Terms</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        If any part of this Agreement is held invalid or unenforceable, that portion of the Agreement will be
                        construed consistent with applicable law. The remaining portions will remain in full force and effect.
                        Any failure on the part of the Company to enforce any provision of this Agreement will not be considered
                        a waiver of our right to enforce such provision. Our rights under this Agreement will survive any
                        termination of this Agreement.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        You agree that any cause of action related to or arising out of your relationship with the Company
                        must commence within ONE year after the cause of action accrues. Otherwise, such cause of action is
                        permanently barred.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        The Company may assign or delegate these Terms of Service and / or the Company’s Privacy Policy ({" "}
                        <Link rel="preload" href='/privacy-policy' target='_blank' className="hover:underline cursor-pointer 
                            text-[#ef793c]"
                        >
                            https://www.equipay/privacy-policy
                        </Link>{" "}),
                        in whole or in part, to any person or entity at any time with or without your consent. You may not assign
                        or delegate any rights or obligations under the Terms of Service or Privacy Policy without the Company’s
                        prior written consent, any any unauthorized assignment and delegation by you is void.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] 
                        mt-5 lowercase!'
                    >
                        YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF USE, UNDERSTAND THE TERMS OF USE, AND WILL BE BOUND BY
                        THESE TERMS AND CONDITIONS. YOU FURTHER ACKNOWLEDGE THAT THESE TERMS OF USE TOGETHER WITH THE PRIVACY
                        POLICY REPRESENT THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US AND THAT IT SUPERCEDES
                        ANY PROPOSAL OR PRIOR AGREEMENT ORAL OR WRITTEN, AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE
                        SUBJECT MATTER OF THIS AGREEMENT.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Contact Us</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        If you have any questions about this Privacy Policy, please Contact Us ({" "}
                        <Link rel="preload" href='/contact' target='_blank' className="hover:underline cursor-pointer 
                           text-[#ef793c]"
                        >
                            https://www.equipay.com/contact
                        </Link>{" "})
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default TermsConditions