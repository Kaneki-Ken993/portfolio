import React, { useState } from "react";
import { Zoom } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
    const [ showTooltip, setShowTooltip ] = useState(false);
    const copyToClipboard = () => {
        navigator.clipboard.writeText("omar.el-hadi@epitech.eu");
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 1000);
    };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Me Contacter</div>
        <ScrollAnimation animateIn="animate__fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>omar.el-hadi@epitech.eu</span>
                <Tooltip
                  PopperProps={{ disablePortal: true }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copié!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton onClick={copyToClipboard}>
                    <MdContentCopy
                      size={25}
                      style={{ cursor: "pointer", color: "#151418" }}
                    />
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:omar.el-hadi@epitech.eu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Envoyer un mail
              </a>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}


export default Contact;