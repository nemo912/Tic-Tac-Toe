import * as s from '@styl/message-bubble.module.css';

export default function MessageBubble({ message }) {
  return (
    <div className={s['message-bubble']}>
      {message}
    </div>
  )
}
