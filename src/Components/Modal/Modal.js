import s from './Modal.module.css';

export default function Modal({ onClose, src, alt }) {
  const handlebackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handlebackdropClick}>
      <div className={s.Modal}>
        <img src={src} alt={alt} className={s.image} />
      </div>
    </div>
  );
}
