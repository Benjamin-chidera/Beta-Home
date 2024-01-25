import React from "react";
import woods from "../../assets/images/unsplash_RFDP7_80v5A.png";
import hero from "../../assets/images/img6.png";
import house from "../../assets/images/allprop.png";
import "../../styles/Admin Styles/AdminPropertyDetails.css"
import AdminLayout from "../../components/Admin components/AdminLayout";
import { Outlet } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import profile from "../../assets/images/Ellipse 10.png";
import { MdOutlineBedroomChild } from "react-icons/md";
import { LuBath } from "react-icons/lu";
import { BiSolidCarGarage } from "react-icons/bi";
import { IoSquareOutline } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const AdminPropertyDetails = () => {
  return (
    <div className="propertyDetails">
      <AdminLayout>
        <div className="propertyHeader">
          <div className="link1">
            <IoCaretBack />
            <h4>Properties Details</h4>
          </div>

          <div className="link2">
            {/* <img src={house} alt="" /> */}
            <FaHouse />
            <h6>Home / Properties / Properties Details</h6>
          </div>
        </div>

        <div className="propertyResidents">
          <div>
            <h5>Residential Land</h5>
            <p>3 Ogunlesi Street, Onipanu</p>
          </div>

          <div className="link3">
            <button>Edit</button>
            <button>Unlist Property</button>
          </div>
        </div>

        <div className="propertyImages">
          <img src={woods} alt="" />
          <div>
            <img src={hero} alt="" />
            <img src={hero} alt="" />
            <img src={hero} alt="" />
          </div>
        </div>

        <div className="requirements">
          <div>
            <div>
              <div className="header1">
                <div>
                  <div className="links">
                    <div>
                      <FaNetworkWired />
                      <h6>Network</h6>
                    </div>

                    <div>
                      <MdFamilyRestroom />
                      <h6>Family</h6>
                    </div>
                  </div>

                  <div className="location">
                    <h2>Residential Land</h2>
                    <div className="heroLocation">
                      <MdLocationOn />
                      <h6>3, Ogunlesi Street, Lagos 100252</h6>
                    </div>
                  </div>
                </div>

                <div>
                  <h4>Sales Price</h4>
                  <h2>$29,630</h2>
                </div>
              </div>

              <div className="description">
                <h5>Description</h5>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem consequuntur, ea neque voluptatibus officia
                  ratione eum quo vero molestiae earum esse minus tenetur, quod
                  quasi ipsam explicabo? Asperiores optio dolores quisquam
                  dolorem explicabo nisi praesentium distinctio accusantium,
                  ipsa iste libero perferendis aperiam minus tempore totam
                  repellendus natus voluptate deserunt reprehenderit odio
                  dolorum non, aspernatur officia excepturi! Adipisci, velit rem
                  sequi incidunt maxime quam minima iure. Distinctio eligendi
                  minima consectetur ea!
                </p>
              </div>
            </div>

            <div className="features">
              <h4>Features</h4>
              <div>
                <div>
                  <MdOutlineBedroomChild />
                  <p>3 Bedroom</p>
                </div>
                <div>
                  <LuBath />
                  <p>2 Bathroom</p>
                </div>
                <div>
                  <MdOutlineBedroomChild />
                  <p>3 Bedroom</p>
                </div>
                <div>
                  <LuBath />
                  <p>2 Bathroom</p>
                </div>
                <div>
                  <BiSolidCarGarage />
                  <p>Garage</p>
                </div>
                <div>
                  <IoSquareOutline />
                  <p>Square Feet</p>
                </div>
                <div>
                  <BiSolidCarGarage />
                  <p>Garage</p>
                </div>
                <div>
                  <IoSquareOutline />
                  <p>Square Feet</p>
                </div>
              </div>
            </div>

            <div className="videoDescription">
              <h3>Property Video</h3>
              <img src={hero} alt="" />
              {/* <FaPlayCircle /> */}
            </div>
          </div>

          <div>
            <div className="profile">
              <img src={profile} alt="" />
              <h4>Ezra Aduramigba</h4>
              <p>Sales Support</p>
              <div>
                <button>Message: 08130054558</button>
                <button>Call: 08130054558</button>
              </div>
            </div>

            <div className="oldProperties">
              <h4>
                Old Property? Would you like to delete this property? or mark as
                sold?
              </h4>
              <div>
                <button>Mark as Sold</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminPropertyDetails;
