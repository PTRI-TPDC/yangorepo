import Carousel from "./carousel";
import React from 'react';
import propic from './profile.png';

import image1 from "./01.png";
import image2 from "./sample2.png";
import image3 from "./sample3.png";
import image4 from "./sample4.png";
import image5 from "./sample1.png"


const images = [image1, image2, image3, image4, image5];




const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
        style={{ fontFamily: 'Nunito' }}
      >

        <div className='modalRight'>
          
         <div className="div3"> 
         <button className='x-btn ' onClick={onClose}>
         </button>
          </div> 

          <div className='btnContainer'>
          
          <div className="div1">My Design</div>
          <div className="div2">
          <button class="circular-rectangle-button">Settings</button>
          </div>

          </div>
          <div class="modal_bodycontainer">
          <div class="modal_body_left_div">
          
            
            <Carousel images={images} />
         
          </div>
          
          <div class="modal_body_right_div">
            <div class="modal_body_upper_right_div">
              
              <div class="profile">
                <img src={propic} alt="profile placehold" />
                </div>
                <div>
                <h5>
                  Designed by:
                </h5>
                <p>
                  Van Panugan
                </p>
              </div>
              
              </div>
              <div class="modal_body_middle_right_div">
              <button class="button1">CAD</button>
              <button class="button2">3D</button>
              </div>
            <div class="modal_right_div">
            

            </div>
            <div class="modal_body_lower_right_div">
              <div>
              <h3>Tags</h3>
              </div>

             <div>
             <p>Jacket, 3D Design, CAD Software</p>

             </div>

             
              </div>
          </div>
          </div>
          <div class="content_main_body">
        <div class="content_head">
          <h2>Description</h2>
        </div>
        <div class="content_body">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
        </div>
        
      </div>
    </div>
  );
};

export default Modal;
