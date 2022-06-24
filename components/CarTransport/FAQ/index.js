import Faq from "react-faq-component";

const data = {
    title: "",
    rows: [
        {
            title: <h6>How much does it Cost to Ship a Car ?</h6>,
            content: `Depending on the car type and distance to be shipped, car shifting costs are determined. These car moving costs may vary from city to city`,
        },
        {
            title: <h6>What is the Cost Affecting Factors in Vehicle Shifting in from any city?</h6>,
            content: "The significant cost affecting factors of vehicle shifting are: Type of vehicle to be shifted, Distance to be moved, How soon the shifting needs to be done, And the make, weight, or model of the vehicle to be shifted.",
        },
        {
            title: <h6>Do I Need to Prepare my Vehicle Before Transport?</h6>,
            content: "To ensure that your vehicle is fully operational at the time of shifting. Check your tires, brakes, engine, keep no or minimum fuel in the vehicle in case it needs to be driven, and remove any personal belongings as well as original documents. Also, ensure that you remove any loose objects and take note of any dents/damage, etc., on the vehicle.",
        },
        {
            title: <h6>Is there Door to Door Vehicle Shifting Available in my city?</h6>,
            content: "Yes, we provide door to door vehicle shifting facility in every city with very affordable rates, you can also choose standard vehicle shifting, in which the vehicle has to be dropped off at our warehouse and should be recieved from our warehouse at the final city.",
        },
        {
            title: <h6>How Long does it Take for a Vehicle Shipment to Complete?</h6>,
            content: "It depends on the distance to be covered. Depending on your requirement, you will be provided an estimate of when your vehicle will reach the destination. We try our best to ensure that the commitment made at the time of booking is adhered to.",
        },
        {
            title: <h6>How to book car transport service through Autoave?</h6>,
            content: "Just fill out the form above and we will get back to you as soon as possible to give you the best service and the most affordable rates in the industry.",
        }
    ],
};

const styles = {
    // bgColor: 'white',
    // titleTextColor: 'blue',
    titleTextSize: '48px',
    // rowTitleColor: 'blue',
    // rowTitleTextSize: 'medium',
    rowContentColor: '#4a4a4a',
    // rowContentTextSize: '16px',
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
    rowContentPaddingLeft: '50px',
    // rowContentPaddingRight: '150px',
    // arrowColor: "red",
    // transitionDuration: "1s",
    // timingFunc: "ease"
  }

const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: -1,
    expandIcon: "+",
    collapseIcon: "-",
};

export default function FAQ(){
    return (
        <div className="">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-6">
                FAQs
            </h2>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    )
}