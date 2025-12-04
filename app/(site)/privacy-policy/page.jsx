import Link from 'next/link';
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'

export const metadata = {
    title: "Privacy Policy – EquiPay",
};

const PrivacyPolicy = () => {
    return (
        <Fragment>
            <BannerSection title="Privacy Policy" />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">
                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        Equipay (“us”, “we”, or “our”) operates {" "}
                        <Link href='/' className="hover:underline cursor-pointer text-[#ef793c]">
                            https://www.equipay.com
                        </Link>
                        {" "} (the “Site”). This page informs you of our policies regarding the collection, use and disclosure
                        of Personal Information we receive from users of the Site.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        We use your Personal Information for providing and improving the Site as well as for providing you with
                        services you apply for through the Site. By using the Site, you agree to the collection and use of
                        information in accordance with this policy.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Information Collection And Use</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        While using our Site, we may ask you to provide us with certain personally identifiable information that
                        can be used to contact or identify you. Personally identifiable information may include, but is not
                        limited to your name, business name, personal and business contact information, etc.
                        (“Personal Information”).
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Log Data</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        Like many site operators, we collect information that your browser sends whenever you visit our
                        Site (“Log Data”).
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser
                        type, browser version, the pages of our Site that you visit, the time and date of your visit, the time
                        spent on those pages and other statistics.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        In addition, we may use third party services such as Google Analytics that collect, monitor and analyze
                        this collected data.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Communications</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        We may use your Personal Information to contact you with newsletters, marketing or promotional materials
                        and other information that you have indicated an interest in through the submission of Personal
                        Information, or by visiting the Site.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Third Parties</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mb-5'>
                        We may share your Personal Information with third parties who provide services you have indicated
                        an interest in through the submission of Personal Information to the Site.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold mb-5'>Cookies</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies
                        are sent to your browser from a web site and stored on your computer’s hard drive.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all
                        cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not
                        be able to use some portions of our Site.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Security</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        The security of your Personal Information is important to us, but remember that no method of transmission
                        over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially
                        acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Changes To This Privacy Policy</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        This Privacy Policy is effective as of January 01st, 2016 and will remain in effect except with respect
                        to any changes in its provisions in the future, which will be in effect immediately after being posted
                        on this page.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        We reserve the right to update or change our Privacy Policy at any time and you should check this
                        Privacy Policy periodically. Your continued use of the Service after we post any modifications to the
                        Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent
                        to abide and be bound by the modified Privacy Policy.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        If we make any material changes to this Privacy Policy, we will notify you either through the email
                        address you have provided us, or by placing a prominent notice on our website.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Contact Us</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        If you have any questions about this Privacy Policy, please Contact Us ({" "}
                        <Link href='/contact' target='_blank' className="hover:underline cursor-pointer text-[#ef793c]">
                            https://www.equipay.com/contact
                        </Link>{" "})
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default PrivacyPolicy