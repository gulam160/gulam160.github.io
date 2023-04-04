import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Modal from "react-modal";
// import { useState } from "react";
// import closeModal from "../images/close.svg";

const Project = ({
  technologies,
  title,
  image,
  color,
  id,
  github,
  deployed,
  description,
}) => {
  return (
    <motion.div
      className="project-card"
      style={{ background: color, color: "white" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <img src={image} alt={title} width="500" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}.</p>
      <p className="project-tech-stack">{technologies}.</p>
      <div className="project-links-box">
        <button
          className="project-github-link"
          onClick={() => window.open(`${github}`, "_blank")}
        >
          GitHub <i className="fa-brands fa-github"></i>
        </button>
        <button
          className="btn project-deployed-link"
          onClick={() => window.open(`${deployed}`, "_blank")}
        >
          Live Link <i className="fa-solid fa-link"></i>
        </button>
      </div>
    </motion.div>
  );
};

// const [ref, inView] = useInView({
//   threshold: 0.5,
//   triggerOnce: true,
// });

// Modal.setAppElement("#root");

// const [showModal, setShowModal] = useState(false);
// const handleOpenModal = () => setShowModal(true);
// const handleCloseModal = () => setShowModal(false);

// const projectDescription = "Click to View";
// <motion.div
//   ref={ref}
//   className="col-sm-12 col-lg-6 project-card"
//   variants={variants}
//   initial="hidden"
//   animate={inView ? "visible" : "hidden"}
//   transition={{ duration: 0.4, ease: "easeInOut" }}
// >
//   <div
//     style={{ backgroundColor: color }}
//     className="projectCard d-flex align-items-center justify-content-center p-5"
//     onClick={handleOpenModal}
//   >
//     <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
//       <p className="tech project-tech-stack">
//         <em>{technologies}</em>
//       </p>
//       <h3 className="projectTitle project-title">{title}</h3>
//       <p className="project-description">{projectDescription}</p>
//       <p className="project-github-link" onClick={() => console.log("")}>
//         {""}
//       </p>
//       <p className="project-deployed-link" onClick={() => console.log("")}>
//         {""}
//       </p>
//     </div>
//     <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
//       <img src={image} alt="Laptop displaying application" />
//     </div>
//   </div>
//   <Modal
//     isOpen={showModal}
//     onRequestClose={handleCloseModal}
//     style={{
//       content: {
//         backgroundColor: "#101010",
//         color: "#9f9f9f",
//         padding: "60px",
//         display: "flex",
//         flexDirection: "column",
//         width: "400px",
//         top: "50%",
//         left: "50%",
//         right: "auto",
//         bottom: "auto",
//         marginRight: "-50%",
//         transform: "translate(-50%, -50%)",
//         zIndex: "999",
//       },
//     }}
//   >
//     <img
//       src={closeModal}
//       className="closeMenu closeModal"
//       onClick={handleCloseModal}
//       alt="Close"
//     ></img>
//     <h3 className="modalTitle project-title">{title}</h3>
//     <p className="projectDescription">{description}</p>
//     <button
//       className="btn project-github-link"
//       onClick={() => window.open(`${github}`, "_blank")}
//     >
//       GitHub Repo
//     </button>
//     <button
//       className="btn project-deployed-link"
//       onClick={() => window.open(`${deployed}`, "_blank")}
//     >
//       Live Link
//     </button>
//   </Modal>
// </motion.div>

export default Project;
