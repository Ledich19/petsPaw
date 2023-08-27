import React, {
  DragEvent,
  MouseEventHandler,
  ChangeEvent,
  MouseEvent,
  useState,
  useRef,
} from 'react';
import s from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../components/Button/Button';
import { setStateModal } from '../../redux/stateReducer';
import { useUploadPostMutation } from '../../services/imagesAPI';

const Modal = () => {
  const dispatch = useAppDispatch();
  const closeModalElemRef = useRef<HTMLDivElement>(null);

  const [updatePost, result] = useUploadPostMutation();
  const { isOpenModal } = useAppSelector((store) => store.state);
  const [imageSrc, setImageSrc] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  if (!isOpenModal) {
    return null;
  }
  const handleCloseModal = (e: MouseEvent<HTMLButtonElement>) => {
    if (
      e.target === e.currentTarget ||
      (closeModalElemRef.current && e.target === closeModalElemRef.current)
    ) {
      dispatch(setStateModal(false));
    }
  };
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setImageSrc(event.target.result);
          setSelectedFile(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setImageSrc(event.target.result);
          setSelectedFile(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpload = () => {
    if (selectedFile) {
      updatePost({ file: selectedFile });
    }
  };

  return (
    <button type="button" className={s.darkBG} onClick={handleCloseModal} tabIndex={0}>
      <div ref={closeModalElemRef} className={s.centered}>
        <div className={s.modal}>
          <div className={s.modalHeader}>
            <h5 className={s.heading}>Upload a .jpg or .png Cat Image</h5>
            <div className={s.info}>
              Any uploads must comply with the <span className={s.red}>upload guidelines</span> or
              face deletion.
            </div>
          </div>

          <div className={s.closeBtn}>
            <Button handler={handleCloseModal} size="small" type="close" />
          </div>

          <div
            className={`${s.uploadSpace} ${isDragging ? s.dragging : ''}`}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
          >
            {imageSrc ? (
              <img className={s.image} src={imageSrc} alt="" />
            ) : (
              <div className={s.uploadText}>
                <span className={s.pointText}>Drag here</span> your file or{' '}
                <label htmlFor="galleryFileInput" className={s.pointTextBtn}>
                  Click here
                  <input
                    id="galleryFileInput"
                    onChange={handleSelectFile}
                    className={s.fileInput}
                    type="file"
                  />
                </label>{' '}
                to upload
              </div>
            )}
          </div>

          <div className={s.uploadActions}>
            {selectedFile ? (
              <div className={s.haveActions}>
                <span>{`Image File Name: ${selectedFile.name}.jpg`}</span>
                <button className={s.uploadBtn} onClick={handleUpload} type="button">
                  {result.isLoading && <span className="icon-spinner2" />}
                  Upload photo
                </button>
              </div>
            ) : (
              <div className={s.noAction}>No file selected</div>
            )}

            {result.isSuccess && (
              <div className={s.result}>
                <span className={`${s.green} icon-success`} />
                <div className={s.resultText}>Thanks for the Upload - Cat found!</div>
              </div>
            )}
            {result.isError && (
              <div className={s.result}>
                <span className={`${s.red} icon-close`} />
                <div className={s.resultText}>No Cat found - try a different one</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Modal;
