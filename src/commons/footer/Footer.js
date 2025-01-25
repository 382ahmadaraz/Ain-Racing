import logo from "../../assets/images/flogo.jpeg";
import fb from "../../assets/icons/fb.png"
import x from "../../assets/icons/x.png"
import insta from "../../assets/icons/insta.png"
import FooterLinks from "../../components/footerLinks/FooterLinks";


export default function Footer(props) {
  return (
    <div>
      <div className="flex justify-center h-[70vh] w-full py-14 [&>*]:ml-3 text-lg text-white from-neutral-200 bg-black ">
      <div className="w-[28%]">
        <img src={logo} alt="logo" className="h-[25%]"/>
        <p className="my-4 ">
        Lorem ipsum dolor sit amet consectetur. Non nisl aliquet vivamus euismod eleifend. Pharetra volutpat tellus at elementum egestas in vitae elementum. Sed nibh pharetra tincidunt dignissim. 
        </p>
        <div className=" flex gap-3">
            <img src={fb} alt="facebook " />
            <img src={x} alt="twitter"/>
            <img src={insta} alt="instagram"/>
        </div>
      </div>

      {/* footer links */}
      <div>
        <FooterLinks title1="Useful Links" title2="The Series" title3="Media"/>
        </div>
    </div>
        <div className="bg-darkGray w-full h-[50px] text-gray-200 flex items-center justify-center">
        © Copyright 2024 Al Ain Raceway | All Rights Reserved
        </div>
    </div>
  );
}
