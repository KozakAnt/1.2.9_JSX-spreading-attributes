import { Input } from './Input';

export const Form = () => {
  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={(e) => e.preventDefault()}>
      <Input
        labelText="Имя пользователя"
        id="user_name"
        type="text"
        placeholder="Введите ваше имя"
        className="field"
      />

      <Input
        labelText="Email"
        id="user_email"
        type="email"
        placeholder="Введите ваш email"
        className="field"
      />

      <Input
        labelText="Пароль"
        id="user_password"
        type="password"
        placeholder="Введите ваш пароль"
        className="field"
      />
      

      <button type="submit" style={{ marginTop: '8px', padding: '10px', cursor: 'pointer' }}>
        Отправить
      </button>
    </form>
  );
};
