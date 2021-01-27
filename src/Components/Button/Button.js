import s from './Button.module.css';
import { animateScroll as scroll } from 'react-scroll';

export default function Button({ onLoadMore }) {
  const loadMore = () => {
    onLoadMore();
    scroll.scrollToBottom();
  };
  return (
    <div className={s.container}>
      <button type="submit" className={s.Button} onClick={loadMore}>
        Load more
      </button>
    </div>
  );
}
