import Link from 'next/link';
import { Fragment } from 'react'
import BannerSection from '@/components/BannerSection'

export const metadata = {
    title: "Legal – EquiPay",
};

const Legal = () => {
    return (
        <Fragment>
            <BannerSection title="Legal" sub_title={"Acceptable Use"} />

            <section className="lg:px-24 sm:px-7 px-5 md:pt-20 pt-16 md:pb-14 pb-10">
                <div className="container mx-auto">

                    <h3 className='text-[#212529] text-[25px] font-bold mb-5'>
                        Acceptable use of an EquiPay account
                    </h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-5'>
                        Your EquiPay account and any links are intended solely for valid sale transactions between legitimate
                        buyers and EquiPay. Any exception is forbidden including but not limited to fraudulent activity of any
                        type, transfer of funds, virtual currency or any stored value credits.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        You are required to have a valid website where any EquiPay links are posted. The website has to include
                        the product(s) description, contact information and a refund policy.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        All orders must be placed within the EquiPay secured form and by the payment vehicle legitimate owners
                        themselves. You may not collect credit card / payment information from buyers. You may not store credit
                        card/payment information records anywhere in your EquiPay account storage space.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        Any EquiPay link should not be included in any spamming activity or communication.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        Violations of the EquiPay acceptable use and prohibited items policy
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        Please assist us in detecting and reporting violations of this Policy by contacting us at legal@equipay.com.
                        Please include a description of the suspected violation and links with screenshots if possible.
                    </p>

                    <h3 className='text-[#707070] text-[25px] font-bold my-5'>Cookies</h3>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#212529]'>
                        This Site Uses Cookies
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        EquiPay employs cookies. A cookie is a small text, graphic or flash file that our web servers place on
                        a user’s computer hard drive or other web-based device to act as a unique identifier. Cookies may also
                        enable EquiPay to automatically log a user back into our services, as long as the user chooses to enable
                        such option. EquiPay cookies do not have an expiration date. Our cookies may collect personal,
                        identifiable information, including a user’s username and password to support optional automatic logon.
                        Cookies may also be used to identify, and track transactions introduced by recognized EquiPay affiliates
                        and also to support optional choices by users to save and make available for reuse certain payment
                        information for future transactions. Users can control the use of cookies at the individual browser level.
                        If you reject cookies, you may still use our site, but your ability to use some features or areas of our
                        site may be limited.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        Technologies such as: cookies, beacons, tags and scripts are used by EquiPay and our marketing partners,
                        merchants, affiliates, or analytics or service providers, including online customer support providers and
                        online transaction processors. These technologies are used in analyzing trends, administering the site,
                        tracking users’ movements around the site and to gather demographic information about our user base as
                        a whole. We may receive reports based on the use of these technologies by these companies on an individual
                        as well as aggregated basis.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        As is true of most web sites, we gather certain information automatically and store it in log files. This
                        information may include Internet protocol (IP) addresses, browser type, Internet service provider (ISP),
                        referring/exit pages, operating system, date/time stamp, and/or clickstream data. We may link this
                        automatically collected data to other information we collect about you.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left font-light leading-[1.7] text-[#57647c] mt-2'>
                        We may from time to time partner with a third party to either display advertising on our web site or to
                        manage our advertising on other sites. Our third-party partners may use technologies such as cookies to
                        gather information about your activities on this site and other sites in order to deliver relevant
                        advertising based upon your browsing activities and interests.
                    </p>

                    <p className='md:text-lg text-base md:text-justify text-left leading-[1.7] mt-2'>
                        <Link href='/privacy-policy' target='_blank'
                            className="hover:no-underline underline cursor-pointer text-[#ef793c]"
                        >
                            Click here for our Privacy Policy
                        </Link>
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default Legal