import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#f6f6f6", padding: "40px", fontFamily: "sans-serif", margintop:"60px"}}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {/* Swiggy Logo and Copyright */}
        <div>
          <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" backgroundColor="orange" alt="Swiggy" width="100" />
          <p>© 2025 Swiggy Limited</p>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Swiggy Corporate</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Swiggy One</p>
          <p>Swiggy Instamart</p>
          <p>Swiggy Dineout</p>
          <p>Swiggy Genie</p>
          <p>Minis</p>
          <p>Pyng</p>
        </div>

        {/* Contact Us */}
        <div>
          <h4>Contact us</h4>
          <p>Help & Support</p>
          <p>Partner With Us</p>
          <p>Ride With Us</p>
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>

        {/* Cities */}
        <div>
          <h4>Available in:</h4>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>
          <select>
            <option>685 cities</option>
          </select>
        </div>

        {/* Life at Swiggy */}
        <div>
          <h4>Life at Swiggy</h4>
          <p>Explore With Swiggy</p>
          <p>Swiggy News</p>
          <p>Snackables</p>
          <h4>Social Links</h4>
          <p>📱 Instagram | 📘 Facebook | 🐦 Twitter</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <p><b>For better experience, download the Swiggy app now</b></p>
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          width="120"
          style={{ marginRight: "10px" }}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          width="130"
        />
      </div>
    </footer>
  );
}
