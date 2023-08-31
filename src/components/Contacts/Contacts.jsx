import React from 'react'
import './Contacts.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
// import {HiChatBubbleBottonCenter} from 'react-icons/hi'
const Contacts = () => {
  return (
   <section className="c-wrapper">
    <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
      <span className='orangeText'>Our Contatcs</span>
      <span className='primaryText'>Easy to Contact us</span>
      <span className='secondaryText'> Lorem ipsum dolor sit amet contsectetur adipisicing elit. Sit, vel!</span>



      <div className="flexStart contactModes">
        <div className="flexStart row">
            <div className="flexColCenenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                        <span>Call</span>
                        <span>021 123 145 14</span>
                    </div>
                </div>
                <div className="button flexCenter ">Call Now</div>
            </div>
            {/* second mode */}
            <div className="flexColCenenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                        <span>Chat</span>
                        <span>021 123 145 14</span>
                    </div>
                </div>
                <div className="button flexCenter ">Chat Now</div>
            </div>
        </div>
        {/* second row */}
        <div className="flexStart row">
            <div className="flexColCenenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                        <span> Video Call</span>
                        <span>021 123 145 14</span>
                    </div>
                </div>
                <div className="button flexCenter "> Video Call Now</div>
            </div>
            {/* flourth mode */}
            <div className="flexColCenenter mode">
                <div className="flexStart">
                    <div className="flexCenter icon">
                        {/* <HiChatBubbleBottonCenter size={25} /> */}
                    </div>
                    <div className="flexColStart detail">
                        <span>Message</span>
                        <span>021 123 145 14</span>
                    </div>
                </div>
                <div className="button flexCenter "> Message Now</div>
            </div>
        </div>
      </div>
        </div>
        {/* right side */}
        <div className="c-right">
            <div className="image-container">
             <img src="./contact.jpg" alt="" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Contacts