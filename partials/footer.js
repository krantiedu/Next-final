import Link from "next/link";
import styles from "@/styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faPhone,
  faEnvelope,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  
  return (
    <div className={styles.footer_wrap}>
      <div className={styles.footer_container}>
        <div className={styles.footer_brand_info}>
          <h2 className={styles.footer_heading}>KRANTI</h2>
          <p>
            We are Educatios, create your passion and inspiration. And hope
            success will come for your dream. Please send email and get in
            touch.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>83, CRK Niwas, Chittorgarh, Rajasthan, India [312001]</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>krantieducation1@gmail.com</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 7878806370</span>
            </li>
          </ul>
        </div>
        <div className={styles.footer_links_wrap}>
          <div className={styles.footer_links}>
            <h2 className={styles.footer_heading}>COURSES</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Class 6</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Class 7</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Class 8</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Class 9</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Class 10</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_links}>
            <h2 className={styles.footer_heading}>LINKS</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Home</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>About Us</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Tutors</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Gallery</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_links}>
            <h2 className={styles.footer_heading}>SUPPORT</h2>
            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Documentation</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Forums</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Language Packs</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Legal</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} />
                <Link href={""}>Documentation</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_contact_form}>
          <h2 className={styles.footer_heading}>GET IN TOUCH</h2>
          <p>Enter your email and we'll send you more information</p>
          <input type="email" name="subscribe" placeholder="Enter Your Email"></input>
          <div className={styles.subs_button}>SUBSCRIBE</div>
        </div>
      </div>
      <div className={styles.bottom_bar}>
        <p><FontAwesomeIcon icon={faCopyright} style={{margin: "auto 5px auto 0"}}/>2023 KRANTI Education | All rights reserved</p>
        <div className={styles.social_links_wrap}>
          <Link href={""}><FontAwesomeIcon icon={faFacebook}/></Link>
          <Link href={""}><FontAwesomeIcon icon={faInstagram}/></Link>
          <Link href={""}><FontAwesomeIcon icon={faTwitter}/></Link>
          <Link href={""}><FontAwesomeIcon icon={faLinkedin}/></Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
