import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styles from "./FormCameraComponent.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const FormCameraComponent = () => {
  const webcamRef = useRef(null);
  const [img, setImg] = useState(null);

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className={styles.cameraContainer}>
      {img === null ? (
        <div className={styles.camera}>
          <Webcam
            height={200}
            width={200}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            screenshotQuality={0.8}
          />
          <button onClick={capture}>
            <FontAwesomeIcon icon={faCamera} />
          </button>
        </div>
      ) : (
        <div className={styles.camera}>
          <button onClick={() => setImg(null)}>
            <FontAwesomeIcon icon={faCamera} />
          </button>
          <img src={img} alt="screenshot" />
        </div>
      )}
    </div>
  );
};

export default FormCameraComponent;
