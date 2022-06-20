import LandingContactUs from "@components/LandingPage/ContactUs";
import LandingFooter from "@components/UI/LandingFooter";
import Navbar from "@components/UI/LandingNavbar";
import { FACEBOOK_APP_ID, FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, SITE_URL } from "@utils/contants/general";
import LOCALISATION_DATA, { COUNTRY_TO_LOCALE } from "@utils/localisation"
import useLocale from "@utils/useLocale";

import { NextSeo } from "next-seo";
import { SocialProfileJsonLd } from 'next-seo';
import { useRouter } from "next/router";


export default function PartnerTermsAndConditions() {
    const { locale } = useLocale()

    return (
        <>
            <NextSeo
                title="Terms and Conditions - Service Partner"
                description="Service Partner's Terms and Conditions at Autoave - Simplifying the way you take care of your car."
                canonical={`${LOCALISATION_DATA[locale].domain}/service-partner/terms`}
                openGraph={{
                    url: `${LOCALISATION_DATA[locale].domain}/service-partner/terms`,
                    title: "Partner - Terms and Conditions",
                    description: "Service Partner's Terms and Conditions at Autoave - Simplifying the way you take care of your car.",
                    images: [
                        {
                            url: `${LOCALISATION_DATA[locale].domain}/autoave-banner.jpg`,
                            width: 1200,
                            height: 628,
                            alt: "Autoave Banner",
                            type: "image/jpeg",
                        },
                    ],
                    site_name: "Autoave",
                }}
                facebook={{
                    appId: FACEBOOK_APP_ID,
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: 'Autoave, Car Wash, Book Car Wash, Car Care, Car Wash in Banglore'
                }]}
            />
            <SocialProfileJsonLd
                type="Organization"
                name="Autoave"
                url={SITE_URL}
                sameAs={[
                    FACEBOOK_URL,
                    INSTAGRAM_URL,
                    LINKEDIN_URL
                ]}
            />
            <Navbar light />
            <div className="container p-3 py-40">
                <h1 className="text-2xl md:text-1xl">TERMS AND CONDITIONS OF SERVICE PARTNER ENROLMENT FORM FOR ONLINE BOOKING SERVICES (&quot;TERMS&quot;)</h1>
                <p className="mb-5">Updated at 2022-01-21</p>

                These Terms form part of the Service Partner Enrolment Form for Online Booking Services (&quot;Form&quot;) and constitute a legally binding agreement made between you, whether personally or on behalf of an entity (the &quot;Service Partner&quot;) and Autoave Private Limited and its affiliates (collectively, &quot;Autoave&quot;), regarding use of Autoave&apos;s Platform (as defined below) for the provision of Vehicular Services (as defined below) by the Service Partner to the Customers (as defined below).

                <h1 className="my-1 text-xl">Definitions</h1>
                <li> &quot;Customer&quot; means users who place Booking through the Platform.</li>
                <li> &quot;Commission&quot; means the amount payable by the Service Partner to Autoave, being a % of Net Sales as set out in the Form.</li>
                <li> &quot;Form&quot; means the Service Partner Enrolment Form for Online Booking Services executed by the Service Partner</li>
                <li> &quot;Service Partner&quot; means the entity/ individual being the legal owner of the Vehicular Service Store as mentioned in the Form.</li>
                <li> &quot;Website&quot; means {LOCALISATION_DATA[locale].domain} (including the webpages contained or hyperlinked therein and owned or controlled by Autoave), and such other media or media channels, devices, mobile applications, software, or technologies as Autoave may choose from time to time.</li>
                
                <h1 className="my-1 text-xl">Autoave&apos;s Obligations:</h1>
                <li> Autoave will list Service Partner&apos;s services and the price list on the Platform.</li>
                <li> Autoave will display on the Platform, on a best effort basis, all necessary information provided by the Service Partner. However, Autoave is not under any obligation to display any information until the Service Partner provides all required information and such information is in compliance with Autoave&apos;s policies and guidelines.</li>
                <li> For the avoidance of doubt it is hereby expressly clarified that Autoave is only responsible for providing a Platform to the Service Partner to list, offer and sell the Service Partner&apos;s services to the Customers and that Autoave will not be responsible or liable for (i) the quality of the Service Partner&apos;s Services listed and advertised on the Platform; and/or and/or (ii) any delay in completion of the Booking by Service Partner.</li>
                <li> Autoave shall provide the Service Partner with a web dashboard in the event the Service Partner has a designated device to access such web dashboard, high-speed internet connection and speakers.</li>

                <h1 className="my-1 text-xl">Service Partner&apos;s Obligations</h1>
                <li> Service Partner will not discriminate while providing Services to Customers and in servicing bookings received from Customer Bookings via the Platform. Service Partner will not provide any preferential treatment to customers Bookings independently from the Service Partner (i.e. customers Bookings directly from a Service Partner).</li>
                <li> Service Partner will ensure that the Information provided to Autoave is current and accurate, including but not limited to the Service Partner name, address, contact telephone number, email, manager/contact person details, opening hours, services list, price lists, taxes, and other relevant information.</li>
                <li> Service Partner shall ensure that it is the sole author/owner of, or otherwise controls all the content/material, including but not limited to the Service Partner&apos;s name, establishment name, logo, menu items, images of the vehicular services, etc. transmitted or submitted by the Service Partner to Autoave either through the Platform or otherwise (“Content”), or has been granted the right to use such Content from the rights holder of such Content and that it does not violate or infringe the rights of any third party or applicable laws;</li>
                <li> The Service Partner is obliged to provide Services to Customers as per the Booking time.
                Multiple instances of cases where the Service Partner is unable to provide quality and timely
                service to Customers, Autoave has the right to take appropriate actions such as Termination of
                Service Partner from the Autoave platform.</li>
                <li> Service Partner shall process and execute the Booking(s) promptly.</li>
                <li> The Service Partner shall be obligated to stop receiving online booking by contacting Autoave whenever the Service Partner is unable to provide Vehicular Services to the Customer.</li>
                <li> Service Partner acknowledges and agrees that in the event the Customer&apos;s experience with the Service Partner and the Vehicular Services is hampered on account of acts and omissions attributable to the Service Partner, including but not limited to, frequent rejection of Bookings(s), Autoave reserves the right to take appropriate action in accordance with its policies, which may be amended from time to time.</li>

                <li> Service Partner shall inform Autoave about any change or modification made to the Bookings by the Customer, directly with the Service Partner.</li>
                <li> The Service Partner shall contact Autoave if a Booking cannot be processed as requested or to clarify the details of a Booking if required, post confirmation of the Booking.</li>
                <li> The Service Partner shall remove any/all service items unavailable with the Service Partner by contacting Autoave.</li>
                <li> Service Partner acknowledges and agrees that it shall not make any independent calls to the Customer and asks the Customer to make payments of amounts greater than what was agreed by the Customer at the time of placing the Bookings through the Platform.</li>
                <li> Service Partner except required for the fulfillment of Bookings shall not use the Customer data for sending any unsolicited marketing message, announcements.</li>
                <li> Service Partner shall not engage in any fraudulent activity or misuse any benefits extended by Autoave to Customers and shall be liable to Autoave in the event Autoave becomes aware of any fraudulent activity undertaken by the Service Partner.</li>
                
                <h1 className="my-1 text-xl">License</h1>
                Service Partner grants to Autoave an unrestricted, non-exclusive, royalty-free license in respect of all Content (defined hereinabove) and Information provided to Autoave by the Service Partner for the purposes of inclusion on the Platform and as may be otherwise required under the Form. This includes, but is not limited to, (a) use of the Service Partner&apos;s name in the context of Google Adwords to support advertising and promotional campaigns to promote online booking on the internet which may be undertaken by Autoave (b) preparation of derivative works of, or incorporate into other works, all or any portion of the marketing materials which will be made by Autoave for the purposes of its business.

                Any Content, information or material that the Service Partner transmits or submits to Autoave either through the Platform or otherwise shall be considered and may be treated by Autoave as non-confidential, subject to Autoave&apos;s obligations under relevant data protection legislation.

                The Service Partner also grants to Autoave a royalty-free, perpetual, irrevocable, non-exclusive license to use, copy, modify, adapt, translate, publish and distribute worldwide any Content, information or material for the purposes of providing Services under these Terms or to or for the purposes of advertising and promotion of the Platform. The Service Partner agrees that all Content, information or material provided to Autoave that is published on the Platform, may be relied upon and viewed by Customers to enable them to make informed decisions at the pre-purchase stage.

                <h1 className="my-1 text-xl">Service Partner Service and Price List</h1>
                <li> Autoave will display on the Platform the service and price list for all of its Service Partners. The Service Partner agrees that Autoave reserves the right to modify and delete certain items from the Service Partner&apos;s service list at its sole discretion, 
                    listed on the Platform, to ensure compliance with applicable law(s) in the relevant State or Territory and all other applicable legislation, regulations or regulatory standards. Autoave shall endeavor to update price lists within 48 hours of being 
                    notified of changes (in writing) by a Service Partner. Where the Service Partner has a unilateral right to access the Service Partner admin panel or dashboard (subject to Autoave&apos;s written consent in this regard) to edit and update the information 
                    which is displayed on the Platform by Autoave, the Service Partner should ensure that it (i) keeps such information true, accurate and updated at all times; and (ii) comply with Autoave&apos;s internal terms and conditions of use in this regard.</li>

                <li> Autoave may perform a variety of marketing activities to promote the Service Partner and the Service Partner&apos;s service list; provided, however, that all such marketing activities will be determined in Autoave&apos;s sole and absolute discretion and the Platform 
                    may be modified or updated, without notice and from time to time, to reflect any such changes.</li>

                <h1 className="my-1 text-xl">Payments Mechanism</h1>
                <li> The Service Partner acknowledges and agrees that the Platform will provide the following payment mechanisms to the Customers for the payment of the Booking Value:</li>
                <ul>
                <li> Partial Payment (Autoave will collect only the booking fee i.e. Autoave&apos;s commission, Remaining balance has to be collected by Service Partner by any mode of conveyance);</li>
                <li> Redemption of vouchers and/or discount coupons (if any) approved by Autoave.</li>
                </ul>

                <h1 className="my-1 text-xl">Payment Settlement Process</h1>
                <li>  The Service Partner acknowledges and agrees that any Booking Value which is collected by Autoave is agreed and as per the commission table in Enrollment Form.</li>
                <li> In case of any other service(s), not booked through Autoave&apos;s Platform, availed by the Customer, Service Partner can bill the Customer additionally.</li>

                <h1 className="my-1 text-xl">Confidentiality</h1>
                <li> Other than for the provision of Service(s) by Autoave, Autoave does not share any other information of the Service Partner with third parties unless requisitioned by government authorities.</li>

                <li> Other than for the purpose of availing Service(s) from Autoave, the Service Partner must not disclose any confidential information about Autoave, including but not limited to these Terms, its business strategies, pricing, revenues, expenses, Customer Data, and Booking information to third parties.</li>

                <h1 className="my-1 text-xl">Limitation of Liability</h1>
                For the purposes of this clause, &quot;Liability&quot; means liability in or for breach of contract, negligence, misrepresentation, tortious claim, restitution, or any other cause of action whatsoever relating to or arising under or in 
                connection with this Form, including liability expressly provided for under this Form or arising by reason of the invalidity or unenforceability of any term of this Form. Autoave does not exclude or limit liability for any 
                Liability that cannot be excluded by law. Subject to the preceding sentence, Autoave shall not be under any liability for loss of actual or anticipated profits, loss of goodwill, loss of business, loss of revenue or of the use of 
                money, loss of contracts, loss of anticipated savings, loss of data and/or undertaking the restoration of data, fraudulent Bookings, any special, indirect or consequential loss, and such liability is excluded whether it is foreseeable, 
                known, foreseen or otherwise. For the avoidance of any doubt, this clause shall apply whether such damage or loss is direct, indirect, consequential, or otherwise. Although Autoave will use its best endeavors to ensure that unintentional operational errors do not occur, Autoave cannot provide any warranty or guarantee in this regard. Notwithstanding anything to the contrary herein set out, Autoave&apos;s aggregate liability under this Form shall not exceed the total value of the Booking under which the claim arose.

                <h1 className="my-1 text-xl">Modification</h1>
                Autoave may modify these Terms from time to time, and any such changes will (i) be reflected on the Website, and (ii) be effective immediately upon the changes being reflected on the Platform. The Service Partner agrees to be bound to any such changes or modifications and understands and accepts the importance of regularly reviewing these Terms as updated on the Platform.

                Further, in the event Autoave upgrades modify or replaces the Services (&quot;Service Modifications&quot;) offered to the Service Partner, Autoave will notify the Service Partner prior to making the same and give the Service Partner the opportunity to review and comment on the Service Modifications before continuing to use the Service or any alternative service offered by Autoave. The Service Modifications will also be reflected on the Platform. If the Service Partner continues to use the Service or any alternate service offered by Autoave, following any notice of the Service Modifications, it shall constitute the Service Partner&apos;s acceptance of such Service Modifications.

            </div>
            <LandingContactUs />
            <LandingFooter />
        </>
    )
}