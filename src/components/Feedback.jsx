import React from 'react';

const Feedback = () => (
  <div>
    <h3>Обратная связь</h3>
    <div className="feedback-form">
      <form className="feedback-form__inner" action="/" method="POST">
        <div className="feedback-form__section">
          <label className="feedback-form__label" htmlFor="name">Имя *</label>
          <input className="feedback-form__input" id="name" required type="text" placeholder="Имя" />
        </div>
        <div className="feedback-form__section">
          <label className="feedback-form__label" htmlFor="email">Email *</label>
          <input className="feedback-form__input" id="email" required type="text" placeholder="Email" />
        </div>
        <div className="feedback-form__section">
          <label className="feedback-form__label" htmlFor="message">Сообщение *</label>
          <textarea className="feedback-form__input feedback-form__textarea" name="message" id="message" placeholder="Сообщение" />
        </div>
        <div className="feedback-form__section">
          <label className="feedback-form__label" htmlFor="file">Прикрепить файл *</label>
          <input name="file" type="file" />
        </div>
        <div className="feedback-form__buttons">
          <button className="feedback-form__button" type="submit">Отправить</button>
          <button className="feedback-form__button" type="reset">Очистить</button>
        </div>
      </form>
    </div>
  </div>
);

export default Feedback;
