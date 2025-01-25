import footerPlay from "../../assets/icons/footer-drop.png";

export default function FooterLinks(props) {
    const footerLinks = [
        {
            index:1,
            link: "Useful Links",
            details: ["About", "Mission & Vision","FAQs","Terms & Conditions","Contact Us" ],
        },
        {
            index:2,
            link: "The Series",
            details: ["About UAE UMC", "Starting Karting","How to Register & Race","Ho₩ much does it" ],
        },
        {
            index:3,
            link: "Media",
            details: ["News", "Gallery","Videos","Links" ],
        },
    ];

    return (
        <div className=" h-full flex justify-evenly ">

            {footerLinks.map((item, index) => (
                <div key={index} className="ml-5">
                    <p className="text-3xl font-bold italic mb-7">{item.link}</p>
                    {item.details.map((details, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3 my-2 px-3 cursor-pointer hover:text-Red">
                            <img src={footerPlay} alt="footer icon" className="h-fit "/>
                            <p className="text-[17px] font-semibold">{details}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

 
